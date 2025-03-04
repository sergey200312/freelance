import { toast } from 'sonner'

export const handleApiError = (error: any) => {
    const errorMessage = error?.data?.message || 'Произошла ошибка'
    toast(errorMessage)
}