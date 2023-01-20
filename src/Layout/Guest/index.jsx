import { Routes, Route, useNavigate } from "react-router-dom";
import { RouteList } from '../RouteList';
import { getSession } from '../../helpers/Auth';

const Guest = (props) => {
  return (
    <>
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
    </>
  )
}

export default Guest