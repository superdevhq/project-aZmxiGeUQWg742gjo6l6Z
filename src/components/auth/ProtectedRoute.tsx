
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: "student" | "instructor" | "admin";
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, isLoading, isStudent, isInstructor, isAdmin } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If a specific role is required, check for it
  if (requiredRole) {
    const hasRequiredRole = 
      (requiredRole === "student" && isStudent()) ||
      (requiredRole === "instructor" && isInstructor()) ||
      (requiredRole === "admin" && isAdmin());

    if (!hasRequiredRole) {
      // Redirect to appropriate page based on user's role
      if (isStudent()) {
        return <Navigate to="/my-courses" replace />;
      } else if (isInstructor()) {
        return <Navigate to="/instructor/dashboard" replace />;
      } else {
        return <Navigate to="/" replace />;
      }
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
