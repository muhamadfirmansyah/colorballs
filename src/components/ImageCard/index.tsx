import { useNavigate } from "react-router-dom"

const ImageCard = ({ item }: { item: any }) => {

    const navigate = useNavigate()

    return (
        <div>
            <img className="w-full aspect-square mb-2 object-cover rounded-lg" alt="" src={item.img} onClick={() => navigate(`/saved/${item.id}`)} />
        </div>
    )
}

export default ImageCard