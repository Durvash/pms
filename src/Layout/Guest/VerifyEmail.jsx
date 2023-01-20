import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { apiRequest, errorMsg, successMsg } from "../../helpers/General";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [emailData, setEmailData] = useState(searchParams.get('data'));

  useEffect(() => {
    postData(emailData);
  }, [emailData]);
  
  const postData = async (data) => {
    let params = {
      method: 'POST',
      api: '/confirm_account/' + data
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
    <div>Verifying...</div>
  )
}

export default VerifyEmail