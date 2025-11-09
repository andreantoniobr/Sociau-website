import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/routes/privateRoute";




function PrivateRoutes() {
  return (
    <DashboardLayout>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardServices />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs/new"
          element={
            <PrivateRoute>
              <JobFormPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs/:id/edit"
          element={
            <PrivateRoute>
              <JobFormPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <DashboardCategoriesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories/:id/edit"
          element={
            <PrivateRoute>
              <CategoryFormPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories/new"
          element={
            <PrivateRoute>
              <CategoryFormPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </DashboardLayout>
  );
}

export default PrivateRoutes;
