
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Clock, Users, ArrowRight, Sparkles } from "lucide-react";

// Mock data for featured courses
const featuredCourses = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    description: "Learn the core concepts of machine learning and build your first models.",
    instructor: "Dr. Sarah Chen",
    rating: 4.9,
    students: 12453,
    duration: "24 hours",
    level: "Beginner",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    aiEnhanced: true,
    category: "Data Science"
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB.",
    instructor: "Michael Johnson",
    rating: 4.8,
    students: 8765,
    duration: "36 hours",
    level: "Intermediate",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    aiEnhanced: true,
    category: "Web Development"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Learn to create and execute effective digital marketing campaigns.",
    instructor: "Emma Rodriguez",
    rating: 4.7,
    students: 6542,
    duration: "18 hours",
    level: "All Levels",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    aiEnhanced: false,
    category: "Marketing"
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    description: "Master the fundamentals of user experience and interface design.",
    instructor: "Alex Kim",
    rating: 4.9,
    students: 5321,
    duration: "22 hours",
    level: "Beginner",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    aiEnhanced: true,
    category: "Design"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses, handpicked by our team and enhanced with AI-powered learning tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="card-hover overflow-hidden">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {course.category}
                  </Badge>
                </div>
                {course.aiEnhanced && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-accent text-white flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      AI-Enhanced
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <Link to={`/courses/${course.id}`} className="hover:text-primary transition-colors">
                  <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
                </Link>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center">
                <span className="font-bold text-lg">${course.price}</span>
                <Link to={`/courses/${course.id}`}>
                  <Button variant="outline" size="sm">View Course</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/courses">
            <Button className="gap-2">
              Browse All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
