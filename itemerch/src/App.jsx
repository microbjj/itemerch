import { AppRoutes } from './routes/AppRoutes'
import { useSelector } from 'react-redux'
import { useAuthLoader } from './hooks'
import { selectUserLoading } from './store/selectors'
import { FirstLoader, Footer, Header } from './components'

export function App() {
    useAuthLoader()

    const isLoading = useSelector(selectUserLoading)
    if (isLoading) {
        return (
            <div className="h-screen">
                <FirstLoader />
            </div>
        )
    }
    return (
        <div className="mx-auto flex h-screen max-w-7xl flex-col px-4 py-1">
            <Header />
            <main className="grow">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    )
}
