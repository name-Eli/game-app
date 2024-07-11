import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import GameDetailsPage from "./pages/GameDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'games/:slug', element: <GameDetailsPage /> }
        ]
    },
    {}
])

export default router;