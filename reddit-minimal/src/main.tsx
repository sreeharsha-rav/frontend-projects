import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import "preline/preline";
import App from './App';
import ErrorPage from './components/common/ErrorPage';
import Post from './components/post/Post';
import Header from './components/common/Header';

/**
 * Creates a router configuration for the application.
 *
 * @param {Array<RouteConfig>} routes - An array of route configurations.
 * @returns {Router} The created router.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage error={new Error("An error occurred while fetching the feed")} />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
    errorElement: <ErrorPage error={new Error("An error occurred while fetching the post")} />,
  }
]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Header />
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

// Render the application with the router configuration
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <RouterProvider router={router} />
  </>
);