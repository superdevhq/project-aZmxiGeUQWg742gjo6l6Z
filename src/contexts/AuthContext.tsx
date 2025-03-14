
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define user types
export type UserRole = "student" | "instructor" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  roles: UserRole[];
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  isInstructor: () => boolean;
  isStudent: () => boolean;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for development
const MOCK_USERS = [
  {
    id: "1",
    email: "student@example.com",
    password: "password123",
    name: "John Student",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    roles: ["student"] as UserRole[]
  },
  {
    id: "2",
    email: "instructor@example.com",
    password: "password123",
    name: "Sarah Instructor",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    roles: ["instructor"] as UserRole[]
  },
  {
    id: "3",
    email: "admin@example.com",
    password: "password123",
    name: "Admin User",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    roles: ["admin"] as UserRole[]
  },
  {
    id: "4",
    email: "both@example.com",
    password: "password123",
    name: "Multi Role User",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    roles: ["student", "instructor"] as UserRole[]
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("eduforgeUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock data
      const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error("Invalid email or password");
      }
      
      // Remove password before storing user
      const { password: _, ...userWithoutPassword } = foundUser;
      
      // Save user to state and localStorage
      setUser(userWithoutPassword);
      localStorage.setItem("eduforgeUser", JSON.stringify(userWithoutPassword));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string, role: UserRole) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      if (MOCK_USERS.some(u => u.email === email)) {
        throw new Error("User with this email already exists");
      }
      
      // Create new user
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        email,
        name,
        roles: [role],
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 70)}.jpg`
      };
      
      // In a real app, we would save this to a database
      // For now, just set the user state
      setUser(newUser);
      localStorage.setItem("eduforgeUser", JSON.stringify(newUser));
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Clear user from state and localStorage
      setUser(null);
      localStorage.removeItem("eduforgeUser");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful Google login with a random mock user
      const randomUser = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];
      const { password: _, ...userWithoutPassword } = randomUser;
      
      setUser(userWithoutPassword);
      localStorage.setItem("eduforgeUser", JSON.stringify(userWithoutPassword));
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Helper functions to check user roles
  const isInstructor = () => {
    return user?.roles.includes("instructor") || false;
  };

  const isStudent = () => {
    return user?.roles.includes("student") || false;
  };

  const isAdmin = () => {
    return user?.roles.includes("admin") || false;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      login, 
      signUp, 
      logout, 
      loginWithGoogle,
      isInstructor,
      isStudent,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
