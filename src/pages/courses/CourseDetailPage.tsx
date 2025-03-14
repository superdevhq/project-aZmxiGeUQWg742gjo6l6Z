
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCourseBySlug } from "@/data/courses";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Star, 
  Clock, 
  Users, 
  Sparkles, 
  Globe, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Play, 
  FileText, 
  HelpCircle,
  ShoppingCart,
  Heart,
  Share2,
  AlertCircle,
  Brain
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CourseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { user, isStudent } = useAuth();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const course = getCourseBySlug(slug || "");
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Link to="/courses">
              <Button>Browse Courses</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleEnrollment = () => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate("/login", { state: { from: `/courses/${slug}` } });
      return;
    }
    
    // In a real app, this would call an API to enroll the user
    alert(`Successfully enrolled in ${course.title}!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Course Info */}
              <div className="lg:w-2/3">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{course.category}</Badge>
                  {course.aiEnhanced && (
                    <Badge className="bg-accent text-white flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      AI-Enhanced
                    </Badge>
                  )}
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>{course.studentCount.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>Last updated {course.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span>{course.language}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Created by</p>
                    <Link to={`/instructors/${course.instructor.id}`} className="text-primary hover:underline">
                      {course.instructor.name}
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Course Card */}
              <div className="lg:w-1/3">
                <div className="bg-card border rounded-lg overflow-hidden sticky top-24">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-3xl font-bold">
                        ${course.discountPrice || course.price}
                        {course.discountPrice && (
                          <span className="text-lg text-muted-foreground line-through ml-2">
                            ${course.price}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full gap-2" 
                        size="lg"
                        onClick={handleEnrollment}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        {user && isStudent() ? "Enroll Now" : "Buy Now"}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-destructive text-destructive" : ""}`} />
                        {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                      </Button>
                      
                      <Button variant="ghost" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <h4 className="font-medium">This course includes:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{course.duration} of on-demand video</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Downloadable resources</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          <span>Direct instructor Q&A</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>Certificate of completion</span>
                        </li>
                        {course.aiEnhanced && (
                          <li className="flex items-center gap-2 text-sm">
                            <Brain className="h-4 w-4 text-accent" />
                            <span className="font-medium">AI-powered learning tools</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        30-Day Money-Back Guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              {/* What You'll Learn */}
              {course.objectives && (
                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Course Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                <div className="prose max-w-none">
                  <p>{course.longDescription}</p>
                </div>
              </div>
              
              {/* Requirements */}
              {course.requirements && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {course.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* AI Features */}
              {course.aiEnhanced && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-semibold">AI-Enhanced Learning Features</h2>
                  </div>
                  <p className="mb-4">This course includes our advanced AI-powered learning tools to help you master the material more effectively:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Smart Content Recommendations</p>
                        <p className="text-sm text-muted-foreground">Personalized resources based on your learning patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Auto-Generated Summaries</p>
                        <p className="text-sm text-muted-foreground">AI-created summaries of lectures for quick review</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">AI Learning Assistant</p>
                        <p className="text-sm text-muted-foreground">Ask questions and get instant, contextual answers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Adaptive Quizzes</p>
                        <p className="text-sm text-muted-foreground">Quizzes that adjust to your knowledge level</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="curriculum">
              {course.curriculum ? (
                <div className="bg-card border rounded-lg">
                  <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-semibold">Course Content</h2>
                      <div className="text-sm text-muted-foreground">
                        {course.curriculum.sections.reduce((total, section) => total + section.lectures.length, 0)} lectures • {course.duration}
                      </div>
                    </div>
                  </div>
                  
                  <Accordion type="multiple" className="w-full">
                    {course.curriculum.sections.map((section, sectionIndex) => (
                      <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex justify-between items-center w-full text-left">
                            <span className="font-medium">{section.title}</span>
                            <span className="text-sm text-muted-foreground">
                              {section.lectures.length} lectures
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-0">
                          <div className="divide-y">
                            {section.lectures.map((lecture, lectureIndex) => (
                              <div 
                                key={lectureIndex} 
                                className="flex items-center justify-between px-6 py-3 hover:bg-muted/50"
                              >
                                <div className="flex items-center gap-3">
                                  {lecture.type === "video" && <Play className="h-4 w-4 text-muted-foreground" />}
                                  {lecture.type === "quiz" && <HelpCircle className="h-4 w-4 text-muted-foreground" />}
                                  {lecture.type === "assignment" && <FileText className="h-4 w-4 text-muted-foreground" />}
                                  {lecture.type === "text" && <FileText className="h-4 w-4 text-muted-foreground" />}
                                  
                                  <span className={lecture.preview ? "text-primary" : ""}>
                                    {lecture.title}
                                    {lecture.preview && <span className="ml-2 text-xs">(Preview)</span>}
                                  </span>
                                </div>
                                <span className="text-sm text-muted-foreground">{lecture.duration}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ) : (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Detailed curriculum information is not available for this course.
                  </AlertDescription>
                </Alert>
              )}
            </TabsContent>
            
            <TabsContent value="instructor">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{course.instructor.name}</h2>
                    <p className="text-muted-foreground mb-4">Professional Instructor</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>4.8 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span>15 Courses</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>24,500+ Students</span>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      <p>
                        An experienced instructor with expertise in {course.category}. 
                        With years of industry experience and a passion for teaching, 
                        they've helped thousands of students master complex concepts 
                        and achieve their learning goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">{course.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-5 w-5 ${star <= Math.round(course.rating) ? 'fill-primary text-primary' : 'text-muted'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">Course Rating</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="font-semibold mb-4">Student Feedback</h3>
                    
                    <div className="space-y-6">
                      {/* Sample reviews - in a real app, these would come from an API */}
                      <div className="border-b pb-6">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://randomuser.me/api/portraits/women/32.jpg" 
                              alt="Reviewer" 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">Jennifer L.</p>
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
                          This course exceeded my expectations! The content is well-structured and 
                          the instructor explains complex concepts in an easy-to-understand way. 
                          The AI-powered features really helped me grasp difficult topics.
                        </p>
                      </div>
                      
                      <div className="border-b pb-6">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://randomuser.me/api/portraits/men/45.jpg" 
                              alt="Reviewer" 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">Michael T.</p>
                              <p className="text-xs text-muted-foreground">1 month ago</p>
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
                          Great course with practical examples and exercises. I especially liked 
                          the auto-generated summaries after each section - they were perfect for 
                          quick reviews before moving on to the next topic.
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://randomuser.me/api/portraits/women/68.jpg" 
                              alt="Reviewer" 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">Sarah K.</p>
                              <p className="text-xs text-muted-foreground">2 months ago</p>
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
                          The instructor is knowledgeable and engaging. The course content is 
                          comprehensive and up-to-date. I've already applied what I learned to 
                          my current projects with great results!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
