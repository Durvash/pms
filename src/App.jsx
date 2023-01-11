import "./assets/css/bootstrap/bootstrap.min.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteList } from "./Layout/RouteList";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
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
      <ToastContainer />
    </div>
  );
}

export default App;
