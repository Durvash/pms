import "./assets/css/bootstrap/bootstrap.min.css";
import "./App.css";
import { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";
import { getSession } from "./helpers/Auth";
import Layout from "./layout";
import Guest from "./layout/guest";

function App() {
  const [sessionData, setSessionData] = useState(getSession());
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          {
            (sessionData?.token) ? <Layout /> : <Guest setSessionData={setSessionData} />
          }
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
