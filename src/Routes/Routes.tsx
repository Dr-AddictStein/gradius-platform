import { createBrowserRouter, RouteObject } from "react-router-dom";
import DashboardMain from "../Pages/Dashboard/DashboardMain";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import DashboardPerSubject from "../Pages/Dashboard/DashboardPerSubject";
import StudySessions from "../Pages/Dashboard/StudySessions";
import PerformanceAnalysis from "../Pages/Dashboard/PerformanceAnalysis";
import FinalOverview from "../Pages/Dashboard/FinalOverview";
import StudySessionMain from "../Pages/Dashboard/StudySessionMain";
import TutorialMain from "../Pages/Tutorial/TutorialMain";
import TutorialHome from "../Pages/Tutorial/TutorialHome";
import TutorialPerSubject from "../Pages/Tutorial/TutorialPerSubject";

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
      {
        path: "finalOverview",
        element: <FinalOverview />,
      },
      {
        path: "studySession",
        element: <StudySessionMain />,
      },
    ],
  },
  {
    path: "/tutorial",
    element: <TutorialMain />,
    children: [
      {
        path: "",
        element: <TutorialHome />,
      },
      {
        path: "perSubject/:subjectName",
        element: <TutorialPerSubject />,
      },
    ],
  },
];

// Create the router instance
export const router = createBrowserRouter(routes);
