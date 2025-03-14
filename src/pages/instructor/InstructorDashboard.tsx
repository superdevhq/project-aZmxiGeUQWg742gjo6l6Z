
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getCoursesForInstructor } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, 
  BookOpen, 
  Users, 
  DollarSign, 
  BarChart3, 
  Star, 
  Clock, 
  Sparkles,
  FileEdit,
  Trash2,
  Eye
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const InstructorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("courses");
  
  // In a real app, this would come from an API
  const instructorCourses = user ? getCoursesForInstructor("102") : [];
  
  // Mock data for earnings and students
  const earnings = {
    total: 12450.75,
    thisMonth: 2340.50,
    lastMonth: 1980.25,
    pending: 560.00
  };
  
  const students = {
    total: 1245,
    active: 876,
    completed: 369,
    newThisMonth: 87
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
                <p className="text-muted-foreground">Manage your courses and track your performance</p>
              </div>
              
              <Link to="/instructor/courses/new">
                <Button className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Create New Course
                </Button>
              </Link>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-primary mr-2" />
                    <span className="text-2xl font-bold">${earnings.total.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +${earnings.thisMonth.toLocaleString()} this month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="text-2xl font-bold">{students.total.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +{students.newThisMonth} new this month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <span className="text-2xl font-bold">{instructorCourses.length}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {instructorCourses.filter(c => c.aiEnhanced).length} AI-enhanced
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Average Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-primary text-primary mr-2" />
                    <span className="text-2xl font-bold">4.8</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    From 987 reviews
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="courses" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Your Courses</h2>
                  <Link to="/instructor/courses/new">
                    <Button variant="outline" size="sm" className="gap-2">
                      <PlusCircle className="h-4 w-4" />
                      New Course
                    </Button>
                  </Link>
                </div>
                
                {instructorCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {instructorCourses.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="relative">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-40 object-cover"
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
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <CardDescription className="line-clamp-2">
                            {course.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pb-2">
                          <div className="flex items-center justify-between text-sm mb-4">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="font-medium">{course.rating}</span>
                              <span className="text-muted-foreground">({course.reviewCount})</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>{course.studentCount.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{course.duration}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="font-bold">${course.price}</span>
                            <Badge variant={course.featured ? "default" : "outline"}>
                              {course.featured ? "Featured" : "Standard"}
                            </Badge>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="flex justify-between pt-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
                              <Link to={`/instructor/courses/${course.id}/edit`}>
                                <span className="sr-only">Edit</span>
                                <FileEdit className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Delete</span>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/courses/${course.slug}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                    
                    {/* Create New Course Card */}
                    <Card className="border-dashed bg-muted/50">
                      <CardContent className="flex flex-col items-center justify-center h-full py-12">
                        <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="font-medium text-lg mb-2">Create a New Course</h3>
                        <p className="text-muted-foreground text-center mb-6">
                          Share your knowledge and earn income by creating a new course
                        </p>
                        <Link to="/instructor/courses/new">
                          <Button>Get Started</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Card className="bg-muted/30">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="font-medium text-lg mb-2">No Courses Yet</h3>
                      <p className="text-muted-foreground text-center mb-6">
                        You haven't created any courses yet. Start sharing your knowledge today!
                      </p>
                      <Link to="/instructor/courses/new">
                        <Button>Create Your First Course</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="earnings">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Earnings Overview</h2>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Earnings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${earnings.total.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        This Month
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${earnings.thisMonth.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Last Month
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${earnings.lastMonth.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Pending Payout
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${earnings.pending.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings by Course</CardTitle>
                    <CardDescription>
                      View your earnings breakdown by course
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {instructorCourses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between pb-4 border-b">
                          <div className="flex items-center gap-3">
                            <img 
                              src={course.image} 
                              alt={course.title} 
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div>
                              <h4 className="font-medium">{course.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Users className="h-3.5 w-3.5" />
                                  <span>{course.studentCount}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                                  <span>{course.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">${(course.price * course.studentCount * 0.7).toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Lifetime earnings</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="students">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Student Overview</h2>
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Export Student Data
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Students
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{students.total.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Active Students
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{students.active.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Completed Courses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{students.completed.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        New This Month
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{students.newThisMonth.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Students by Course</CardTitle>
                    <CardDescription>
                      View student enrollment and completion rates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {instructorCourses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between pb-4 border-b">
                          <div className="flex items-center gap-3">
                            <img 
                              src={course.image} 
                              alt={course.title} 
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div>
                              <h4 className="font-medium">{course.title}</h4>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="h-3.5 w-3.5" />
                                <span>{course.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{course.studentCount.toLocaleString()} students</div>
                            <div className="text-xs text-muted-foreground">
                              {Math.round(Math.random() * 100)}% completion rate
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Course Reviews</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className="h-5 w-5 fill-primary text-primary" 
                        />
                      ))}
                    </div>
                    <span className="font-medium">4.8 overall rating</span>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                    <CardDescription>
                      See what students are saying about your courses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Sample reviews - in a real app, these would come from an API */}
                      <div className="border-b pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://randomuser.me/api/portraits/men/32.jpg" 
                              alt="Reviewer" 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">Robert J.</p>
                                <Badge variant="outline">Full-Stack Web Development</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">3 days ago</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= 5 ? 'fill-primary text-primary' : 'text-muted'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p>
                          Excellent course! The instructor explains complex concepts clearly and 
                          provides practical examples. The AI-enhanced features really helped me 
                          understand difficult topics. Highly recommended!
                        </p>
                      </div>
                      
                      <div className="border-b pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://randomuser.me/api/portraits/women/45.jpg" 
                              alt="Reviewer" 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">Lisa M.</p>
                                <Badge variant="outline">Full-Stack Web Development</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">1 week ago</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= 4 ? 'fill-primary text-primary' : 'text-muted'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p>
                          Great course with lots of practical information. The projects were challenging 
                          but very helpful for learning. I would have liked more advanced topics, but 
                          overall it was worth the investment.
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://randomuser.me/api/portraits/men/67.jpg" 
                              alt="Reviewer" 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">David W.</p>
                                <Badge variant="outline">Full-Stack Web Development</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">2 weeks ago</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= 5 ? 'fill-primary text-primary' : 'text-muted'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p>
                          This is exactly what I was looking for to level up my skills. The instructor 
                          is knowledgeable and explains everything clearly. The course is well-structured 
                          and the pace is perfect. Thank you!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstructorDashboard;
