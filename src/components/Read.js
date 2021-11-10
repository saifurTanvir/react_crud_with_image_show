import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

const Read = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    var tokenStr =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWQ3YjgxOTQ1ZWVjN2M3ZDIzMTgxNzQzZWUxMWMyZDE0YjNlNDI2NGI1OTRlY2NlOGUxN2RkYjQwYzcyMzE1MmY5M2JhMWMxOTJiMzgyMGYiLCJpYXQiOjE2MzU4NDQzMzIuNjk5NjY5LCJuYmYiOjE2MzU4NDQzMzIuNjk5Njc1LCJleHAiOjE2NjczODAzMzIuNjQzNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.S7koDFCmKJS9EWFdMY8zKOX3BcVwG-9Kmhz9d1ucGxTaaKF8GfSnAMjER6O_BdgAGx59H7o2rQt5qCL248dVK_X3oPJZP376UziwP8CAd8VJX8E28rRPOqj5YWXZ4B5cp6Vbti83ZmLy8a2lJ49n7Ww2rp518m83xa1JPPpCtTuWpsn_MyOffP2fRI_n21ZUJmsoKvkHg54WOzrZpDzBymvUPwRYgYL6PPvCMLbrivThIEEyfst9tV63xCYI0rhOrgVmyoAOAmjXC__KQBTq4-kgQcIKzokhg_DWMrQa7MZ89T85jWC68z3TdY_Mn8FC6qd2IAPbmPVmyLvBgJZus83S48Pi2FbiYXJ-fxXOwsmzsRh4-AWAYwXGF7FlvIcyXh3JIvfwC0BP-5Pe3FDIFKGor5oRJHPGxmSpTQQIRXSOt1k1kVDU10a2gCfdhAVWdd-V79A38U9gHrJ8dx5mOJJLXORjx3pfE4ad_bNQdms3K-kd84-FbNHRWCGILYT-4pelzAuCIN1HwXhMjmV59fmiLKuB0ekQ14a2ngNFiBSGj3ZFFG-8_7qxb6JbUztQwzXy09QWW0-h_5lhBgbUd26gLaW7_Uky6zV8dxnmZWJTh0PD-ws9k9QjzJViEUh1LLDFINj7Vn0YilcPLUDAJg4c0fRRenjvql7hYIfOYCU";
    axios
      .get("http://localhost/react_crud/backend/api/users", {
        headers: { Authorization: `Bearer ${tokenStr}` },
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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWQ3YjgxOTQ1ZWVjN2M3ZDIzMTgxNzQzZWUxMWMyZDE0YjNlNDI2NGI1OTRlY2NlOGUxN2RkYjQwYzcyMzE1MmY5M2JhMWMxOTJiMzgyMGYiLCJpYXQiOjE2MzU4NDQzMzIuNjk5NjY5LCJuYmYiOjE2MzU4NDQzMzIuNjk5Njc1LCJleHAiOjE2NjczODAzMzIuNjQzNjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.S7koDFCmKJS9EWFdMY8zKOX3BcVwG-9Kmhz9d1ucGxTaaKF8GfSnAMjER6O_BdgAGx59H7o2rQt5qCL248dVK_X3oPJZP376UziwP8CAd8VJX8E28rRPOqj5YWXZ4B5cp6Vbti83ZmLy8a2lJ49n7Ww2rp518m83xa1JPPpCtTuWpsn_MyOffP2fRI_n21ZUJmsoKvkHg54WOzrZpDzBymvUPwRYgYL6PPvCMLbrivThIEEyfst9tV63xCYI0rhOrgVmyoAOAmjXC__KQBTq4-kgQcIKzokhg_DWMrQa7MZ89T85jWC68z3TdY_Mn8FC6qd2IAPbmPVmyLvBgJZus83S48Pi2FbiYXJ-fxXOwsmzsRh4-AWAYwXGF7FlvIcyXh3JIvfwC0BP-5Pe3FDIFKGor5oRJHPGxmSpTQQIRXSOt1k1kVDU10a2gCfdhAVWdd-V79A38U9gHrJ8dx5mOJJLXORjx3pfE4ad_bNQdms3K-kd84-FbNHRWCGILYT-4pelzAuCIN1HwXhMjmV59fmiLKuB0ekQ14a2ngNFiBSGj3ZFFG-8_7qxb6JbUztQwzXy09QWW0-h_5lhBgbUd26gLaW7_Uky6zV8dxnmZWJTh0PD-ws9k9QjzJViEUh1LLDFINj7Vn0YilcPLUDAJg4c0fRRenjvql7hYIfOYCU";
    axios
      .delete(`http://localhost/react_crud/backend/api/delete/${user_id}`, {
        headers: { Authorization: `Bearer ${tokenStr}` },
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
