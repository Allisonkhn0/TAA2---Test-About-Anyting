import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import ErrorRoutePage from "@/pages/ErrorRouter/ErrorRoutePage";
import HomePage from "@/pages/Home/HomePage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import TestPage from "@/pages/TestPart/Tests/TestPage";
import CategoryPage from "@/pages/TestPart/Categories/CategoryPage";
import CreateTestPage from "@/pages/CreatePart/Tests/CreateTestPage";
import CreateCategoryPage from "@/pages/CreatePart/Categories/CreateCategoryPage";
import SupportPage from "@/pages/Support/SupportPage";
import CreatePage from "@/pages/CreatePart/CreatePage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    errorElement: <ErrorRoutePage />,
    children: [
      {
        element: <HomePage />,
        path: '/'
      },
      {
        element: <TestPage />,
        path: '/test'
      },
      {
        element: <CategoryPage />,
        path: '/category'
      },
      {
        element: <CreatePage />,
        path: '/create'
      },
      {
        element: <CreateTestPage />,
        path: '/createtest'
      },
      {
        element: <CreateCategoryPage />,
        path: '/createcategory'
      },
      {
        element: <SupportPage />,
        path: '/support'
      },
      {
        element: <NotFoundPage />,
        path: '*'
      },
    ]
  }
])