import { Link } from 'react-router'

export function NotFound() {
    return (
        <div className="flex h-140 flex-col items-center justify-center select-none">
            <div className="flex items-center justify-center text-8xl font-bold">
                <span className="relative">
                    <span className="absolute top-0 right-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-900 to-red-500 blur-2xl"></span>
                    <span className="relative">4</span>
                </span>
                <span className="relative">
                    <span className="absolute top-0 right-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-900 to-red-500 blur-2xl"></span>
                    <span className="relative">0</span>
                </span>
                <span className="relative">
                    <span className="absolute top-0 right-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-900 to-red-500 blur-2xl"></span>
                    <span className="relative">4</span>
                </span>
            </div>
            <p className="mt-4 text-lg">
                Такой страницы не существует.{' '}
                <Link to="/" className="text-blue-900 hover:underline">
                    На главную.
                </Link>
            </p>
        </div>
    )
}
