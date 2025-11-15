import { ErrorMessage } from '@/components'

export function RadioForm({
    id,
    register,
    error,
    list = [{ value: 'boxberry', title: 'Boxberry' }],
}) {
    return (
        <div className="flex flex-col gap-y-2">
            {list.map(({ value, title }) => (
                <label key={value} className="flex items-center gap-x-2">
                    <input
                        {...register(id)}
                        type="radio"
                        name={id}
                        value={value}
                    />
                    {title}
                </label>
            ))}
            <ErrorMessage error={error} />
        </div>
    )
}
