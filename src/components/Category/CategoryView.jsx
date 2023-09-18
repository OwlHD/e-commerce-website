import CategoryCard from "./CategoryCard"
import CategoryQueryBar from "./CategoryQueryBar";
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react"
import { getAllProducts } from "../../utils/functions"

export default function CategoryView({id}) {
    const [productsAll, setProductsAll] = useState([])
    const [productsCategory, setProductsCategory] = useState([])
    const [queryProducts, setQueryProducts] = useState({
        query: '',
        list: []
    })
    const idUpper = id.toUpperCase()

    useEffect(()=>{
        async function getProducts() {
            setProductsAll(await getAllProducts())
            setProductsCategory((await getAllProducts()).filter(item => item.category===id))
        }
        getProducts()
        setQueryProducts({query: '', list: []})
    },[id])
    
    return (
        <Row>
            <CategoryQueryBar id={id} queryProducts={queryProducts} setQueryProducts={setQueryProducts} productsAll={productsAll} productsCategory={productsCategory} />
            <h1>{idUpper}</h1>
            {(
                queryProducts.query === '' 
                ? id === 'all' 
                    ? productsAll.map(item =>{
                        return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                    }) 
                    : productsCategory.map(item =>{
                        return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                    })
                : !queryProducts.list.length
                    ? 'No results found.'
                    : queryProducts.list.map(item => {
                        return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                    })
            )}
        </Row>
    )
}