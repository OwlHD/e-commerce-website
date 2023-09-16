import CategoryCard from "./CategoryCard"
import CategoryQueryBar from "./CategoryQueryBar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react"
import { getAllProducts } from "../../utils/functions"

export default function CategoryView({id}) {
    console.log('from category view',id)
    const [productsAll, setProductsAll] = useState([])
    const [productsCategory, setProductsCategory] = useState([])
    const idUpper = id.toUpperCase()

    useEffect(()=>{
        async function getProducts() {
            setProductsAll(await getAllProducts())
            setProductsCategory((await getAllProducts()).filter(item => item.category===id))
        }
        getProducts()
    },[id])
    
    return (
        <Row>
            <Col>
                <CategoryQueryBar />
            </Col>
            <h1>{idUpper}</h1>
            {(
                id === 'all' ? productsAll.map(item =>{
                    return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                }) : productsCategory.map(item =>{
                    return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                })
            )}
        </Row>
    )
}