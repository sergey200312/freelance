import { useState } from "react"

const useInput = (initialValue: string) => {

    const [value, setValue] = useState(initialValue)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value, 
        onChange: handleChangeInput,
        setValue
    }
}

export default useInput