import { z } from 'zod'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { MainLayout } from '../../../layouts/MainLayout'
import { Textarea } from '../../ui/textarea'
import { SelectDropdown } from '../../common/Filter/SelectDropdown'
import { useCreateOrderMutation } from '../../../store/api/orderApi'
import { toast } from 'sonner'
import { handleApiError } from '../../../utils/handleApiError'

const formSchema = z.object({
    title: z.string().min(5, { message: 'Заголовок должен содержать от 5 до 300 символов' }).max(300, { message: 'Заголовок должен содержать от 5 до 300 символов' }),
    description: z.string().min(10, { message: 'Описание должно содержать от 10 до 2000 символов' }).max(2000, { message: 'Описание должно содержать от 10 до 2000 символов' }),
    category: z.string({ message: 'Выберите категорию' }),
    specialization: z.string({ message: 'Выберите специализацию' }),
    budget: z.preprocess((val) => Number(val) || 0, z.number().min(0, { message: 'Бюджет должен быть числом' }))

})
export const CreateOrder: FC = () => {

    const [createOrder, { isLoading }] = useCreateOrderMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            category: '',
            specialization: '',
            budget: null
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log('Отправка формы:', values)
            const response = await createOrder(values).unwrap();
            toast('Заказ создан')
        } catch (error: any) {
            handleApiError(error)
        }
    }

    return (
        <MainLayout>
            <div className='min-h-screen flex justify-center items-center bg-gray-200 shadow-default rounded-md'>
                <div className='w-full p-6'>
                    <p className='text-center font-bold text-2xl mb-8 '>Создание заказа</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
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
                                            <Textarea rows={6} placeholder="Описание" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex  gap-4'>
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Категория</FormLabel>
                                            <FormControl>
                                                <SelectDropdown
                                                    placeholder="Выберите категорию..."
                                                    filterCondition={(el: any) => el.parent}
                                                    onSelect={(category) => field.onChange(category._id)}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="specialization"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Специализация</FormLabel>
                                            <FormControl>
                                                <SelectDropdown
                                                    placeholder="Выберите специализацию..."
                                                    filterCondition={(el: any) => !el.parent}
                                                    onSelect={(specialization) => field.onChange(specialization._id)}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Бюджет</FormLabel>
                                            <FormControl>
                                                <Input type='number' placeholder='Если оставляете поле пустым, то цена будет договорная' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
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
