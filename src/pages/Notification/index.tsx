import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { actionGetContacts } from '../../redux/actions/contactActions'

const Notification = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        actionGetContacts(dispatch)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const contacts = useSelector((state: any) => state.contactReducer.contacts)

    return (
        <Layout>
            <div>
                <h3 className='mt-[32px] font-bold'>Members</h3>
            </div>
            <ul className='mt-[16px] border-t'>
                {contacts.map((contact: any) => (
                    <li key={contact.id} className='py-3 px-2 border-b hover:bg-blue-50 flex gap-4 items-center'>
                        <div className='w-12 h-12 rounded-full bg-blue-200 text-blue-400 font-bold flex items-center justify-center'>
                            {contact.name.substr(0, 1)}
                        </div>
                        <div>
                            <p>{contact.name}</p>
                            <p className='text-[12px] text-gray-700'>{contact.phone}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default Notification