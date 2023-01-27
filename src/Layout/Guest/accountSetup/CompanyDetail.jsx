import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { apiRequest, errorMsg, successMsg } from "../../../helpers/General";

const CompanyDetail = (props) => {
  const { userData } = props;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: '/add_company',
      user_id: userData?.user?.user_id,
      token: userData?.user?.token,
      company_name: data.company_name,
      company_info: data.company_info
    }
    let response = await apiRequest(params);
    if (response.data.success) {
      successMsg(response.data.message);
      navigate('/project-detail');
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
            <h4 className="">Let's fill-up small detail about your company</h4>
          </div>
        </div>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="company_name" className="form-label">Company Name</label>
              <input type="textbox" {...register('company_name', { required: true })} className="form-control" placeholder="Company Pvt Ltd" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="company_info" className="form-label">Summary</label>
              <textarea {...register('company_info', { required: true })} className="form-control" placeholder="Project Name" ></textarea>
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

export default CompanyDetail