const Login = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <form>
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
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row clearfix mb-2">
                  <div className="col-6 float-start">
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberMe"
                        checked
                      />
                    </div>
                  </div>
                  <div className="col-6 text-end float-end">
                    <a href="#">Forgot password?</a>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <button
                      type="button"
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
                        Not a member? <a href="#">Register</a>
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
