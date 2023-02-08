import moment from "moment/moment";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../App"
import { Accordion } from "react-bootstrap";
import { apiRequest, errorMsg } from "../../helpers/General";

const Dashboard = () => {
  const [taskTabList, setTaskTabList] = useState([]);
  const sessionData = useContext(UserContext);
  useEffect(() => {
    getTaskTabList();
  })

  const getTaskTabList = async () => {
    let params = {
      api: 'task_section_list'
    }
    let headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'authtoken': sessionData?.token
    }
    let response = await apiRequest('GET', params, headers)
    console.log(response);
    if(response.data.success) {
      setTaskTabList(response.data.data);
      console.log(taskTabList);
    } else {
      errorMsg(response?.data?.message);
    }
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5 className="">Task List</h5>
        </div>
        <div className="col-12">
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Dashboard