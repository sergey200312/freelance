import { z } from 'zod'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { MainLayout } from '../../../layouts/MainLayout'

const formSchema = z.object({
    title: z.string().min(5, { message: 'Заголовок должен содержать от 5 до 300 символов' }).max(300, { message: 'Заголовок должен содержать от 5 до 300 символов' }),
    description: z.string().min(10, { message: 'Описание должно содержать от 10 до 2000 символов' }).max(2000, { message: 'Описание должно содержать от 10 до 2000 символов' })
})
export const CreateOrder: FC = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // try {
        //   console.log('Отправка формы:', values) 
        //   const response = await login(values).unwrap()
        //   dispatch(authLogin(response.token))
        //   toast('Вы успешно вошли в аккаунт')
        // } catch (error: any) {
        //   handleApiError(error)
        // }
    }

    return (
        <MainLayout>
            <div className='min-h-screen flex justify-center items-center bg-gray-200 shadow-default '>
                <div className=''>
                    <p className='text-center font-bold text-2xl mb-8 '>Создание заказа</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 min-w-[350px]">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Название</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Название" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Описание</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Описание" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex justify-center'>
                                <Button variant='secondary' type="submit">Войти</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </MainLayout>
    )
}
