import { useEffect } from "react"
import { deleteSession, getSession } from "../../helpers/Auth";
import { apiRequest, errorMsg, successMsg } from "../../helpers/General";

const Logout = (props) => {
  useEffect(() => {
    let data = getSession();
    onSubmit(data);
  }, [])
  
  const onSubmit = async (data) => {
    let params = {
      method: 'POST',
      api: '/logout',
      user_id: data.user.user_id,
      token: data.token,
      from_all_device: 'no'
    }
    let response = await apiRequest(params);
    if (response.data.success) {
      successMsg(response.data.message);
      deleteSession();  /// exporting to app.js via props drilling
      window.location.replace("/");
    } else {
      errorMsg(response.data.message);
    }
  }

  return (
    <></>
  )
}

export default Logout