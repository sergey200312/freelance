import React, { useState } from 'react'
import useInput from './useInput'
import useDebounce from './useDebounce'

interface Option {
    id: number
    name: string
}

const useDropdown = (options: Option[], delay: number) => {

    const searchTerm = useInput('')
    const [isFocus, setIsFocus] = useState(false)
    const [, setSelectedOption] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm.value, delay)

    const filteredValues = options.filter(opt =>
        opt.name.toLowerCase().trim().includes(searchTerm.value.toLowerCase().trim())
    )

    const handleBlur = () => setIsFocus(false)

    const handleFocus = () => setIsFocus(true)

    const handleSelect = (option: Option) => {
        setSelectedOption(option.name);
        searchTerm.setValue(option.name);
        setIsFocus(false);
    }

    return {
        isFocus, 
        searchTerm, 
        filteredValues, 
        handleBlur, 
        handleFocus, 
        handleSelect,
        debouncedSearchTerm
    }
}

export default useDropdown