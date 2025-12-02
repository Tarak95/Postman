
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/page/Registration";
import Login from "./components/page/Login"
import firebaseConfig from "./components/firebase/firebaseConfig";
import ForgotPassword from "./components/page/ForgotPassword";
import Home from "./components/page/Home";
import Message from "./components/Message/Message";


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

  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App