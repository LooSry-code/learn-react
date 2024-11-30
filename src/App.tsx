import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./materi/routing-react/newWays/Home";
import { About } from "./materi/routing-react/newWays/About";
import Layout from "./layout/Layout";
import Contact from "./materi/routing-react/newWays/Contact";
import Programatic from "./materi/routing-react/Navigasi-React/Programatic";
import AboutTeam from "./materi/routing-react/NestedRoutes.tsx/AboutTeam";
import Team from "./materi/routing-react/NestedRoutes.tsx/Team";
import User from "./materi/routing-react/DataFetching/Loader";
import ErrorPage from "./materi/routing-react/ErrorHandling/ErrorBoundary";
import ProtectedRoute from "./materi/ProtectedRoute/ProtectedRoute";
import Product from "./materi/routing-react/DynamicRouting/UseParamas";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout>
          <Home />
          <Programatic />
        </Layout>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Layout>
          <About />
        </Layout>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/product/:productId",
    element: <ProtectedRoute isAuthenticated={false} />,
    children: [
      {
        path: "",
        element: <Product />
      }
    ]
  },
  {
    path: '/login',
    element: <h1>Please Login</h1>
  },
  {
    path: "/tentang",
    element: (
      <div>
        <AboutTeam />
      </div>
    ),
    children: [{
      path: "/tentang/team",
      element: <Team />,
    }]
  },
  {
    path: '/users',
    element: <User />,
    loader: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      } return response.json();
    },
    errorElement: <ErrorPage />
  }
]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
