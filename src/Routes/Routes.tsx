import { createBrowserRouter, RouteObject } from "react-router-dom";
import DashboardMain from "../Pages/Dashboard/DashboardMain";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import DashboardPerSubject from "../Pages/Dashboard/DashboardPerSubject";
import StudySessions from "../Pages/Dashboard/StudySessions";
import PerformanceAnalysis from "../Pages/Dashboard/PerformanceAnalysis";

// Define your route objects
const routes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardMain />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "perSubject",
        element: <DashboardPerSubject />,
      },
      {
        path: "studySessions",
        element: <StudySessions />,
      },
      {
        path: "performanceAnalysis",
        element: <PerformanceAnalysis />,
      },
    ],
  },
];

// Create the router instance
export const router = createBrowserRouter(routes);
