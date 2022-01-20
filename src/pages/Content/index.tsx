import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import { actionPostProduct } from '../../redux/actions/productActions'

const Content = () => {

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        img: "",
        description: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        actionPostProduct(formData, dispatch).then(res => {
            alert('Success create a new content!')
            navigate('/saved')
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <Layout>
            <form method="POST" onSubmit={handleSubmit}>
                <h3 className='font-medium mt-[32px]'>Create New Content</h3>
                <div className='mt-[24px]'>
                    <label className="mb-[4px] block">Title</label>
                    <input className="px-3 py-2 border outline-none focus:border-blue-200 w-full rounded-md" type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div className='mt-[16px]'>
                    <label className="mb-[4px] block">Price</label>
                    <input className="px-3 py-2 border outline-none focus:border-blue-200 w-full rounded-md" type="number" required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                </div>
                <div className='mt-[16px]'>
                    <label className="mb-[4px] block">Image URL</label>
                    <input className="px-3 py-2 border outline-none focus:border-blue-200 w-full rounded-md" type="url" required value={formData.img} onChange={(e) => setFormData({ ...formData, img: e.target.value })} />
                </div>
                <div className='mt-[16px]'>
                    <label className="mb-[4px] block">Description</label>
                    <textarea className="px-3 py-2 border outline-none focus:border-blue-200 w-full rounded-md resize-none" required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>
                <div className='mt-[24px]'>
                    <button type='submit' className='bg-blue-600 text-white px-5 py-2 rounded-md'>Save</button>
                </div>
            </form>
        </Layout>
    )
}

export default Content