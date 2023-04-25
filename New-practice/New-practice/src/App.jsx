import './App.css';
import Home from './Components/Pages/Home';
import Cinema from './Components/Pages/Cinema';
import Clothes from './Components/Pages/Clothes';
import F1 from './Components/Pages/F1';
import Foodorder from './Components/Pages/Foodorder';
import Football from './Components/Pages/Football';
import Music from './Components/Pages/Music';
import Registration from './Components/Pages/Registration';
import Shoes from './Components/Pages/Shoes';
import Weather from './Components/Pages/Weather';
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
    path: "f1",
    element: <F1 />
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
    path: "weather",
    element: <Weather />

  },
  {
    path: "cricket",
    element: <Cricket />

  },

]);


function App() {
  return <RouterProvider router={router} />
}

export default App;
