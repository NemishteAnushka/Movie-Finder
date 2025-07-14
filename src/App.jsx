import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home, { loader } from "./pages/Home";
import SinglePageDetail from "./pages/SinglePageDetail";
//import loader
import { loader as MovieLoader } from "./pages/Home";
import { loader as SinglePageLoader } from "./pages/SinglePageDetail";
import Error from "./pages/Error";
//create router

//error element is used for gibrish route means if any route is wrong it will show this element
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route
        path="/detail/:imdbID"
        element={<SinglePageDetail />}
        loader={SinglePageLoader}
      />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
