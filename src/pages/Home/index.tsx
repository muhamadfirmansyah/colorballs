import ColumnList from '../../components/ColumnList';
import Layout from '../../components/Layout';

const Home = () => {

    const plants = [
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        "https://images.unsplash.com/photo-1555037015-1498966bcd7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
        "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    ]

    return (
        <Layout>
            {/* <div className='mb-[16px]'>
                <ul className='flex items-center whitespace-nowrap gap-2 py-3 overflow-x-auto'>
                    <li className='px-3 text-[14px] text-blue-400 bg-blue-100 rounded-full font-medium'>
                        All
                    </li>
                    <li className='px-3 text-[14px]'>
                        Recomendations
                    </li>
                    <li className='px-3 text-[14px]'>
                        Geology
                    </li>
                </ul>
            </div>
            <div className="overflow-x-auto flex gap-4">
                <div className="bg-blue-100 w-60 h-[150px] max-w-[520px] min-w-[240px] rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1528459639788-428ce548b1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80" className='w-100' alt="" />
                </div>
                <div className="bg-blue-100 w-60 h-[150px] max-w-[520px] min-w-[240px] rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='w-100' alt="" />
                </div>
            </div> */}

            <ColumnList title='Ecosystem' items={plants} />
        </Layout >
    )
}

export default Home