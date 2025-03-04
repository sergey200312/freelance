import { FC } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { useRegisterMutation } from '../../../store/api/authApi'
import { toast } from 'sonner'
import { handleApiError } from '../../../utils/handleApiError'

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'Имя должно содержать как минимум 2 символа' }),
  lastName: z.string().min(2, { message: 'Имя должно содержать как минимум 2 символа' }),
  email: z.string().email({ message: 'Некорректный email адрес' }).nonempty(),
  password: z.string().min(6, { message: 'Пароль должен содержать как минимум 6 символов' })
})

export const LoginPage: FC = () => {

  const [register, { isLoading }] = useRegisterMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const result = await register(values).unwrap()
      toast('Регистрация прошла успешно', result.data?.message)
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Фамилия</FormLabel>
                  <FormControl>
                    <Input placeholder="Фамилия" {...field} />
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