import { lazy, useState } from "react";
import { useParams } from "react-router-dom";
import { getSession } from "../../../helpers/Auth";
import Header from "../../Header"
const BasicDetail = lazy(() => import("./BasicDetail"));
const CompanyDetail = lazy(() => import("./CompanyDetail"));
const ProjectDetail = lazy(() => import("./ProjectDetail"));
const TaskSection = lazy(() => import("./TaskSection"));
const TaskDetail = lazy(() => import("./TaskDetail"));
const MemberDetail = lazy(() => import("./MemberDetail"));

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
            'company-detail': <CompanyDetail userData={userData} setUserData={setUserData} />,
            'project-detail': <ProjectDetail userData={userData} setUserData={setUserData} />,
            'task-section': <TaskSection userData={userData} setUserData={setUserData} />,
            'task-detail': <TaskDetail userData={userData} setUserData={setUserData} />,
            'member-detail': <MemberDetail userData={userData} setUserData={setUserData} />
          }[page]
          : <></>
      }
    </>
  )
}

export default accountSetup