import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteList } from "./RouteList";
import Loading from "../components/Loading";

const Main = () => {
  return (
    <div className="main-div">
      <Suspense fallback={<Loading />}>
        <Routes>
          {
            RouteList.map((row, index) => {
              if (!row.allowWithoutLogin) {
                return (
                  <Route
                    key={index}
                    exact
                    path={row.path}
                    element={<row.component />}
                  />
                )
              }
            })
          }
        </Routes>
      </Suspense>
    </div>
  )
}

export default Main