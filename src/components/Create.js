import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useHistory } from "react-router";

const Create = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [condition, setCondition] = useState(false);
  let history = useHistory();
  function postdata() {
    console.log("reached");

    var tokenStr =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMjk3YTZmMWE5MmE3Y2FlZmNkMjZkMjUzYTc4NzNjNzYyZDQ3ZWM1OWI2ZTA1NzVhMmFiZmY3ZWJmMDc5NDFiM2I5YTNkNjZhZDhhNjAzMzYiLCJpYXQiOjE2MzY2MDAyMjEsIm5iZiI6MTYzNjYwMDIyMSwiZXhwIjoxNjY4MTM2MjIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kPcpnSHLdipMP6BzDk0gP6TThQ7vZrCwkvd3HZGPo0OEsA5lhQVNuvjPnGiUEduQHg54tI2lDHwJYP4LIV2VQilsGof70beWcrwMTzGBs_7pXb5yaWEacJfVApbZ2vmJgl6C0O2Be24uLo9_XCRfPb1czpHL5eyhQoZCc6GyngN67sbgNNjRmigsecHuOkTMQieHGxL-pqi6Ps-E_CYnS90dCbBOfsC-skSORjGIHLKkgkjfqeEpnqkP8ldyoh0pMUghJgplIf4uK9fYK_HCqbI4O8bZBQk1Eijvk_C1pbaYVETX-BwLDujC_6Zvt6Sw-9mivOlxcYNsQ_cneE7kQR_h2z_vhLfW0b6RtW6Y6581uPamo_rcXwbs-lGKybP_sZ8ceyCi-zqCilErlqQyVO7VqqCRXWimziYbbCz3a3O_F5DUhrnozQnqC3tycjE-Pxve18eF66igTTQKCg_A-WIKVJfWX8p6k3ilXD16ZaghjED-T4_eubE4QhwMWJsM9gXEnl7Vz-HcMzAt9m8U4gNb-DNYCs3PRS1Lgny0WP_O-vx51I7nM-5iCrsre7sZLnv_O0y_lAYs2DiVQLp5qKFusYXcn3U-0pqCBlYm68Kkfi5FaK7OqkeVTMZw1UTmPVlWOpqf9HiXKvswpUF-xn_6-qMnJs1kdkU1UEXEQp4";

    axios
      .post(
        "http://localhost/react_crud/backend/api/create",
        {
          firstname: firstname,
          lastname: lastname,
          condition: condition,
        },
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('api_token')}` } }
      )
      .then(function (response) {
        console.log(response.data);
        history.push("/read");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First name</label>
        <input
          placeholder="First name"
          onChange={(e) => setFirstname(e.target.value)}
        ></input>
      </Form.Field>

      <Form.Field>
        <label>Last name</label>
        <input
          placeholder="Last name"
          onChange={(e) => setLastname(e.target.value)}
        ></input>
      </Form.Field>

      <Form.Field>
        <Checkbox
          placeholder="I agree to the Term and Conditions."
          onChange={(e) => setCondition(!condition)}
        />
      </Form.Field>

      <Button onClick={() => postdata()} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;
