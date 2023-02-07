import "./assets/css/bootstrap/bootstrap.min.css";
import "./App.css";
import { createContext, Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";
import { getSession } from "./helpers/Auth";
import Layout from "./layout";
import Guest from "./layout/guest";

const UserContext = createContext();

function App() {
  const [sessionData, setSessionData] = useState(getSession());
  // console.log(sessionData);
  return (
    <div className="App">
      <UserContext.Provider value={sessionData} >
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            {
              (sessionData?.token) ? <Layout /> : <Guest setSessionData={setSessionData} />
            }
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { UserContext }