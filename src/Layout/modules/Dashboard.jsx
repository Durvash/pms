import moment from "moment/moment";
import { useContext, useEffect, useState } from "react"
import { apiRequest, errorMsg, getDayWish } from "../../helpers/General"
import { UserContext } from "../../App"
import { Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(null);
  const [prioirityTab, setPrioirityTab] = useState('upcomming');
  const [projectTab, setProjectTab] = useState(null);
  const sessionData = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    let date = new Date();
    setCurrentDate(moment(date).format('dddd, Do MMMM'));
    getProjectList();
  }, [])

  const getProjectList = async () => {
    let params = {
      api: 'project_list'
    }
    let headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'authtoken': sessionData?.token
    }
    let response = await apiRequest('GET', params, headers)
    // console.log(response);
    if (response.data.success) {
      setProjectTab(response.data.data);
    } else {
      errorMsg(response?.data?.message);
    }
  }

  const setProjectList = (projects) => {
    console.log(projects);
    return projects.map((item, index) => {
      return (<li key={index} className="list-group-item d-flex pointer" onClick={() => { navigate(`/projects/${item.project_id}`) }}>
        <i className="material-icons icon-project-tab">apps</i>
        <div className="media-body">
          <h6>{item.project_name}</h6>
          <p>{item.project_desc}</p>
        </div>
      </li>)
    })
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h5 className="">{currentDate ? currentDate : ''}</h5>
        </div>
        <div className="col-12 text-center">
          <h3 className="">{getDayWish()}, {sessionData?.user?.first_name}</h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <div className="card pad-0 dashboard-card">
            <div className="card-header">
              My Priorities
            </div>
            <div className="card-body">
              <Tabs
                id="my-priorities-card"
                activeKey={prioirityTab}
                onSelect={(k) => setPrioirityTab(k)}
                className="mb-3"
              >
                <Tab eventKey="upcomming" title="Upcomming">
                  Upcomming
                </Tab>
                <Tab eventKey="overdue" title="Overdue">
                  Overdue
                </Tab>
                <Tab eventKey="completed" title="Completed">
                  Completed
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card pad-0 dashboard-card">
            <div className="card-header">
              Projects
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {projectTab && setProjectList(projectTab)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard