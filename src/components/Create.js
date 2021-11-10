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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWQ3YjgxOTQ1ZWVjN2M3ZDIzMTgxNzQzZWUxMWMyZDE0YjNlNDI2NGI1OTRlY2NlOGUxN2RkYjQwYzcyMzE1MmY5M2JhMWMxOTJiMzgyMGYiLCJpYXQiOjE2MzU4NDQzMzIuNjk5NjY5LCJuYmYiOjE2MzU4NDQzMzIuNjk5Njc1LCJleHAiOjE2NjczODAzMzIuNjQzNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.S7koDFCmKJS9EWFdMY8zKOX3BcVwG-9Kmhz9d1ucGxTaaKF8GfSnAMjER6O_BdgAGx59H7o2rQt5qCL248dVK_X3oPJZP376UziwP8CAd8VJX8E28rRPOqj5YWXZ4B5cp6Vbti83ZmLy8a2lJ49n7Ww2rp518m83xa1JPPpCtTuWpsn_MyOffP2fRI_n21ZUJmsoKvkHg54WOzrZpDzBymvUPwRYgYL6PPvCMLbrivThIEEyfst9tV63xCYI0rhOrgVmyoAOAmjXC__KQBTq4-kgQcIKzokhg_DWMrQa7MZ89T85jWC68z3TdY_Mn8FC6qd2IAPbmPVmyLvBgJZus83S48Pi2FbiYXJ-fxXOwsmzsRh4-AWAYwXGF7FlvIcyXh3JIvfwC0BP-5Pe3FDIFKGor5oRJHPGxmSpTQQIRXSOt1k1kVDU10a2gCfdhAVWdd-V79A38U9gHrJ8dx5mOJJLXORjx3pfE4ad_bNQdms3K-kd84-FbNHRWCGILYT-4pelzAuCIN1HwXhMjmV59fmiLKuB0ekQ14a2ngNFiBSGj3ZFFG-8_7qxb6JbUztQwzXy09QWW0-h_5lhBgbUd26gLaW7_Uky6zV8dxnmZWJTh0PD-ws9k9QjzJViEUh1LLDFINj7Vn0YilcPLUDAJg4c0fRRenjvql7hYIfOYCU";

    axios
      .post(
        "http://localhost/react_crud/backend/api/create",
        {
          firstname: firstname,
          lastname: lastname,
          condition: condition,
        },
        { headers: { Authorization: `Bearer ${tokenStr}` } }
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
