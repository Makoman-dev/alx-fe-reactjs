import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate   
 to="/" />;
<Route path="/profile" element={
  <ProtectedRoute isAuthenticated={true}>
    <Profile />
  </ProtectedRoute>
}>
  {/* ... Nested routes */}
</Route>
};

useAuth