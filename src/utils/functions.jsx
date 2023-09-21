const API_URL = 'https://fakestoreapi.com'

export default async function getProductsByCategory(category) {
    try {
        const response = await fetch(`${API_URL}/products/category/${category}`)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return console.error(error)
    }
}

export async function getAllProducts() {
    try {
        const response = await fetch(`${API_URL}/products`)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return console.error(error)
    }
}

export async function userLogin(userInfo) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: `${userInfo.username}`,
                password: `${userInfo.password}`
            })
        })
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return console.error(error)
    }
}