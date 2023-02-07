import moment from "moment/moment";
import { useContext, useEffect, useState } from "react"
import { getDayWish } from "../../helpers/General"
import { UserContext } from "../../App"

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(null);
  const sessionData = useContext(UserContext);
  useEffect(() => {
    let date = new Date();
    setCurrentDate(moment(date).format('Do, MMMM YYYY'));
  })

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h5 className="">{currentDate ? currentDate : ''}</h5>
        </div>
        <div className="col-12 text-center">
          <h4 className="fs-4">{getDayWish()}, {sessionData?.user?.first_name}</h4>
        </div>
      </div>
    </div>
  )
}

export default Dashboard