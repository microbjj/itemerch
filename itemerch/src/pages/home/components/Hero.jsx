export function Hero() {
    return (
        <div className="w-full justify-center py-16">
            <div className="mx-auto flex w-4/5 flex-col items-center justify-center">
                <h1 className="mb-6 text-center text-7xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p className="mb-6 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br /> A debitis dolorem esse necessitatibus non
                </p>
                <button className="h-14 w-66 cursor-pointer rounded-4xl bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500 p-0.5 font-semibold text-white uppercase shadow-xl transition-colors duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:via-purple-400 hover:to-indigo-400">
                    Узнать больше
                </button>
            </div>
        </div>
    )
}
