export const Loader = () => {
    return <ThreeDotsLoader />
}

const ThreeDotsLoader = () => {
    return (
        <div className="flex h-2/3 items-center justify-center gap-x-1">
            <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-black"></div>
        </div>
    )
}
