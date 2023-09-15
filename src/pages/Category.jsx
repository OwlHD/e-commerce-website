import { useParams } from "react-router-dom"
import CategoryView from "../components/Category/CategoryView"

export default function Category() {
    const {id} = useParams()
    console.log('id: ',id)

    return (
        <div>
            <h1>Category {id}</h1>
            <div>
                <CategoryView id={id} />
            </div>
        </div>
    )
}