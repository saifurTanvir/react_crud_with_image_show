import react, {useState, useEffect} from "react"
// import {Form, Button, input} from "react-bootstrap"
import axios from 'axios'
import { Button, Checkbox, Form } from "semantic-ui-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function postdata(){
        alert("Okay");
        axios.post(`http://localhost/react_crud/backend/api/login`,
        {
            'email' : email,
            'password' : password
        }
        ).then((response) => {
            sessionStorage.setItem('api_token', response.data)
            console.log(response.data)
            alert(response.data)
        }).catch(function (error) {
            console.log(error);
            alert(error)
          });
    }
        

    return (
    //     <form>
    //     <div className="form-group">
    //       <label for="email">Email address:</label>
    //       <input className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
    //     </div>
    //     <div className="form-group">
    //       <label for="pwd">Password:</label>
    //       <input className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}></input>
    //     </div>
    //     <button type="submit" onClick={() => postdata()} className="btn btn-primary">Submit</button>
    //   </form> 

        <Form className="create-form">
        <Form.Field>
        <label>Email</label>
        <input
            placeholder="First name"
            onChange={(e) => setEmail(e.target.value)}
        ></input>
        </Form.Field>

        <Form.Field>
        <label>Password</label>
        <input
            placeholder="Last name"
            onChange={(e) => setPassword(e.target.value)}
        ></input>
        </Form.Field>

        <Button onClick={() => postdata()} type="submit">
        Submit
        </Button>
        </Form>
    )                
}

export default Login;