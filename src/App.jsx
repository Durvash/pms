import "./assets/css/bootstrap/bootstrap.min.css";
import { Suspense } from "React";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteList } from "./Layout/RouteList";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
    {process.env.REACT_APP_API_BASE}
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
