import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, SignIn, SignUp } from "./pages";
import { ProtectedRoutes, UnprotectedRoutes } from "./utils";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
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
