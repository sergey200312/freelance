import React, { FC } from 'react'
import { Input } from '../../ui/input'
import { useDispatch } from 'react-redux'
import useDropdown from '../../../hooks/useDropdown'
import { useGetAllCategoriesQuery } from '../../../store/api/categoryApi'

interface SelectDropdownProps {
    placeholder: string;
    filterCondition: (el: any) => boolean;
    onSelect: (name: string) => void;
}

export const SelectDropdown: FC<SelectDropdownProps> = ({ placeholder, filterCondition, onSelect }) => {
    const { data, isLoading  } = useGetAllCategoriesQuery()
    const filteredCategories = data ? data.filter(filterCondition) : []
    const dropDown = useDropdown(filteredCategories, 500)
    const dispatch = useDispatch()

    return (
        <div className='relative w-full'>
            <Input
                 disabled={isLoading}
                {...dropDown.searchTerm}
                placeholder={placeholder}
                onFocus={dropDown.handleFocus}
                onBlur={dropDown.handleBlur}
            />

            {dropDown.isFocus && filteredCategories.length > 0 && (
                <div className="absolute w-full min-h-fit max-h-50 rounded-md border border-gray-300 bg-white overflow-auto text-base shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed">
                    <ul>
                        {dropDown.filteredValues.map((category) => (
                            <li
                                className="border-black rounded-md cursor-pointer hover:bg-gray-200 p-2"
                                key={category._id}
                                onMouseDown={() => {
                                    dropDown.handleSelect(category);
                                    onSelect(category.name);
                                }}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
