import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
                    <h4 className="">Forgot Password</h4>
                    <p>
                      <small>
                        Please enter the email address you'd like your password reset information sent to
                      </small>
                    </p>
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
                    <button
                      type="button"
                      className="btn btn-primary btn-block col-12"
                    >
                      Request Reset Link
                    </button>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-12">
                    <div className="text-center">
                      <p>
                        <Link to="/">Back to Login</Link>
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

export default ForgotPassword;
