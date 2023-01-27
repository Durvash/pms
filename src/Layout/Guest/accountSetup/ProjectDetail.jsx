import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { apiRequest, errorMsg, successMsg } from "../../../helpers/General";

const ProjectDetail = (props) => {
  const { userData } = props;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: '/update_account',
      user_id: data.user_id,
      company_name: data.company_name,
      project_name: data.project_name
    }
    let response = await apiRequest(params);
    if (response.data.success) {
      successMsg(response.data.message);
      // navigate('/thank-you');
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
              <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <h4 className="display-6">Let's set up your first project</h4>
          </div>
        </div>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('user_id', { required: true })} value={userData?.user?.user_id} />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="company_name" className="form-label">Company Name</label>
              <input type="textbox" {...register('company_name', { required: true })} className="form-control" placeholder="Company Pvt Ltd" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="project_name" className="form-label">What's something you and your team are currently working on?</label>
              <input type="textbox" {...register('project_name', { required: true })} className="form-control" placeholder="Project Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <button type="submit" className="btn btn-primary btn-block">Continue</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              Wrong account? <Link to="/">Log in</Link> instead.
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProjectDetail