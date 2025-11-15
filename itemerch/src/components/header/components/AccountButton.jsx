import { Link } from 'react-router'

export const AccountButton = ({ children, title, path }) => {
    return (
        <Link to={path}>
            <button
                title={title}
                className="cursor-pointer rounded-3xl bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500 p-0.5 font-semibold uppercase shadow-xl transition-colors duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:via-purple-400 hover:to-indigo-400"
            >
                <div className="flex h-10 min-w-25 items-center justify-center rounded-3xl bg-white px-4 text-sm">
                    {children}
                </div>
            </button>
        </Link>
    )
}
