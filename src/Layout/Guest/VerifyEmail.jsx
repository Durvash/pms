import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { setSession } from "../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../helpers/General";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailData = searchParams.get('data');

  useEffect(() => {
    postData(emailData);
  }, []);

  const postData = async (data) => {
    let params = {
      method: 'GET',
      api: '/confirm_account/' + data
    }
    let response = await apiRequest(params);
    if (response.data.success) {
      let user_data = {
        user: response.data.data
      }
      setSession(user_data);
      // successMsg(response.data.message);
      navigate('/account-setup');
    } else {
      errorMsg(response.data.message);
    }
  }

  return (
    <div>Verifying...</div>
  )
}

export default VerifyEmail