import { Container,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./LoginPage.css"
import { useState } from 'react';
const LoginPage=()=>{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const [loading,setLoding]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email,password)
    }
    return(
        <>
        <Container className='login-page'>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" 
        value={email}
       onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>PassWord</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <div className="login">
      <Button type="submit" variant="primary">Login</Button>
      <Button variant="secondary">Reset</Button>
      </div>
    </Form>
        </Container>
      
        </>
    )
    }
    
export default LoginPage