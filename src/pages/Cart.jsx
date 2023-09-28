import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { getSingleProduct } from '../utils/functions';
import CartItem from '../components/Cart/CartItem';

export default function Cart() {
    const { user, cart } = useOutletContext()
    const [userCart, setUserCart] = useState([])
    const laCarta = JSON.parse(localStorage.getItem('cart'))
    useEffect(()=>{
        async function cartFunction() {
            console.log('cart page use effect', user)
            console.log('the cart', cart)
            console.log('laCarta', laCarta)
            laCarta[0].products.forEach(async element => {
                console.log('cart loop', element.productId)
                const cartItem = await getSingleProduct(element.productId)
                console.log('adding to array cartItem', cartItem)
                cartItem.quantity = element.quantity
                console.log('adding to array quantity of cartItem', cartItem)
                setUserCart(prevItems => {return [...prevItems, cartItem]})
                console.log('getting cart items', userCart)
            })
        }
        cartFunction()
    },[])
    return (
        <div>
            {userCart.map(item => {
            return (
                <CartItem userCart={userCart} item={item} />
                )
        })}
        </div>
    )
}
