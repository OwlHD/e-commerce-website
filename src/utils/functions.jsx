const API_URL = 'https://fakestoreapi.com'

export default async function getProductsByCategory(category) {
    const response = await fetch(`${API_URL}/products/category/${category}`)
    const result = await response.json()
    console.log(result)
    return result
}