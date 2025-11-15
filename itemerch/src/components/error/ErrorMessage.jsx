import clsx from 'clsx'
import { LuTriangleAlert } from 'react-icons/lu'

export function ErrorMessage({ error, className }) {
    return (
        <>
            {error && (
                <div className="flex items-center gap-x-1 px-1 py-1">
                    <LuTriangleAlert
                        size="12px"
                        className="mb-0.5"
                        color="oklch(50.5% 0.213 27.518)"
                    />
                    <span
                        className={clsx(
                            'text-center text-xs text-red-600',
                            className,
                        )}
                    >
                        {error.message || error}
                    </span>
                </div>
            )}
        </>
    )
}
