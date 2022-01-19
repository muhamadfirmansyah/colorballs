import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ColumnList from "../../components/ColumnList"
import Layout from "../../components/Layout"
import { actionGetProducts } from "../../redux/actions/productActions"

const Saved = () => {

    const dispatch = useDispatch()
    const products = useSelector((state: any) => state.productReducer.products)

    useEffect(() => {
        actionGetProducts(dispatch)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>

            <ColumnList title="Social Engineering" items={products.map((item: any) => item.img)} />
        </Layout>
    )
}

export default Saved