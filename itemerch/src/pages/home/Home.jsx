import { Hero } from './components/Hero'
import { Products } from './components/Products'

export function Home() {
    return (
        <div className="flex flex-col gap-y-2">
            <Hero />
            <Products />
        </div>
    )
}
