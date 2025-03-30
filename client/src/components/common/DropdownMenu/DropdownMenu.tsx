import { FC } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../ui/dropdown-menu'

interface DropdownMenuProps {
  children: React.ReactNode
}

export const DropdownMenuDemo: FC<DropdownMenuProps> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children} 
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Профиль</DropdownMenuItem>
          <DropdownMenuItem>Настройки</DropdownMenuItem>
          <DropdownMenuItem>Выйти</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
