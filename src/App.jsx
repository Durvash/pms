import "./assets/css/bootstrap/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteList } from "./Layout/RouteList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
