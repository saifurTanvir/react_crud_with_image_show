import React, {useState } from 'react';
import axios from 'axios';
import {Button, Checkbox, Form} from 'semantic-ui-react';

const Create = () => {
    const [firstname, setFirstname] = useState ('');
    const [lastname, setLastname] = useState ('');
    const [condition, setCondition] = useState (false);

    function postdata(){
        axios.post('http://localhost/react_crud/backend/api/create', {   
            firstname: firstname,
            lastname: lastname,
            condition: condition   
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    

    return (
        <Form className="create-form">
            <Form.Field >
                <label>First name</label>
                <input placeholder="First name" onChange={(e) => setFirstname(e.target.value)}></input>
            </Form.Field>

            <Form.Field>
                <label>Last name</label>
                <input placeholder="Last name" onChange={(e) => setLastname(e.target.value)}></input>
            </Form.Field>

            <Form.Field>
                <Checkbox placeholder="I agree to the Term and Conditions." onChange={(e) => setCondition(!condition)}/>
            </Form.Field>

            <Button onClick={() => postdata} type="submit">Submit</Button>
        </Form>
    )
}

export default Create;
