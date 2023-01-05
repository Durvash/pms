const Signup = () => {
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
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-primary btn-block col-12"
                    >
                      Sign up
                    </button>
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
