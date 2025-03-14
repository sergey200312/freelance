import React, { FC } from 'react'
import { setSpecializationName } from '../../../store/features/filterSlice'
import { Input } from '../../ui/input'
import { useDispatch } from 'react-redux'
import useDropdown from '../../../hooks/useDropdown'
import { useGetAllCategoriesQuery } from '../../../store/api/categoryApi'

export const SelectSpec: FC = () => {
    const { data, isLoading } = useGetAllCategoriesQuery()
    console.log(data)

    const filteredCategories = data ? data.filter((el: any) => el.parent) : []
    console.log(filteredCategories)
    const dropDown = useDropdown(filteredCategories, 500)
    const dispatch = useDispatch()
     
    

    return (
        <div className='relative'>
            <Input {...dropDown.searchTerm}
                placeholder='Выберите категорию...'
                onFocus={dropDown.handleFocus}
                onBlur={dropDown.handleBlur} />

            {dropDown.isFocus && filteredCategories.length > 0 && (
                <div className=" rounded-md  max-h-50 min-h-fit w-1/2 border-[1.5px] bg-white absolute top-10 border-black border-solid overflow-auto">
                    <ul>
                        {dropDown.filteredValues.map((category) => (
                                <li
                                    className="border-black rounded-md cursor-pointer hover:bg-gray-200 p-2"
                                    key={category._id}
                                    onMouseDown={() => { dropDown.handleSelect(category);
                                        dispatch(setSpecializationName(category.name))
                                    }}
                                >
                                    {category.name}
                                </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div >
    )
}
