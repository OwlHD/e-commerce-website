import CategoryCard from "./CategoryCard"
import { useState, useEffect } from "react"
import getProductsByCategory from "../../utils/functions"
import { getAllProducts } from "../../utils/functions"

export default function CategoryView({id}) {
    console.log('from category view',id)
    const [productsAll, setProductsAll] = useState([])
    const [productsElectronics, setProductsElectronics] = useState([])
    const [productsJewelry, setProductsJewelry] = useState([])
    const [productsMensClothing, setProductsMensClothing] = useState([])
    const [productsWomensClothing, setProductsWomensClothing] = useState([])

    useEffect(()=>{
        async function categoryOne() {
            setProductsAll(await getAllProducts())
        }
    
        async function categoryTwo() {
            setProductsElectronics(await getProductsByCategory('electronics'))
        }
    
        async function categoryThree() {
            setProductsJewelry(await getProductsByCategory('jewelery'))
        }
    
        async function categoryFour() {
            setProductsMensClothing(await getProductsByCategory(`men's clothing`))
        }
        async function categoryFive() {
            setProductsWomensClothing(await getProductsByCategory(`women's clothing`))
        }
        categoryOne()
    },[])
    return (
        <div className="row">
            {productsAll.map((item) => (
                <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
            ))}
        </div>
    )
}