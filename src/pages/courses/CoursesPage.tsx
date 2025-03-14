
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { courses, Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Star, Search, Filter, Clock, Users, Sparkles, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Get unique categories from courses
const categories = Array.from(new Set(courses.map(course => course.category)));

// Get unique levels from courses
const levels = Array.from(new Set(courses.map(course => course.level)));

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [aiEnhancedOnly, setAiEnhancedOnly] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [activeTab, setActiveTab] = useState("all");

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let result = courses;
    
    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Apply level filter
    if (selectedLevel) {
      result = result.filter(course => course.level === selectedLevel);
    }
    
    // Apply price range filter
    result = result.filter(course => {
      const coursePrice = course.discountPrice || course.price;
      return coursePrice >= priceRange[0] && coursePrice <= priceRange[1];
    });
    
    // Apply AI-enhanced filter
    if (aiEnhancedOnly) {
      result = result.filter(course => course.aiEnhanced);
    }
    
    // Apply tab filter
    if (activeTab === "featured") {
      result = result.filter(course => course.featured);
    } else if (activeTab === "popular") {
      result = result.sort((a, b) => b.studentCount - a.studentCount).slice(0, 8);
    } else if (activeTab === "new") {
      result = result.sort((a, b) => 
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      ).slice(0, 8);
    }
    
    setFilteredCourses(result);
  }, [searchQuery, selectedCategory, selectedLevel, priceRange, aiEnhancedOnly, activeTab]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
              <p className="text-muted-foreground mb-8">
                Discover thousands of courses taught by expert instructors and enhanced with AI-powered learning tools.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Search for courses, topics, or skills..."
                  className="pl-10 py-6 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-card rounded-lg border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedLevel(null);
                      setPriceRange([0, 150]);
                      setAiEnhancedOnly(false);
                    }}
                  >
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Category</Label>
                    <Select 
                      value={selectedCategory || "all"} 
                      onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Level Filter */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Level</Label>
                    <Select 
                      value={selectedLevel || "all"} 
                      onValueChange={(value) => setSelectedLevel(value === "all" ? null : value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Price Range Filter */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-sm font-medium">Price Range</Label>
                      <span className="text-sm text-muted-foreground">
                        ${priceRange[0]} - ${priceRange[1]}
                      </span>
                    </div>
                    <Slider
                      defaultValue={[0, 150]}
                      max={150}
                      step={5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-4"
                    />
                  </div>
                  
                  {/* AI Enhanced Filter */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="ai-enhanced" 
                      checked={aiEnhancedOnly}
                      onCheckedChange={(checked) => setAiEnhancedOnly(checked as boolean)}
                    />
                    <Label htmlFor="ai-enhanced" className="text-sm font-medium cursor-pointer flex items-center gap-1.5">
                      AI-Enhanced Courses
                      <Sparkles className="h-3.5 w-3.5 text-accent" />
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Listings */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All Courses</TabsTrigger>
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                    <TabsTrigger value="popular">Most Popular</TabsTrigger>
                    <TabsTrigger value="new">Newest</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Filter className="h-4 w-4" />
                  <span>{filteredCourses.length} results</span>
                </div>
              </div>
              
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
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
                        <Link to={`/courses/${course.slug}`} className="hover:text-primary transition-colors">
                          <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">by {course.instructor.name}</p>
                      </CardHeader>
                      
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {course.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
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
                      </CardContent>
                      
                      <CardFooter className="flex justify-between items-center">
                        <span className="font-bold text-lg">
                          ${course.discountPrice || course.price}
                          {course.discountPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              ${course.price}
                            </span>
                          )}
                        </span>
                        <Link to={`/courses/${course.slug}`}>
                          <Button variant="outline" size="sm">View Course</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg border">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We couldn't find any courses matching your criteria. Try adjusting your filters or search query.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                      setSelectedLevel(null);
                      setPriceRange([0, 150]);
                      setAiEnhancedOnly(false);
                      setActiveTab("all");
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
