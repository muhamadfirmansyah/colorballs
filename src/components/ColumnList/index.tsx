const ColumnList = ({ title, items }: {title: string, items: string[]}) => {
    return (
        <div className='mt-[32px]'>
            <h3 className='font-bold text-[16px]'>Ecosystem</h3>

            <div className='mt-[8px]'>
                <div className="columns-2 md:columns-5 lg:columns-9 gap-2 md:gap-2">
                    {items.map((image: string, key: number) => (
                        <img className="w-full aspect-square mb-2 object-cover rounded-lg" alt="" src={image} key={key} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColumnList