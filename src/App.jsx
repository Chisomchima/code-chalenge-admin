import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/ui/Loader";
import AppLayout from "./layouts/AppLayout";
import ErrorBoundary from "./hooks/ErrorBoundary";
import ScrollToTop from "./utils/scrollToTop.tsx";

const Login = lazy(() => import("./pages/login"));
const Home = lazy(() => import("./pages/home"));
const Challenges = lazy(() => import("./pages/challenges"));
const CreateChallenge = lazy(() => import("./pages/challenges/create"));
const ViewChallenge = lazy(() => import("./pages/challenges/view"));
const Users = lazy(() => import("./pages/users"));
const UserDetails = lazy(() => import("./pages/users/userDetails.tsx"));
const NotFoundPage = React.lazy(() => import("./pages/not-found.tsx"));

const routes = [
  // public
  { path: "/login", component: Login },

  // Protected routes
  { path: "/", component: Home, protected: true },
  { path: "/challenges", component: Challenges, protected: true },
  { path: "/challenges/new", component: CreateChallenge, protected: true },
  { path: "/users", component: Users, protected: true },
  { path: "/user/:id", component: UserDetails, protected: true },
  { path: "/challenges/edit/:id", component: CreateChallenge, protected: true },
  { path: "/challenges/view/:id", component: ViewChallenge, protected: true },
];

function App() {
  return (
    <ScrollToTop>
      <ErrorBoundary>
        <Routes>
          {routes.map(({ path, component, protected: isProtected }) => {
            const RouteComponent = component ? (
              <Suspense>{React.createElement(component)}</Suspense>
            ) : null;

            return isProtected ? (
              <Route key={path} element={<AppLayout />}>
                <Route path={path} element={RouteComponent} />
              </Route>
            ) : (
              <Route key={path} path={path} element={RouteComponent} />
            );
          })}

          {/* Catch-all route for 404 page */}
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </ErrorBoundary>
    </ScrollToTop>
  );
}

export default App;
