import { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ImageCard from "../../components/ImageCard"
import Layout from "../../components/Layout"
import { actionGetProducts } from "../../redux/actions/productActions"

const Saved = () => {

    const dispatch = useDispatch()
    const { products, isLoading } = useSelector((state: any) => state.productReducer)

    useLayoutEffect(() => {
        actionGetProducts(dispatch)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <div className='mt-[32px]'>
                <h3 className='font-bold text-[16px]'>Favorites</h3>
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
                            {products.map((item: any) => (
                                <ImageCard item={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </Layout>
    )
}

export default Saved