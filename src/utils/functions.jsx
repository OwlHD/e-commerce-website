const API_URL = 'https://fakestoreapi.com'

export default async function getProductsByCategory(category) {
    try {
        const response = await fetch(`${API_URL}/products/category/${category}`)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function getAllProducts() {
    try {
        const response = await fetch(`${API_URL}/products`)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
}