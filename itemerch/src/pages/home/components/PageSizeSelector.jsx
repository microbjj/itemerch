export function PageSizeSelector({ onChange, pageSize }) {
    return (
        <div>
            <label htmlFor="pageSize" className="mb-4 text-sm">
                Кол-во на странице:
            </label>
            <select
                name="pageSize"
                id="pageSize"
                className="px-2 text-sm"
                onChange={onChange}
                value={pageSize}
            >
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={15}>15</option>
            </select>
        </div>
    )
}
