const ColumnList = ({ title, items, isLoading }: { title: string, items: string[], isLoading: boolean }) => {

    return (
        <div className='mt-[32px]'>
            <h3 className='font-bold text-[16px]'>{title}</h3>

            {isLoading ? (
                <div className='mt-[8px]'>
                    <div className="columns-2 md:columns-5 lg:columns-9 gap-2 animate-pulse md:gap-2">
                        {[...Array(10)].map((key: number, index: number) => (
                            <div className="w-full aspect-square bg-gray-300 mb-2 object-cover rounded-lg" key={index} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className='mt-[8px]'>
                    <div className="columns-2 md:columns-5 lg:columns-9 gap-2 md:gap-2">
                        {items.map((image: string, key: number) => (
                            <img className="w-full aspect-square mb-2 object-cover rounded-lg" alt="" src={image} key={key} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ColumnList