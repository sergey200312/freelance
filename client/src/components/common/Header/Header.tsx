import { FC } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel } from "../../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../router/constats";
import { logout } from "../../../store/features/authSlice";
import { Button } from "../../ui/button";
import { RootState } from "../../../store/createStore";

export const Header: FC = () => {
  const dispatch = useDispatch();
  const avatar = useSelector((state: RootState) => state.auth.user.avatar_url);

  return (
    <header className="relative py-4 min-h-[50px] px-44">
      <div className="flex items-center justify-between">
        <h4 className="cursor-pointer">Логотип</h4>
        <aside>
          <ul className="flex justify-center items-center gap-8">
            <li className="text-white cursor-pointer mx-auto hover:border-b border-white transition-all duration-75">Услуги</li>
            <li className="text-white cursor-pointer mx-auto hover:border-b border-white transition-all duration-75">Заказы</li>
            <li className="text-white cursor-pointer mx-auto hover:border-b border-white transition-all duration-75">Фрилансеры</li>

          </ul>
        </aside>
        <div className="flex items-center gap-10 relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                src={avatar}
                alt="Аватарка"
                height={30}
                width={30}
                className="rounded-full cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Профиль</DropdownMenuItem>
                <DropdownMenuItem> <Link to={ROUTES.MYPOSTERORDERS}>Мои заказы</Link></DropdownMenuItem>
                <DropdownMenuItem onClick={() => dispatch(logout())}>Выйти</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="default" className="shadow-default" onClick={() => dispatch(logout())}>
            Выйти
          </Button>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-sky-600 shadow-default"></div>
    </header>
  );
};
