import { Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { RouteList } from '../RouteList';
import Loading from "../../components/Loading";

const Guest = (props) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          {
            RouteList.map((row, index) => {
              if (row.allowWithoutLogin) {
                return (
                  <Route
                    key={index}
                    exact
                    path={row.path}
                    element={<row.component {...props} />}
                  />
                )
              }
            })
          }
        </Routes>
      </Suspense>
    </>
  )
}

export default Guest