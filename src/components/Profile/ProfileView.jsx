import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleUser } from "../../utils/functions"
import ProfileInfo from "./ProfileInfo"
import Card from 'react-bootstrap/Card';

export default function ProfileView () {
    const { user, setUser } = useOutletContext()
    const [userInfo, setUserInfo] = useState({
        name: {
            firstname: '',
            lastname: ''
        },
        address: {
            city: '',
            geolocation: {
                lat: '',
                long: ''
            },
            number: '',
            street: '',
            zipcode: ''
        }
    })

    useEffect(()=>{
        async function getInfo() {
            console.log('before set user info', user, user.username)
            setUserInfo(await getSingleUser(localStorage.getItem('id')))
        }
        getInfo()
        console.log('user info - profile view', userInfo)
    },[])

    return (
        <ProfileInfo userInfo={userInfo} />
    )
}
