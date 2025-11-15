export function ProductGallery({ imageUrl, selectedImage, onSelect }) {
    return (
        <div className="flex items-start gap-x-8">
            <div className="grid grid-cols-1 grid-rows-3 gap-2">
                {imageUrl.map((url) => (
                    <img
                        key={url}
                        src={url}
                        alt="preview"
                        onClick={() => onSelect(url)}
                        className="h-40 w-32 cursor-pointer object-cover"
                    />
                ))}
            </div>
            <div className="flex">
                <img
                    src={selectedImage}
                    alt="selected"
                    className="top h-[510px] w-[510px] self-start rounded-md object-cover object-top"
                />
            </div>
        </div>
    )
}
