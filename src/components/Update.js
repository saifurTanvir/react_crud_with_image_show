import React, {useState, useEffect} from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { useHistory } from 'react-router'
import axios from 'axios'


const Update = () => {

    const [firstname, setFirstname] = useState ('');
    const [id, setId] = useState (null);
    const [lastname, setLastname] = useState ('');
    const [condition, setCondition] = useState (false);
    
    let history = useHistory();

    useEffect( () => {
        setId(localStorage.getItem('id'))
        setFirstname(localStorage.getItem('firstname'))
        setLastname(localStorage.getItem('lastname'))
        setCondition(localStorage.getItem('condition'))
        console.log("on update use effect: id: " + id + " firstname: = " + firstname) 
    }, [])


    function updateUser(){
        axios.put(`http://localhost/react_crud/backend/api/update/${id}`, {
            firstname,
            lastname,
            condition
        }).then(() => {
            history.push('/read');
        })
    }

    return (
        <div>
            <h1>Update Operation</h1>
            <Form className="create-form">
                <Form.Field >
                    <label>First name</label>
                    <input placeholder="First name" onChange={(e) => setFirstname(e.target.value)} value={firstname} ></input>
                </Form.Field>

                <Form.Field>
                    <label>Last name</label>
                    <input placeholder="Last name" onChange={(e) => setLastname(e.target.value)} value={lastname} ></input>
                </Form.Field>

                <Form.Field>
                    <Checkbox checked={condition} onChange={(e) => setCondition(!condition)} placeholder="I agree to the Term and Conditions." />
                </Form.Field>

                <Button onClick={() => updateUser()} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Update;
