import { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Layout from "../../components/Layout"
import { actionGetProduct } from "../../redux/actions/productActions"

const SavedDetail = () => {

    const { product, isLoading } = useSelector((state: any) => state.productReducer)

    const dispatch = useDispatch()
    const { id } = useParams()

    useLayoutEffect(() => {
        actionGetProduct(id as string, dispatch)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <div className="pb-[42px]">
                <div className="mt-[32px] mb-[8px]">
                    {isLoading ? (
                        <div className="bg-gray-300 animate-pulse h-7 w-40 rounded-md"></div>
                    ) : (
                        <h3 className="font-medium">{product.title}</h3>
                    )}
                </div>
                <div>
                    {isLoading ? (
                        <div className="aspect-square object-cover w-full bg-gray-300 rounded-md animate-pulse"></div>
                    ) : (
                        <img src={product.img} className="aspect-square overflow-hidden w-full object-cover rounded-md" alt="" />
                    )}
                </div>
                <div className="mt-[8px]">
                    {isLoading ? (
                        <div>
                            <div className="w-full bg-gray-300 h-7 animate-pulse rounded-md" />
                            <div className="w-full bg-gray-300 h-7 animate-pulse rounded-md mt-[4px]" />
                            <div className="w-72 bg-gray-300 h-7 animate-pulse rounded-md mt-[4px]" />
                        </div>
                    ) : (
                        <div>{ product.description }</div>
                    )}

                </div>
            </div>
        </Layout>
    )
}

export default SavedDetail