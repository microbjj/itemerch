import { Search } from '@/components'
import { CartIcon } from './CartIcon'
import { FaRegHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { AdminButton } from './AdminButton'
import { useLocation } from 'react-router'
import { AccountButton } from './AccountButton'
import { ControlButton } from './ControlButton'
import { selectUserUsername } from '@/store/selectors'

export function Controls() {
    const username = useSelector(selectUserUsername)
    const location = useLocation()

    return (
        <div className="flex items-center gap-x-6">
            {location.pathname === '/' && <Search />}
            <ControlButton title="Избранное" path="/favorites">
                <FaRegHeart size="20" className="hover:text-red-500" />
            </ControlButton>
            <CartIcon />
            <AdminButton />

            {username ? (
                <AccountButton title="Личный кабинет" path="/profile">
                    {username}
                </AccountButton>
            ) : (
                <AccountButton title="Войти/Регистрация" path="/auth">
                    Войти
                </AccountButton>
            )}
        </div>
    )
}
