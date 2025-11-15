import { Link } from 'react-router'
import { useProfileForm } from './hooks'
import { Input, Button } from '@/components'

export function Profile() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        profile,
        onSaveForm,
        onLogout,
    } = useProfileForm()

    return (
        <div className="flex w-1/2 flex-col">
            <h2 className="mb-6 text-xl font-bold">Профиль</h2>

            <div className="flex gap-x-6">
                <div className="flex flex-col gap-y-2">
                    <div className="mb-4 self-center">
                        <img
                            alt="Аватар"
                            width="120px"
                            className="rounded-full shadow-md shadow-black/65"
                            src={profile.avatar?.path}
                        />
                    </div>
                    <Link to="/profile/password">
                        <Button
                            onClick={() => {}}
                            className={''}
                            title="Изменить пароль"
                        />
                    </Link>
                    <Button
                        onClick={onLogout}
                        className="bg-red-900 text-white hover:bg-red-800"
                        title="Выйти"
                    />
                </div>

                <form
                    onSubmit={handleSubmit(onSaveForm)}
                    className="flex w-full flex-col"
                >
                    <Input
                        id="firstName"
                        register={register}
                        error={errors.firstName}
                        placeholder="Имя"
                        title="Имя"
                        component="profile"
                        disabled={true}
                    />
                    <Input
                        id="email"
                        type="email"
                        register={register}
                        error={errors.email}
                        placeholder="Email"
                        title="Email"
                        component="profile"
                        disabled={true}
                    />
                    <Input
                        id="phone"
                        register={register}
                        error={errors.phone}
                        placeholder="+7 (999) 999-99-99"
                        title="Телефон"
                        component="profile"
                        disabled={true}
                    />
                </form>
            </div>
        </div>
    )
}
