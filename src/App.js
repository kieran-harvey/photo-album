import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AlbumDetails from "./pages/album-detail/AlbumDetails";
import Header from "./components/header/Header";

const AppLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id" element={<AlbumDetails />} />
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
