import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setSession } from "../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../helpers/General";

const Login = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [rememberVal, setRememberVal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let params = {
      api: '/login',
      email: data.email,
      password: data.password
    }
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded;multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    }
    let response = await apiRequest('POST', params, headers);
    if (response.data.success) {
      let user_data = {
        token: response.data.data.token,
        user: response.data.data.user
      }
      setSession(user_data);
      successMsg(response.data.message);
      props.setSessionData(user_data);  /// exporting to app.js via props drilling
      navigate('/dashboard');
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
                    <h4 className="">Login in to PMS</h4>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-12">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: true })}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      {...register('password', { required: true })}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row clearfix mb-2">
                  <div className="col-6 float-start">
                    <div className="form-check">
                      <label
                        className="form-check-label pointer"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                      <input
                        className="form-check-input pointer"
                        type="checkbox"
                        id="rememberMe"
                        // checked={rememberMe}
                        value={rememberVal}
                        onChange={(e) => {
                          setRememberVal(e.target.checked)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6 text-end float-end">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block col-12"
                    >
                      Sign in
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="text-center">
                      <p>
                        Not a member? <Link to="signup">Register</Link>
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

export default Login;
