import { FC } from 'react'
import { setCategoryName, setSpecializationName } from '../../../store/features/filterSlice'
import { useDispatch } from 'react-redux'
import { SelectDropdown } from './SelectDropdown'
import { Search } from './Search'

export const Filters: FC = () => {
    const dispatch = useDispatch()

    return (
        <div className="mb-6 ">
            <div className='shadow-default '>
                <Search />
            </div>
            <div className='mt-2 grid grid-cols-2 gap-2 '>
                <div className='shadow-default'>
                    <SelectDropdown
                        placeholder="Выберите категорию..."
                        filterCondition={(el) => !el.parent}
                        onSelect={(category) => dispatch(setCategoryName(category.name))}
                    />
                </div>
                <div className='shadow-default'>
                    <SelectDropdown
                        placeholder="Выберите специализацию..."
                        filterCondition={(el) => el.parent}
                        onSelect={(category) => dispatch(setSpecializationName(category.name))}
                    />
                </div>
            </div>
            <div></div>
        </div >
    )
}
