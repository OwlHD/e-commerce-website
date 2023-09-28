import { useEffect, useState } from 'react';
import { getSingleUser } from '../../utils/functions';
import ProfileInfo from './ProfileInfo';

export default function ProfileView() {
  const [userInfo, setUserInfo] = useState({
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
      geolocation: {
        lat: '',
        long: '',
      },
      number: '',
      street: '',
      zipcode: '',
    },
  });

  useEffect(() => {
    async function getInfo() {
      setUserInfo(await getSingleUser(localStorage.getItem('id')));
    }
    getInfo();
  }, []);

  return (
    <ProfileInfo userInfo={userInfo} />
  );
}
