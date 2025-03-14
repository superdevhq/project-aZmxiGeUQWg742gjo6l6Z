
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import CoursesPage from "@/pages/courses/CoursesPage";
import CourseDetailPage from "@/pages/courses/CourseDetailPage";
import InstructorDashboard from "@/pages/instructor/InstructorDashboard";
import CourseCreationPage from "@/pages/instructor/CourseCreationPage";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Unauthorized page for when users try to access restricted content
const Unauthorized = () => (
  <div className="min-h-screen flex items-center justify-center bg-muted/30">
    <div className="text-center max-w-md mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
      <p className="text-muted-foreground mb-6">
        You don't have permission to access this page. Please contact support if you believe this is an error.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Go to Homepage
        </a>
        <a href="/login" className="bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80 transition-colors">
          Log In
        </a>
      </div>
    </div>
  </div>
);

const AppRoutes = () => {
  const { user, isInstructor } = useAuth();
  
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:slug" element={<CourseDetailPage />} />
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* Instructor Routes */}
      <Route 
        path="/instructor/dashboard" 
        element={
          <ProtectedRoute requireInstructor>
            <InstructorDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/instructor/courses/new" 
        element={
          <ProtectedRoute requireInstructor>
            <CourseCreationPage />
          </ProtectedRoute>
        } 
      />
      
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
