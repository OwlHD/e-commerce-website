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

export async function getAllUsers() {
    const response = await fetch(`${API_URL}/users`)
    const result = await response.json()
    console.log(result)
    return result
}

export async function getSingleUser(id) {
    const response = await fetch(`${API_URL}/users/${id}`)
    const result = await response.json()
    console.log(result)
    return result
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

export async function userCreate(userInfo) {
    try {
        const response = await fetch(`${API_URL}/users`,{
            method:"POST",
            body:JSON.stringify(
                {
                    email: `${userInfo.email}`,
                    username: `${userInfo.username}`,
                    password: `${userInfo.password}`,
                    name:{
                        firstname: `${userInfo.firstName}`,
                        lastname: `${userInfo.lastName}`
                    },
                    address:{
                        city: `${userInfo.city}`,
                        street: `${userInfo.street}`,
                        number: `${userInfo.number}`,
                        zipcode: `${userInfo.zipcode}`,
                        geolocation:{
                            lat: `${userInfo.lat}`,
                            long: `${userInfo.long}`
                        }
                    },
                    phone: `${userInfo.phone}`
                }
            )
        })
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return console.error(error)
    }
}
