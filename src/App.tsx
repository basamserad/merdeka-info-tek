import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";

import About from "./pages/About";
import Services from "./pages/Services";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: [
            <Landing />,
            <About />,
            <Services />,
            <Portfolio />,
            <Contact />,
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
