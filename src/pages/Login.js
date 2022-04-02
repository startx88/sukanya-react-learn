import { useState } from "react"
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Login() {
  const [inputs, setInputs] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  })

  const location = useLocation();
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('https://reqres.in/api/login', inputs)
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify({ ...response.data, email: inputs.email, name: inputs.email.substring(0, inputs.email.indexOf('@')) }))
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <form onSubmit={submitHandler}>
      <div className="mb-2">
        <label>Email</label>
        <input type="email" value={inputs.email} className="form-control" onChange={changeHandler} name="email" />
      </div>
      <div className="mb-2">
        <label>Password</label>
        <input type="password" value={inputs.password} className="form-control" onChange={changeHandler} name="password" />
      </div>
      <div className="mb-2">
        <button type="submit" className="btn btn-primary btn-md">Login</button>
      </div>
    </form>
  )
}