import clsx from 'clsx'
import { ErrorMessage } from '../error/ErrorMessage'

export function Select({
    id,
    title,
    className,
    error,
    options = [],
    register,
}) {
    return (
        <>
            <label htmlFor={id} className={clsx('mt-2 text-xs', className)}>
                {title}
            </label>
            <select id={id} {...register(id)} className="px-2 text-sm">
                {options.map(({ value, title }) => (
                    <option key={value} value={value}>
                        {title}
                    </option>
                ))}
            </select>
            <ErrorMessage error={error} />
        </>
    )
}
