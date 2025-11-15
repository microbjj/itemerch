import { selectUserRole } from '@/store/selectors'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import { GrUserAdmin } from 'react-icons/gr'
import { ROLE } from '@/utils/constants'

export function AdminButton() {
    const userRole = useSelector(selectUserRole)
    if (userRole !== ROLE.ADMIN) {
        return
    }
    return (
        <Link
            title="Управление"
            to="/admin"
            className="flex cursor-pointer items-center justify-center hover:text-fuchsia-800"
        >
            <GrUserAdmin size="20px" />
        </Link>
    )
}
