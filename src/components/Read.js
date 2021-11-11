import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

const Read = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    var tokenStr =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMjk3YTZmMWE5MmE3Y2FlZmNkMjZkMjUzYTc4NzNjNzYyZDQ3ZWM1OWI2ZTA1NzVhMmFiZmY3ZWJmMDc5NDFiM2I5YTNkNjZhZDhhNjAzMzYiLCJpYXQiOjE2MzY2MDAyMjEsIm5iZiI6MTYzNjYwMDIyMSwiZXhwIjoxNjY4MTM2MjIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kPcpnSHLdipMP6BzDk0gP6TThQ7vZrCwkvd3HZGPo0OEsA5lhQVNuvjPnGiUEduQHg54tI2lDHwJYP4LIV2VQilsGof70beWcrwMTzGBs_7pXb5yaWEacJfVApbZ2vmJgl6C0O2Be24uLo9_XCRfPb1czpHL5eyhQoZCc6GyngN67sbgNNjRmigsecHuOkTMQieHGxL-pqi6Ps-E_CYnS90dCbBOfsC-skSORjGIHLKkgkjfqeEpnqkP8ldyoh0pMUghJgplIf4uK9fYK_HCqbI4O8bZBQk1Eijvk_C1pbaYVETX-BwLDujC_6Zvt6Sw-9mivOlxcYNsQ_cneE7kQR_h2z_vhLfW0b6RtW6Y6581uPamo_rcXwbs-lGKybP_sZ8ceyCi-zqCilErlqQyVO7VqqCRXWimziYbbCz3a3O_F5DUhrnozQnqC3tycjE-Pxve18eF66igTTQKCg_A-WIKVJfWX8p6k3ilXD16ZaghjED-T4_eubE4QhwMWJsM9gXEnl7Vz-HcMzAt9m8U4gNb-DNYCs3PRS1Lgny0WP_O-vx51I7nM-5iCrsre7sZLnv_O0y_lAYs2DiVQLp5qKFusYXcn3U-0pqCBlYm68Kkfi5FaK7OqkeVTMZw1UTmPVlWOpqf9HiXKvswpUF-xn_6-qMnJs1kdkU1UEXEQp4";
    axios
      .get("http://localhost/react_crud/backend/api/users", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('api_token')}` },
      })
      .then(function (response) {
        setAllData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("Okay sir.........");
      });
  }, []);

  let history = useHistory();

  function setData(data) {
    localStorage.setItem("id", data.user_id);
    localStorage.setItem("firstname", data.user_firstname);
    localStorage.setItem("lastname", data.user_lastname);
    localStorage.setItem("condition", data.user_condition);
    // console.log("id: " + data.user_id + " firstname: = " + data.user_firstname);
  }

  function deleteUser(user_id) {
    var tokenStr =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMjk3YTZmMWE5MmE3Y2FlZmNkMjZkMjUzYTc4NzNjNzYyZDQ3ZWM1OWI2ZTA1NzVhMmFiZmY3ZWJmMDc5NDFiM2I5YTNkNjZhZDhhNjAzMzYiLCJpYXQiOjE2MzY2MDAyMjEsIm5iZiI6MTYzNjYwMDIyMSwiZXhwIjoxNjY4MTM2MjIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kPcpnSHLdipMP6BzDk0gP6TThQ7vZrCwkvd3HZGPo0OEsA5lhQVNuvjPnGiUEduQHg54tI2lDHwJYP4LIV2VQilsGof70beWcrwMTzGBs_7pXb5yaWEacJfVApbZ2vmJgl6C0O2Be24uLo9_XCRfPb1czpHL5eyhQoZCc6GyngN67sbgNNjRmigsecHuOkTMQieHGxL-pqi6Ps-E_CYnS90dCbBOfsC-skSORjGIHLKkgkjfqeEpnqkP8ldyoh0pMUghJgplIf4uK9fYK_HCqbI4O8bZBQk1Eijvk_C1pbaYVETX-BwLDujC_6Zvt6Sw-9mivOlxcYNsQ_cneE7kQR_h2z_vhLfW0b6RtW6Y6581uPamo_rcXwbs-lGKybP_sZ8ceyCi-zqCilErlqQyVO7VqqCRXWimziYbbCz3a3O_F5DUhrnozQnqC3tycjE-Pxve18eF66igTTQKCg_A-WIKVJfWX8p6k3ilXD16ZaghjED-T4_eubE4QhwMWJsM9gXEnl7Vz-HcMzAt9m8U4gNb-DNYCs3PRS1Lgny0WP_O-vx51I7nM-5iCrsre7sZLnv_O0y_lAYs2DiVQLp5qKFusYXcn3U-0pqCBlYm68Kkfi5FaK7OqkeVTMZw1UTmPVlWOpqf9HiXKvswpUF-xn_6-qMnJs1kdkU1UEXEQp4";
    axios
      .delete(`http://localhost/react_crud/backend/api/delete/${user_id}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('api_token')}` },
      })
      .then(() => {
        history.push("/read");
      });
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
          {allData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.user_firstname}</Table.Cell>
                <Table.Cell>{data.user_lastname}</Table.Cell>
                <Table.Cell>{data.user_condition ? "YES" : "NO"}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>EDIT</Button>
                  </Link>
                  |
                  <Link to="/update">
                    <Button onClick={() => deleteUser(data.user_id)}>
                      DELETE
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
