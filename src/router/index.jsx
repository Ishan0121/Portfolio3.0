import { createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./routes"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import ProjectsPage from "@/pages/ProjectsPage"
import SkillsPage from "@/pages/SkillsPage"
import Layout from "@/components/layout/Layout"

const router = createBrowserRouter([
  {
    path: ROUTES.Home,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.SKILLS, element: <SkillsPage /> },
      { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
    ],
  },
]);

export default router;