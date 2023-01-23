import { Routes, Route } from "react-router-dom";
import { RouteList } from "./RouteList";

const Main = () => {
  return (
    <div className="main-div">
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
    </div>
  )
}

export default Main