import { Container,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./UserRegisterPage.css"
import { useState } from 'react';
const UserRegisterPage=()=>{
    const [userName,setUserName]=useState()
    const [userEmail,setUserEmail]=useState()
    const [userPassword,setUserPassword]=useState()
    const [userPic,setUserPic]=useState()
   const handleSignUp=(e)=>{
    e.preventDefault()
   console.log(userName,userEmail,userPassword,userPic)
   }

return(
    <>
    <Container className='signup-page'>
        <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" 
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"
        value={userEmail}
        onChange={(e)=>setUserEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>PassWord</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Password"
        value={userPassword}
        onChange={(e)=>setUserPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" placeholder="Upload your Image" 
        value={userPic}
        onChange={(e)=>setUserPic(e.target.value)}/>
      </Form.Group>
      <div className="signupbtn">
      <Button variant="primary" type='submit'>SignUp</Button>
      <Button variant="secondary">Reset</Button>
      </div>
    </Form>
        </Container>
    </>
)
}
export default UserRegisterPage