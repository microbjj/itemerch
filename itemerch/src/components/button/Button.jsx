import clsx from 'clsx'

export const Button = ({ title, onClick, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'w-[200px] cursor-pointer rounded-md bg-gray-400 py-2 text-sm duration-100 hover:bg-gray-500 disabled:cursor-default',
                className,
            )}
            {...props}
        >
            {title}
        </button>
    )
}
