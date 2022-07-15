import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Aside from "./component/Aside";
import Main from "./component/Main";
import Private from "./component/Private";
import AddCourse from "./pages/AddCourse";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    let script = document.createElement("script");
    script.src = "/assets/js/soft-ui-dashboard.js";
    script.async = true;

    document.body.append(script);
  }, []);

  return (
    <>
      <Main>
        <Routes>
          <Route
            index
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            path="add-course"
            element={
              <Private>
                <AddCourse />
              </Private>
            }
          />
        </Routes>
      </Main>
    </>
  );
}

export default App;
