import { Link } from "react-router-dom";
import Header from "../Header";

const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h1 className="display-4">Please verify your email</h1>
          </div>
          <div className="col-12 text-center mt-3">
            <p className="fw-light fs-4">Once you verify your email address, <br />you and your team can get started in PMS.</p>
          </div>
          <div className="col-12 text-center">
            <Link to="/verify-email?data=" className="btn btn-primary btn-block">Verify Email</Link>
          </div>
          <div className="col-12 text-center mt-3">
            <p>Didn't receive an email? <a href="#">Resend email</a>.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYou