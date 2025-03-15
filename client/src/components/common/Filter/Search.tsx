import React, { FC, useEffect } from 'react'
import { Input } from '../../ui/input'
import useInput from '../../../hooks/useInput'
import useDebounce from '../../../hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../../../store/features/filterSlice'

export const Search: FC = () => {
    const searchTerm = useInput('')
    const debouncedSearchTerm = useDebounce(searchTerm.value, 500)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setSearchQuery(debouncedSearchTerm))
    }, [debouncedSearchTerm])

    return (
        <div >
            <Input className='' placeholder='Поиск по ключевым словам...(Название, Описание)'{...searchTerm} />
        </div>

    )
}