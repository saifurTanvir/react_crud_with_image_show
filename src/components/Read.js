import React, {useState, useEffect} from 'react'
import {Table, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import axios from 'axios'

const Read = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/react_crud/backend/api/users')
          .then(function (response) {
            setAllData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }, [])

    let history = useHistory();

    function setData(data){
        localStorage.setItem('id', data.user_id);
        localStorage.setItem('firstname', data.user_firstname);
        localStorage.setItem('lastname', data.user_lastname);
        localStorage.setItem('condition', data.user_condition);
        console.log("id: " + data.user_id + " firstname: = " + data.user_firstname) 
    }

    function deleteUser(user_id){
        axios.delete(`http://localhost/react_crud/backend/api/delete/${user_id}`).then(() => {
            history.push('/read')
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Firstname</Table.HeaderCell>
                        <Table.HeaderCell>Lastname</Table.HeaderCell>
                        <Table.HeaderCell>Condion</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {allData.map( (data) => {
                    return (
                        <Table.Row>
                        <Table.Cell>{data.user_firstname}</Table.Cell>
                        <Table.Cell>{data.user_lastname}</Table.Cell>
                        <Table.Cell>{data.user_condition ? 'YES' : 'NO'}</Table.Cell>
                        <Table.Cell> 
                            <Link to='/update'>
                                <Button onClick={() => setData(data)}>EDIT</Button>
                            </Link>
                             |  
                            <Link to='/update'>
                                <Button onClick={() => deleteUser(data.user_id)}>DELETE</Button>
                            </Link>
                        </Table.Cell>
                        </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    );
}

export default Read;
