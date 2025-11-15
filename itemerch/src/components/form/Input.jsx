import { ErrorMessage } from '@/components'
import { styles } from './constants/styles'

export const Input = ({
    id,
    error,
    title,
    register,
    placeholder = '',
    type = 'text',
    component = 'auth',
    disabled,
}) => {
    return (
        <>
            <label htmlFor={id} className={styles[component].labelClass}>
                {title}
            </label>
            <input
                disabled={disabled}
                {...register(id)}
                type={type}
                placeholder={placeholder}
                className={styles[component].inputClass}
            />
            <ErrorMessage error={error} />
        </>
    )
}
