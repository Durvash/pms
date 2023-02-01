import { useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../../helpers/General";

const initialTabList = [
  { id: 0, name: 'To do' },
  { id: 1, name: 'Doing' },
  { id: 2, name: 'Done' }
];

const TaskSection = (props) => {
  const { userData } = props;
  console.log(userData);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [tabList, setTabList] = useState(initialTabList);

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: data.tab_list_id ? '/update_task_section' : '/add_task_section',
      user_id: userData?.user?.user_id,
      token: userData?.user?.token,
      lead_by: userData?.user?.user_id,
      project_id: data.project_id,
      tab_list_name: data.tab_list_name
    }
    console.log(params);
    let response = await apiRequest(params);
    if (response.data.success) {
      successMsg(response.data.message);
      // props.setUserData(prevState => {
      //   return { ...prevState, project: response.data.data }
      // });
      // setSession({ ...userData, project: response.data.data });
      // navigate('/account-setup/project-detail');
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
              <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <h4 className="">How would you group tasks into sections or stages?</h4>
          </div>
        </div>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('project_id', { required: false })} value={userData?.project?.project_id} />
          <input type="hidden" {...register('tab_list_id', { required: false })} value={userData?.task_tab?.tab_list_id} />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="tab_list_name" className="form-label">What's something you and your team are currently working on?</label>
            </div>
          </div>
          {
            tabList && tabList.map((tab, index) => {
              return <div className="row" key={index}>
                <div className="col-md-4 mb-3">
                  <input type="textbox" {...register(`tab_list_name[${tab.id}]`, { required: true, minLength:2, })} id={`tab_list_${index}`} defaultValue={tab.name} onChange={(e) => { return e.target.value }} className="form-control" placeholder="Task Section Name" />
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

export default TaskSection