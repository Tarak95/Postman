
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/page/Registration";
import Login from "./components/page/Login"
import firebaseConfig from "./components/firebase/firebaseConfig";
import ForgotPassword from "./components/page/ForgotPassword";
import Home from "./components/page/Home";
import Message from "./components/Message/Message";
import Settings from "./components/page/Settings";
import { Portfolio } from "./components/Portfolio/Portfolio";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },

    {
      path: "/registration",
      element: <Registration></Registration>,
    },

    {
      path: "/login",
      element: <Login></Login> ,
    },

    {
      path: "/forgotpassword",
      element: <ForgotPassword></ForgotPassword> ,
    },

    {
      path: "/msg",
      element: <Message></Message> ,
    },
    {
      path: "/Settings",
      element: <Settings/> ,
    },
    {
      path: "/Portfolio",
      element: <Portfolio/> ,
    },

  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App