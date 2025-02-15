import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/ui/Loader";
import AppLayout from "./layouts/AppLayout";
import ErrorBoundary from "./hooks/ErrorBoundary";

const Login = lazy(() => import("./pages/login"));
const Home = lazy(() => import("./pages/home"));
const Challenges = lazy(() => import("./pages/challenges"));
const CreateChallenge = lazy(() => import("./pages/challenges/create"));
const NotFoundPage = React.lazy(() => import("./pages/not-found.tsx"));

const routes = [
  // public
  { path: "/login", component: Login },

  // Protected routes
  { path: "/", component: Home, protected: true },
  { path: "/challenges", component: Challenges, protected: true },
  { path: "/challenges/new", component: CreateChallenge, protected: true },
  { path: "/challenges/edit/:id", component: CreateChallenge, protected: true },
];

function App() {
  return (
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
  );
}

export default App;
