import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { setSession } from "../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../helpers/General";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailData = searchParams.get('data');

  useEffect(() => {
    return(() => {
      postData(emailData);
    })
  }, []);

  const postData = async (data) => {
    let params = {
      api: '/confirm_account/' + data
    }
    let headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
    let response = await apiRequest('GET', params, headers);
    if (response.data.success) {
      let user_data = {
        user: response.data.data
      }
      setSession(user_data);
      successMsg(response.data.message);
      navigate('/account-setup/personal-detail');
    } else {
      errorMsg(response.data.message);
    }
  }

  return (
    <div>Verifying...</div>
  )
}

export default VerifyEmail