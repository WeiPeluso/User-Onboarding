import React from 'react'

function User({information}){

if(!information){
    return (
     <h3> Working fetching user's information</h3>
    )
}

return (
 
 
    <div>


      <h2>{information.name}</h2>
      <p>Email: {information.email}</p>
      <p>Password: {information.password}</p>
      <p>termOfService: {information.termsOfService}</p>

    </div>



)



}

export default User