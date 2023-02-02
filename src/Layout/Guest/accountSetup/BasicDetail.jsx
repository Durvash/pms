import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../../helpers/General";

const BasicDetail = (props) => {
  const { userData } = props;
  // console.log(userData);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: '/update_account',
      user_id: data.user_id,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.new_password
    }
    let response = await apiRequest(params);
    if (response.data.success) {
      let user_data = {
        user: { ...response.data.data.user, token: response.data.data.token }
      }
      setSession(user_data);
      props.setUserData(user_data);  /// exporting to accountSetup via props
      successMsg(response.data.message);
      navigate('/account-setup/company-detail');
    } else {
      errorMsg(response.data.message);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="display-6">Welcome to PMS</h1>
          </div>
          <div className="col-12 mt-3">
            <p className="fw-light fs-5">You're signing up as {userData?.user?.email}.</p>
          </div>
        </div>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('user_id', { required: true })} value={userData?.user?.user_id} />
          <input type="hidden" {...register('email', { required: true })} value={userData?.user?.email} />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="first_name" className="form-label">First Name</label>
              <input type="textbox" {...register('first_name', { required: true })} value={userData?.user?.first_name} className="form-control" placeholder="Durvash" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="last_name" className="form-label">Last Name</label>
              <input type="textbox" {...register('last_name', { required: true })} value={userData?.user?.last_name} className="form-control" placeholder="Nimje" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="new_password" className="form-label">Password</label>
              <input type="password" {...register('new_password', { required: true })} className="form-control" placeholder="******" />
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

export default BasicDetail