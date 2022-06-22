import React, { createContext, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Private from "./component/Private";
import Login from "./pages/Login";
import AddCourse from "./pages/AddCourse";
import ViewCourses from "./pages/ViewCourses";
export const LoginContext = createContext();
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="contact"
          element={
            <Private>
              <Contact />
            </Private>
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="courses"
          element={
            <Private>
              <Courses />
            </Private>
          }
        />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="view-courses" element={<ViewCourses />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
