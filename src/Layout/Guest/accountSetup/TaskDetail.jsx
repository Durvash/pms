import { useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../../helpers/General";

const initialTabList = [
  { id: 0, name: 'Make a DB structure' },
  { id: 1, name: 'Schedule kickoff metting' },
  { id: 2, name: 'Share timeline with teammates' }
];

const TaskDetail = (props) => {
  const { userData } = props;
  console.log(userData);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [taskList, setTaskList] = useState(initialTabList);
  const firstTaskSectionId = (userData?.task_tab) ? userData.task_tab[0].tab_list_id : 0;

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: '/add_multi_task',
      user_id: userData?.user?.user_id,
      token: userData?.user?.token,
      assign_to: userData?.user?.user_id,
      report_to: userData?.user?.user_id,
      priority: 'Low',
      task_title: data.task_title,
      task_desc: data.task_desc
    }
    console.log(params);
    let response = await apiRequest(params);
    if (response.data.success) {
      successMsg(response.data.message);
      props.setUserData(prevState => {
        return { ...prevState, task_section: response.data.data }
      });
      setSession({ ...userData, task_section: response.data.data });
      navigate('/account-setup/task-detail');
    } else {
      errorMsg(response.data.message);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {/* <h4 className="">What are a few tasks that you have to do for project?</h4> */}
          </div>
        </div>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('project_id', { required: false })} value={userData?.project?.project_id} />
          <input type="hidden" {...register('tab_list_id', { required: false })} value={firstTaskSectionId} />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="task_title" className="form-label">What are a few tasks that you have to do for {userData?.project?.project_name}?</label>
            </div>
          </div>
          {
            taskList && taskList.map((tab, index) => {
              return <div className="row" key={index}>
                <div className="col-md-4 mb-3">
                  <input type="textbox" {...register(`task_title[${tab.id}]`, { required: true, minLength:2, })} id={`tab_list_${index}`} defaultValue={tab.name} onChange={(e) => { return e.target.value }} className="form-control" placeholder="Task Section Name" />
                </div>
              </div>
            })
          }
          <div className="row">
            <div className="col-md-4 mb-3 mt-3">
              <button type="submit" className="btn btn-primary btn-block">Continue</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default TaskDetail