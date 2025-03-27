import { z } from 'zod'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { useLoginMutation } from '../../../store/api/authApi'
import { toast } from 'sonner'
import { handleApiError } from '../../../utils/handleApiError'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../../../store/features/authSlice'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../router/constats'

const formSchema = z.object({
  email: z.string().email({ message: 'Невалидный email' }),
  password: z.string().nonempty({ message: 'Пароль не должен быть пустым' })
})

export const LoginPage: FC = () => {
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log('Отправка формы:', values) 
      const response = await login(values).unwrap()
      const { token, _id, email } = response
      dispatch(authLogin({ token, _id, email }))
      toast('Вы успешно вошли в аккаунт')
      navigate(ROUTES.MAIN)

    } catch (error: any) {
      handleApiError(error)
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex-col p-2'>
        <p className='text-center font-bold text-2xl mb-8'>Вход</p> 
        <Form {...form}> 
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 min-w-[350px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-center'>
              <Button disabled={isLoading} variant='secondary' type="submit">Войти</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
