import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointments from "../../Pages/Appointment/Appointments";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: 'login', element: <Login /> },
      {
        path: "/appointment", element: <Appointments />
      }
    ],
  },
]);
