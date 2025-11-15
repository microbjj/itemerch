export const SubmitButton = ({ children, disabled }) => {
    return (
        <button
            className="hover:bg-dark mt-2 mb-1 w-full cursor-pointer rounded-md bg-black py-2 text-sm font-semibold text-white duration-100"
            disabled={disabled}
        >
            {children}
        </button>
    )
}
