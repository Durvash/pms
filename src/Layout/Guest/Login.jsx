import axios from "axios";
import { useState } from "React";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api_url } from "../../config";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [rememberMe, setRememberMe] = useState(null);

  function handleRememberMe(e) {
    // debugger;
  }

  async function onSubmit(data) {
    // console.log(data);
    const reponse = await axios.post(api_url + '/login', data);
    console.log('login : ', reponse);
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
                      className="form-control"
                      {...register('email', { required: true })}
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      {...register('password', { required: true })}
                      type="password"
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
                        checked={rememberMe}
                        onChange={(e) => {
                          handleRememberMe(e);
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
