import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../../helpers/General";

const ProjectDetail = (props) => {
  const { userData } = props;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: data.project_id ? '/update_project' : '/add_project',
      user_id: userData?.user?.user_id,
      token: userData?.user?.token,
      lead_by: userData?.user?.user_id,
      company_id: data.company_id,
      project_id: data.project_id,
      project_name: data.project_name,
      project_desc: data.project_desc
    }
    let response = await apiRequest(params);
    if (response.data.success) {
      successMsg(response.data.message);
      props.setUserData(prevState => {
        return { ...prevState, project: response.data.data }
      });
      setSession({ ...userData, project: response.data.data });
      navigate('/account-setup/task-section');
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
              <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <h4 className="">Let's set up your first project</h4>
          </div>
        </div>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('company_id', { required: true })} value={userData?.company?.company_id} />
          <input type="hidden" {...register('project_id', { required: false })} value={userData?.project?.project_id} />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="project_name" className="form-label">What's something you and your team are currently working on?</label>
              <input type="textbox" {...register('project_name', { required: true })} value={userData?.project?.project_name} className="form-control" placeholder="Project Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="project_desc" className="form-label">Tell me about your project</label>
              <textarea {...register('project_desc', { required: true })} value={userData?.project?.project_desc} className="form-control" placeholder="Project Description"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <button type="submit" className="btn btn-primary btn-block">Continue</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProjectDetail