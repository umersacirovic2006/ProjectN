import React, { useEffect } from 'react'
import './Account.css'

//This is currently hardcoded, I'll change it later

const Account = () => {
  let user = []

  const fetchApi = async () => {
    try{
      const response = await fetch("https://reqres.in/api/users")
      const data = await response.json()
      console.log(data.data)
      user = (data.data[0])
      console.log(user)
    }catch(error){
      console.log(error)
    }
    finally{
      console.log('Done')
    }
  }

  useEffect(() => {
    fetchApi()
  })

  return (
    <div className='account'>
        <div className='card'>
          <div className='basic-info'>
            <div className='pic'>
              <img src={user.avatar} alt={user.email} style={{width: '50px', height: '50px'}} />
            </div>
            <div className='credentials'>
              <h4>{`${user.first_name} ${user.last_name}`}</h4>
              <div className='personal'>
                <p>{`${user.email}`}</p>
                <p>Novi Pazar</p>
              </div>
            </div>
          </div>
          <div className='advanced-info'>
            
          </div>
        </div>
    </div>
  )
}

export default Account