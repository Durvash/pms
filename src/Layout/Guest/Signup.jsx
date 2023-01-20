import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest, errorMsg, successMsg } from "../../helpers/General";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: '/signup',
      email: data.email
    }
    let response = await apiRequest(params);
    if(response.data.success) {
      successMsg(response.data.message);
      navigate('/thank-you');
    } else {
      errorMsg(response.data.message);
    }
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col-12 text-center">
                    <h4 className="">Sign up</h4>
                    <p>
                      <small>
                        By signing up, I agree to the PMS Privacy Policy and
                        Terms of Service.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-12">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input type="email" {...register('email', { required: true })} className="form-control" />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block col-12"
                    >
                      Sign up
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="text-center">
                      <p>
                        Already Registered? <Link to="/">Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
