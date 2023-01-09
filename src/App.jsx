import "./assets/css/bootstrap/bootstrap.min.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteList } from "./Layout/RouteList";
import Loading from "./component/Loading";

function App() {
  return (
    <div className="App">
    {/* {import.meta.env.VITE_REACT_APP_MODE} */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {RouteList.map((row, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={row.path}
                  element={<row.component />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
