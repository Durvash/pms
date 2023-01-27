import { lazy, useState } from "react";
import { useParams } from "react-router-dom";
import { getSession } from "../../../helpers/Auth";
import Header from "../../Header"
const BasicDetail = lazy(() => import("./BasicDetail"));
const CompanyDetail = lazy(() => import("./CompanyDetail"));

const accountSetup = () => {
  const [userData, setUserData] = useState(getSession());
  const { page } = useParams();
  return (
    <>
      <Header />
      {
        userData && userData?.user?.user_id && page
          ? {
            'personal-detail': <BasicDetail userData={userData} setUserData={setUserData} />,
            'company-detail': <CompanyDetail userData={userData} setUserData={setUserData} />
          }[page]
          : <></>
      }
    </>
  )
}

export default accountSetup