import { useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../../helpers/General";

const initialEmailList = [
  { id: 0, email: '' },
  { id: 1, email: '' },
  { id: 2, email: '' }
];

const MemberDetail = (props) => {
  const { userData } = props;
  // console.log(userData);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [emailList, setEmailList] = useState(initialEmailList);
  const firstTaskSectionId = (userData?.task_section) ? userData.task_section[0].tab_list_id : 0;

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: '/add_multi_project_members',
      user_id: userData?.user?.user_id,
      token: userData?.user?.token,
      company_id: data.company_id,
      project_id: data.project_id,
      email: data.email
    }
    console.log(params);
    let response = await apiRequest(params);
    if (response.data.success) {
      successMsg(response.data.message);
      props.setUserData(prevState => {
        return { ...prevState, project_members: response.data.data }
      });
      setSession({ ...userData, project_members: response.data.data });
      // navigate('/account-setup/task-detail');
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
              <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <h4 className="">Congratulations, you've created your first project in PMS!</h4>
          </div>
        </div>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('project_id', { required: false })} value={userData?.project?.project_id} />
          <input type="hidden" {...register('company_id', { required: false })} value={userData?.company?.company_id} />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="task_title" className="form-label">Who's working on this project with you?</label>
            </div>
          </div>
          {
            emailList && emailList.map((obj, index) => {
              return <div className="row" key={index}>
                <div className="col-md-4 mb-3">
                  <input type="textbox" {...register(`email[${obj.id}]`, { required: true, minLength:2, })} id={`email_${index}`} defaultValue={obj.email} onChange={(e) => { return e.target.value }} className="form-control" placeholder="Teammate's email" />
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

export default MemberDetail