import { Routes, Route, useNavigate } from "react-router-dom";
import { RouteList } from "./RouteList";
import { getSession } from "../helpers/Auth";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
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

      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
