import { Link } from 'react-router'
import { Loader } from '@/components'
import { useAuthForm } from './hooks/use-auth-form'
import { Input, SubmitButton } from '@/components/form'

export function Auth() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        onSubmit,
    } = useAuthForm()

    if (isSubmitting) {
        return <Loader />
    }

    return (
        <div className="mx-auto my-30 flex w-80 flex-col rounded-md border border-gray-500 py-8">
            <div className="flex w-full flex-col items-center px-6">
                <h2 className="mb-4 text-lg font-bold">Вход в аккаунт</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-y-2"
                >
                    <Input
                        id="username"
                        title="Имя пользователя"
                        register={register}
                        placeholder="Имя пользователя"
                        component="auth"
                        error={errors.username}
                    />
                    <Input
                        id="password"
                        title="Пароль"
                        type="password"
                        register={register}
                        placeholder="Пароль"
                        component="auth"
                        error={errors.password}
                    />
                    <SubmitButton disabled={false}>Войти</SubmitButton>
                    <div className="flex justify-end gap-x-2 px-2 text-xs">
                        <p>Нет аккаунта?</p>
                        <Link className="underline" to="/register">
                            Регистрация⟶
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
