import clsx from 'clsx'
import { Input } from '@/components/form'
import { useNavigate } from 'react-router'
import { useChangePasswordForm } from './hooks'

export function Password() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        onSavePassword,
        isLoading,
        success,
    } = useChangePasswordForm()

    const buttonTitle = success ? 'Пароль изменен' : 'Изменить'

    return (
        <form className="flex w-1/2 flex-col gap-y-2">
            <Input
                id="currentPassword"
                type="password"
                title="Текущий пароль"
                register={register}
                error={errors.currentPassword}
                component="changePassword"
            />
            <Input
                id="newPassword"
                type="password"
                title="Новый пароль"
                register={register}
                error={errors.newPassword}
                component="changePassword"
            />
            <Input
                id="confirmNewPassword"
                type="password"
                title="Повтор пароля"
                register={register}
                error={errors.confirmNewPassword}
                component="changePassword"
            />
            <div className="flex gap-x-4">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    disabled={isLoading || success}
                    className="mt-4 w-full cursor-pointer rounded-md bg-white py-2 text-center text-black duration-100 hover:bg-gray-200 disabled:cursor-default disabled:bg-gray-200"
                >
                    Назад
                </button>
                <button
                    disabled={isLoading || success}
                    onClick={handleSubmit(onSavePassword)}
                    className={clsx(
                        'hover:bg-dark disabled:bg-dark mt-4 w-full cursor-pointer rounded-md bg-black py-2 text-white duration-100 disabled:cursor-default',
                        success && 'disabled:bg-green-700',
                    )}
                >
                    {isLoading ? 'Подождите..' : buttonTitle}
                </button>
            </div>
        </form>
    )
}
