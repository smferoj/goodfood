import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        location:""
    })
    const handleSubmit= async(e)=>{
     e.preventDefault();
     const response = await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name:credentials.name,
            email:credentials.email,
            password:credentials.password,
            location:credentials.location,
        })
     });
     const json = await response.json()
     console.log(json);
     if(!json.success){
        alert ("Valid credential")
     }
    }
    const onChange=(event)=>{
        setCredentials({...credentials, [event.target.name]:event.target.value})
    }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
            {/* =======name field======== */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
         Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={credentials.name}
          onChange={onChange}
        />
      </div>
            {/* =======email field =========*/}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
         Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
      </div>
            {/* ========password field =========*/}
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
        Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
            {/* ======== Location field =========*/}
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
        Location
        </label>
        <input
          type="text"
          className="form-control"
          name="location"
          value={credentials.location}
          onChange={onChange}
        />
      </div>
      <button type="submit" className=" m-3 btn btn-primary">Sign up</button>
      <Link to="/login" className='m-3 btn btn-danger'> Already a user?</Link>
    </form>
    </div>
    </>
  )
}

export default Signup

//In summary, your understanding of the data flow is mostly correct. The frontend form data is stored in the credentials state, and when the form is submitted, it is sent to the backend for processing. The backend responds with the success status, which is then used to trigger actions or provide feedback to the user on the frontend.