import { Logo, Controls } from './components'

export function Header() {
    return (
        <header className="mt-5 mb-5 flex min-h-12 w-full items-center justify-between gap-x-4">
            <Logo />
            <Controls />
        </header>
    )
}
