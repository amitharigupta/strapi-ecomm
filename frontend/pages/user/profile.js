import React, { useEffect, useState } from "react";
import Link from "next/link";


const profile = () => {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userLoginDetails")));
  }, []);
  return (
    <>
      {
        userData && <>
          <h1 title={`${userData?.name}'s Profile`} ></h1>
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={userData?.avatar?.url} alt={userData.name} />
              <Link href="/user/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{userData?.username}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{userData?.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(userData?.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link href="/order">My Orders</Link>
                <Link href="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default profile