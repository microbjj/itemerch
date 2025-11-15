import { Link } from 'react-router'
import clsx from 'clsx'

export const ControlButton = ({ children, className, title, path }) => {
    return (
        <Link to={path}>
            <button
                title={title}
                className={clsx('mt-2 cursor-pointer duration-100', className)}
            >
                {children}
            </button>
        </Link>
    )
}
