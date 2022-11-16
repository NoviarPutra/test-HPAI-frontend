import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layouts, NotFound, SignIn, SignUp } from "./pages";
import { ProtectedRoutes, UnprotectedRoutes } from "./utils";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/' element={<Layouts />}>
            <Route index element={<Home />} />
          </Route>
        </Route>

        <Route path='/' element={<UnprotectedRoutes />}>
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
