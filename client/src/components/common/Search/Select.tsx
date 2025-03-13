import React, { FC, useEffect, useRef, useState } from 'react'
import { Input } from '../../ui/input'
import useDropdown from '../../../hooks/useDropdown'
import { useDispatch } from 'react-redux'
import { setCategoryName } from '../../../store/features/filterSlice'

const values = [
    { id: 1, name: 'Программирование' },
    { id: 2, name: 'Дизайн' }
]

export const Select: FC = () => {

    const dropDown = useDropdown(values, 500)
    const dispatch = useDispatch()
    

    return (
        <div className='relative'>
            <Input {...dropDown.searchTerm}
                placeholder='Выберите категорию...'
                onFocus={dropDown.handleFocus}
                onBlur={dropDown.handleBlur} />

            {dropDown.isFocus && values.length > 0 && (
                <div className=" rounded-md  max-h-50 min-h-fit w-1/2 border-[1.5px] bg-white absolute top-10 border-black border-solid overflow-auto">
                    <ul>
                        {dropDown.filteredValues.map((option) => (
                                <li
                                    className="border-black rounded-md cursor-pointer hover:bg-gray-200 p-2"
                                    key={option.id}
                                    onMouseDown={() => { dropDown.handleSelect(option);
                                        dispatch(setCategoryName(option.name))
                                    }}
                                >
                                    {option.name}
                                </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div >
    )
}
