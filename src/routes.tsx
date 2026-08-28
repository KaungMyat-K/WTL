import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ServiceRootLayout from "./pages/services/ServiceRootLayout";
import Service from "./pages/services/Service";
import ServiceDetail from "./pages/services/ServiceDetail";
import BlogRootLayout from "./pages/blogs/BlogRootLayout";
import Blog from "./pages/blogs/Blog";
import BlogDetail from "./pages/blogs/BlogDetail";
import JobRootLayout from "./pages/jobs/JobRootLayout";
import Job from "./pages/jobs/Job";
import JobDetail from "./pages/jobs/JobDetail";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <ServiceRootLayout />,
        children: [
          {
            index: true,
            element: <Service />,
          },
          {
            path: ":serviceId",
            element: <ServiceDetail />,
          },
        ],
      },
      {
        path: "blogs",
        element: <BlogRootLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":blogId",
            element: <BlogDetail />,
          },
        ],
      },
      {
        path: "jobs",
        element: <JobRootLayout />,
        children: [
          {
            index: true,
            element: <Job />,
          },
          {
            path: ":jobId",
            element: <JobDetail />,
          },
        ],
      },
    ],
  },
]);
