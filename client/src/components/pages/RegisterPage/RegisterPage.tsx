import { z } from 'zod'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { toast } from 'sonner'
import { useRegisterMutation } from '../../../store/api/authApi'
import { handleApiError } from '../../../utils/handleApiError'

const formSchema = z.object({
  username: z.string().min(2, { message: 'Никнейм должен содержать хотя бы 2 символа'}),
  email: z.string().email({ message: 'Некорректный email адрес' }).nonempty(),
  password: z.string().min(6, { message: 'Пароль должен содержать как минимум 6 символов' })
})

export const RegisterPage: FC = () => {

  const [register, { isLoading }] = useRegisterMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const result =  await register(values).unwrap()
      toast('Регистрация прошла успешно')
    } catch (error: any) {
      handleApiError(error)
    }
  }


  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex-col p-2'>
        <p className='text-center font-bold text-2xl mb-8'>Регистрация</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 min-w-[350px]">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Никнейм</FormLabel>
                  <FormControl>
                    <Input placeholder="Никнейм" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="Пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-center'>
              <Button disabled={isLoading} variant='secondary' type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}