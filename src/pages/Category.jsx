import { useParams } from "react-router-dom"

export default function Category() {
    const {id} = useParams()
    console.log(id)
    return (
        <div>Category {id}</div>
    )
}