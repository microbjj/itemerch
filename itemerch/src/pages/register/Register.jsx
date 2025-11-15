import { Link } from 'react-router'
import { Loader } from '@/components'
import { useRegisterForm } from './hooks/use-register-form'
import { Input, SubmitButton } from '@/components/form'

export function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        onSubmit,
        isLoading,
    } = useRegisterForm()

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="mx-auto my-30 flex w-80 flex-col rounded-md border border-gray-500 py-8">
            <div className="flex w-full flex-col items-center px-6">
                <h2 className="mb-4 text-lg font-bold">Регистрация</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-y-2"
                >
                    <Input
                        id="username"
                        register={register}
                        placeholder="Имя пользователя"
                        component="auth"
                        error={errors.username}
                    />
                    <Input
                        id="password"
                        type="password"
                        register={register}
                        placeholder="Пароль"
                        component="auth"
                        error={errors.password}
                    />
                    <Input
                        id="confirmPassword"
                        type="password"
                        register={register}
                        placeholder="Повтор пароля"
                        component="auth"
                        error={errors.confirmPassword}
                    />

                    <SubmitButton disabled={false}>
                        Зарегистрироваться
                    </SubmitButton>

                    <div className="flex justify-end gap-x-2 px-2 text-xs">
                        <p>Уже есть аккаунт?</p>
                        <Link className="underline" to="/auth">
                            Войти⟶
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
