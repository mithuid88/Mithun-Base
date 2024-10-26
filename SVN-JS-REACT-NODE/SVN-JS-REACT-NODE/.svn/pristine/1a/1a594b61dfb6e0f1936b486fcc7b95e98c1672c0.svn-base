import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "./components/Loader/Loader";
import "./App.scss";
import { hideLoader } from "./helpers/utils";

const Signup = lazy(() => import("./pages/Signup/Signup"));
const Login = lazy(() => import("./pages/Login/Login"));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const Home = lazy(() => import("./pages/Home/Home"));
const Editor = lazy(() => import("./pages/Editor/Editor"));
const PageSetting = lazy(() => import("./components/PageSetting/PageSetting"));
const TemplateSetting = lazy(() => import("./components/TemplateSetting/TemplateSetting"));

function App() {
  const { userStore } = useSelector((state) => state);
  const { token } = userStore;

  let routes;
  if (token) {
    hideLoader();
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<PageSetting />} />
        <Route path="/templates" element={<TemplateSetting />} />
        <Route path="/:editType/editor/:pageId" element={<Editor />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    )
  } else {
    routes = (
      <Routes fallback={<Loader />}>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/forgotPass" element={<ForgotPassword />} />
        <Route path="/*" element={<Navigate replace to="/user/login" />} />
      </Routes>
    )
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {routes}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
