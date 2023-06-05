import './App.css';
import Home from './Components/Pages/Home';
import Cinema from './Components/Pages/Cinema';
import Clothes from './Components/Pages/Clothes';
import Foodorder from './Components/Pages/Foodorder';
import Football from './Components/Pages/Football';
import Music from './Components/Pages/Music';
import Registration from './Components/Pages/Registration';
import Shoes from './Components/Pages/Shoes';
import RegisterExhibit from './Components/Pages/RegisterExhibit';
import Cricket from './Components/Pages/Cricket';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "cinema",
    element: <Cinema />
  },
  {
    path: "clothes",
    element: <Clothes />
  },

  {
    path: "foodorder",
    element: <Foodorder />
  },
  {
    path: "football",
    element: <Football />
  },
  {
    path: "music",
    element: <Music />
  },
  {
    path: "registration",
    element: <Registration />
  },
  {
    path: "shoes",
    element: <Shoes />
  },
  {
    path: "registerexhibit",
    element: <RegisterExhibit />

  },
  {
    path: "cricket",
    element: <Cricket />

  },

]);


function App() {
  return (

    <RouterProvider router={router} />



  )
}

export default App;
