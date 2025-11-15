import { FaGithub, FaTelegram } from 'react-icons/fa'
import { FaVk } from 'react-icons/fa6'

export function Footer() {
    return (
        <footer className="flex min-h-20 items-center justify-between">
            <p className="text-sm">© 2025 Itemerch. Все права защищены.</p>
            <div className="flex gap-x-4">
                <a href="https://vk.com/id22793635" target="_blank">
                    <FaVk size="26px" />
                </a>
                <a href="https://t.me/ekirnichny" target="_blank">
                    <FaTelegram size="26px" />
                </a>
                <a href="https://github.com/microbjj" target="_blank">
                    <FaGithub size="26px" />
                </a>
            </div>
        </footer>
    )
}
