
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  BookOpen, 
  Upload, 
  Plus, 
  Trash2, 
  DollarSign, 
  Clock, 
  FileText, 
  Video, 
  HelpCircle, 
  Sparkles,
  Save,
  AlertCircle,
  ArrowLeft,
  Brain
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Get unique categories from courses
const categories = [
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Design",
  "Marketing",
  "Business",
  "Finance",
  "IT & Software",
  "Personal Development",
  "Photography",
  "Music",
  "Health & Fitness"
];

const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];

const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Arabic"];

const CourseCreationPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Basic Info State
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [language, setLanguage] = useState("English");
  
  // Pricing State
  const [price, setPrice] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discountPrice, setDiscountPrice] = useState("");
  
  // Content State
  const [sections, setSections] = useState([
    { 
      title: "Section 1: Introduction", 
      lectures: [
        { title: "Welcome to the Course", type: "video", duration: "", preview: true }
      ]
    }
  ]);
  
  // AI Features State
  const [aiEnhanced, setAiEnhanced] = useState(true);
  const [aiFeatures, setAiFeatures] = useState({
    smartRecommendations: true,
    autoSummaries: true,
    adaptiveQuizzes: true,
    aiAssistant: true
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const addSection = () => {
    setSections([
      ...sections, 
      { 
        title: `Section ${sections.length + 1}`, 
        lectures: [] 
      }
    ]);
  };
  
  const addLecture = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lectures.push({
      title: "New Lecture",
      type: "video",
      duration: "",
      preview: false
    });
    setSections(updatedSections);
  };
  
  const updateSectionTitle = (index: number, title: string) => {
    const updatedSections = [...sections];
    updatedSections[index].title = title;
    setSections(updatedSections);
  };
  
  const updateLecture = (sectionIndex: number, lectureIndex: number, field: string, value: any) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lectures[lectureIndex] = {
      ...updatedSections[sectionIndex].lectures[lectureIndex],
      [field]: value
    };
    setSections(updatedSections);
  };
  
  const removeLecture = (sectionIndex: number, lectureIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lectures.splice(lectureIndex, 1);
    setSections(updatedSections);
  };
  
  const removeSection = (index: number) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // In a real app, this would save the course to the database
      alert("Course created successfully!");
      navigate("/instructor/dashboard");
    }, 1500);
  };
  
  const isFormValid = () => {
    // Basic validation
    if (!title || !description || !category || !level || !price) {
      return false;
    }
    
    // Check if all sections have at least one lecture
    if (sections.some(section => section.lectures.length === 0)) {
      return false;
    }
    
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-4"
              onClick={() => navigate("/instructor/dashboard")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold">Create New Course</h1>
                <p className="text-muted-foreground">Share your knowledge and expertise with students worldwide</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-8 grid grid-cols-4 w-full">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="content">Course Content</TabsTrigger>
                    <TabsTrigger value="ai">AI Features</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="basic" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Information</CardTitle>
                        <CardDescription>
                          Provide the basic details about your course
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="title">Course Title</Label>
                          <Input 
                            id="title" 
                            placeholder="e.g., Complete Web Development Bootcamp" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subtitle">Course Subtitle</Label>
                          <Input 
                            id="subtitle" 
                            placeholder="e.g., Learn HTML, CSS, JavaScript, React, and more" 
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Course Description</Label>
                          <Textarea 
                            id="description" 
                            placeholder="Provide a detailed description of your course" 
                            rows={6}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select 
                              value={category} 
                              onValueChange={setCategory}
                              required
                            >
                              <SelectTrigger id="category">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((cat) => (
                                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="level">Level</Label>
                            <Select 
                              value={level} 
                              onValueChange={setLevel}
                              required
                            >
                              <SelectTrigger id="level">
                                <SelectValue placeholder="Select a level" />
                              </SelectTrigger>
                              <SelectContent>
                                {levels.map((lvl) => (
                                  <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select 
                            value={language} 
                            onValueChange={setLanguage}
                          >
                            <SelectTrigger id="language">
                              <SelectValue placeholder="Select a language" />
                            </SelectTrigger>
                            <SelectContent>
                              {languages.map((lang) => (
                                <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Image</CardTitle>
                        <CardDescription>
                          Upload a high-quality image that represents your course
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 bg-muted/50">
                          {previewImage ? (
                            <div className="relative w-full max-w-md">
                              <img 
                                src={previewImage} 
                                alt="Course preview" 
                                className="w-full h-auto rounded-lg"
                              />
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                className="absolute top-2 right-2"
                                type="button"
                                onClick={() => setPreviewImage(null)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <>
                              <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                              <h3 className="font-medium text-lg mb-2">Upload Course Image</h3>
                              <p className="text-muted-foreground text-center mb-4">
                                Drag and drop an image or click to browse
                              </p>
                              <Input 
                                id="course-image" 
                                type="file" 
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                              />
                              <Label 
                                htmlFor="course-image" 
                                className="cursor-pointer"
                              >
                                <Button type="button">Select Image</Button>
                              </Label>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        onClick={() => setActiveTab("pricing")}
                      >
                        Continue to Pricing
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pricing" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Pricing</CardTitle>
                        <CardDescription>
                          Set the price for your course
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="price">Regular Price ($)</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="price" 
                              type="number" 
                              min="0" 
                              step="0.01" 
                              placeholder="49.99" 
                              className="pl-10"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="has-discount" 
                            checked={hasDiscount}
                            onCheckedChange={(checked) => setHasDiscount(checked as boolean)}
                          />
                          <Label htmlFor="has-discount">Enable promotional price</Label>
                        </div>
                        
                        {hasDiscount && (
                          <div className="space-y-2">
                            <Label htmlFor="discount-price">Promotional Price ($)</Label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="discount-price" 
                                type="number" 
                                min="0" 
                                step="0.01" 
                                placeholder="39.99" 
                                className="pl-10"
                                value={discountPrice}
                                onChange={(e) => setDiscountPrice(e.target.value)}
                                required={hasDiscount}
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setActiveTab("basic")}
                      >
                        Back to Basic Info
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setActiveTab("content")}
                      >
                        Continue to Course Content
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="content" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Content</CardTitle>
                        <CardDescription>
                          Organize your course into sections and lectures
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="border rounded-lg overflow-hidden">
                            <div className="bg-muted/50 p-4 flex justify-between items-center">
                              <Input 
                                value={section.title}
                                onChange={(e) => updateSectionTitle(sectionIndex, e.target.value)}
                                className="max-w-md bg-background"
                              />
                              <Button 
                                variant="ghost" 
                                size="sm"
                                type="button"
                                onClick={() => removeSection(sectionIndex)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="p-4 space-y-4">
                              {section.lectures.length > 0 ? (
                                <div className="space-y-4">
                                  {section.lectures.map((lecture, lectureIndex) => (
                                    <div key={lectureIndex} className="grid grid-cols-12 gap-4 items-center">
                                      <div className="col-span-5">
                                        <Input 
                                          value={lecture.title}
                                          onChange={(e) => updateLecture(sectionIndex, lectureIndex, "title", e.target.value)}
                                          placeholder="Lecture title"
                                        />
                                      </div>
                                      
                                      <div className="col-span-2">
                                        <Select 
                                          value={lecture.type} 
                                          onValueChange={(value) => updateLecture(sectionIndex, lectureIndex, "type", value)}
                                        >
                                          <SelectTrigger>
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="video">
                                              <div className="flex items-center">
                                                <Video className="h-4 w-4 mr-2" />
                                                <span>Video</span>
                                              </div>
                                            </SelectItem>
                                            <SelectItem value="text">
                                              <div className="flex items-center">
                                                <FileText className="h-4 w-4 mr-2" />
                                                <span>Text</span>
                                              </div>
                                            </SelectItem>
                                            <SelectItem value="quiz">
                                              <div className="flex items-center">
                                                <HelpCircle className="h-4 w-4 mr-2" />
                                                <span>Quiz</span>
                                              </div>
                                            </SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      
                                      <div className="col-span-2">
                                        <div className="relative">
                                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                          <Input 
                                            value={lecture.duration}
                                            onChange={(e) => updateLecture(sectionIndex, lectureIndex, "duration", e.target.value)}
                                            placeholder="Duration"
                                            className="pl-10"
                                          />
                                        </div>
                                      </div>
                                      
                                      <div className="col-span-2 flex items-center space-x-2">
                                        <Checkbox 
                                          id={`preview-${sectionIndex}-${lectureIndex}`} 
                                          checked={lecture.preview}
                                          onCheckedChange={(checked) => updateLecture(sectionIndex, lectureIndex, "preview", checked)}
                                        />
                                        <Label htmlFor={`preview-${sectionIndex}-${lectureIndex}`}>Preview</Label>
                                      </div>
                                      
                                      <div className="col-span-1 flex justify-end">
                                        <Button 
                                          variant="ghost" 
                                          size="sm"
                                          type="button"
                                          onClick={() => removeLecture(sectionIndex, lectureIndex)}
                                        >
                                          <Trash2 className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="text-center py-4 text-muted-foreground">
                                  No lectures in this section
                                </div>
                              )}
                              
                              <Button 
                                variant="outline" 
                                size="sm"
                                type="button"
                                onClick={() => addLecture(sectionIndex)}
                                className="w-full"
                              >
                                <Plus className="h-4 w-4 mr-2" />
                                Add Lecture
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        <Button 
                          variant="outline" 
                          type="button"
                          onClick={addSection}
                          className="w-full"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Section
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setActiveTab("pricing")}
                      >
                        Back to Pricing
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setActiveTab("ai")}
                      >
                        Continue to AI Features
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ai" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Brain className="h-5 w-5 text-primary" />
                          AI-Enhanced Learning Features
                        </CardTitle>
                        <CardDescription>
                          Enable AI features to enhance the learning experience for your students
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <Switch 
                            id="ai-enhanced" 
                            checked={aiEnhanced}
                            onCheckedChange={setAiEnhanced}
                          />
                          <Label htmlFor="ai-enhanced" className="font-medium">
                            Enable AI-Enhanced Learning
                          </Label>
                        </div>
                        
                        {aiEnhanced && (
                          <>
                            <Separator />
                            
                            <div className="space-y-4">
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="smart-recommendations" 
                                  checked={aiFeatures.smartRecommendations}
                                  onCheckedChange={(checked) => setAiFeatures({
                                    ...aiFeatures,
                                    smartRecommendations: checked as boolean
                                  })}
                                />
                                <div className="space-y-1">
                                  <Label 
                                    htmlFor="smart-recommendations" 
                                    className="font-medium flex items-center gap-2"
                                  >
                                    <Sparkles className="h-4 w-4 text-accent" />
                                    Smart Content Recommendations
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    AI will analyze student progress and recommend additional resources
                                    based on their learning patterns and needs.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="auto-summaries" 
                                  checked={aiFeatures.autoSummaries}
                                  onCheckedChange={(checked) => setAiFeatures({
                                    ...aiFeatures,
                                    autoSummaries: checked as boolean
                                  })}
                                />
                                <div className="space-y-1">
                                  <Label 
                                    htmlFor="auto-summaries" 
                                    className="font-medium flex items-center gap-2"
                                  >
                                    <FileText className="h-4 w-4 text-accent" />
                                    Auto-Generated Summaries
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    AI will generate concise summaries of your lectures to help students
                                    review key concepts quickly.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="adaptive-quizzes" 
                                  checked={aiFeatures.adaptiveQuizzes}
                                  onCheckedChange={(checked) => setAiFeatures({
                                    ...aiFeatures,
                                    adaptiveQuizzes: checked as boolean
                                  })}
                                />
                                <div className="space-y-1">
                                  <Label 
                                    htmlFor="adaptive-quizzes" 
                                    className="font-medium flex items-center gap-2"
                                  >
                                    <HelpCircle className="h-4 w-4 text-accent" />
                                    Adaptive Quizzes & Assessments
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    AI will create personalized quizzes that adapt to each student's
                                    knowledge level and learning progress.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="ai-assistant" 
                                  checked={aiFeatures.aiAssistant}
                                  onCheckedChange={(checked) => setAiFeatures({
                                    ...aiFeatures,
                                    aiAssistant: checked as boolean
                                  })}
                                />
                                <div className="space-y-1">
                                  <Label 
                                    htmlFor="ai-assistant" 
                                    className="font-medium flex items-center gap-2"
                                  >
                                    <Brain className="h-4 w-4 text-accent" />
                                    AI Learning Assistant
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Students can ask questions and get instant, contextual answers from
                                    an AI assistant trained on your course content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            <Alert className="bg-accent/10 border-accent/20">
                              <Brain className="h-4 w-4 text-accent" />
                              <AlertDescription className="text-foreground">
                                AI features are powered by our advanced machine learning models and may require
                                additional processing time when your course is published.
                              </AlertDescription>
                            </Alert>
                          </>
                        )}
                      </CardContent>
                    </Card>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setActiveTab("content")}
                      >
                        Back to Course Content
                      </Button>
                      <Button 
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                        className="gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <BookOpen className="h-4 w-4 animate-spin" />
                            Creating Course...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4" />
                            Create Course
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6 sticky top-24">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className={activeTab === "basic" ? "font-medium text-primary" : ""}>
                            Basic Info
                          </span>
                          <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${title && description && category && level ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                            {title && description && category && level ? "✓" : "1"}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className={activeTab === "pricing" ? "font-medium text-primary" : ""}>
                            Pricing
                          </span>
                          <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${price ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                            {price ? "✓" : "2"}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className={activeTab === "content" ? "font-medium text-primary" : ""}>
                            Course Content
                          </span>
                          <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${sections.length > 0 && sections.every(s => s.lectures.length > 0) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                            {sections.length > 0 && sections.every(s => s.lectures.length > 0) ? "✓" : "3"}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className={activeTab === "ai" ? "font-medium text-primary" : ""}>
                            AI Features
                          </span>
                          <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${aiEnhanced !== undefined ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                            {aiEnhanced !== undefined ? "✓" : "4"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 text-sm">
                        {activeTab === "basic" && (
                          <>
                            <p>
                              <span className="font-medium">Course Title:</span> Keep it clear, specific, and under 60 characters.
                            </p>
                            <p>
                              <span className="font-medium">Description:</span> Highlight what students will learn and why your course is valuable.
                            </p>
                            <p>
                              <span className="font-medium">Image:</span> Use a high-quality image (1280x720px) that represents your course content.
                            </p>
                          </>
                        )}
                        
                        {activeTab === "pricing" && (
                          <>
                            <p>
                              <span className="font-medium">Pricing Strategy:</span> Research similar courses to set a competitive price.
                            </p>
                            <p>
                              <span className="font-medium">Promotional Price:</span> Consider offering a limited-time discount to attract initial students.
                            </p>
                          </>
                        )}
                        
                        {activeTab === "content" && (
                          <>
                            <p>
                              <span className="font-medium">Course Structure:</span> Organize content into logical sections that build on each other.
                            </p>
                            <p>
                              <span className="font-medium">Lecture Length:</span> Keep video lectures between 5-15 minutes for optimal engagement.
                            </p>
                            <p>
                              <span className="font-medium">Preview Lectures:</span> Mark a few lectures as preview to give potential students a taste of your teaching style.
                            </p>
                          </>
                        )}
                        
                        {activeTab === "ai" && (
                          <>
                            <p>
                              <span className="font-medium">AI Enhancement:</span> AI features can significantly improve student engagement and learning outcomes.
                            </p>
                            <p>
                              <span className="font-medium">Auto-Summaries:</span> These help students review key concepts quickly and reinforce learning.
                            </p>
                            <p>
                              <span className="font-medium">Adaptive Quizzes:</span> These adjust to each student's knowledge level, providing a personalized learning experience.
                            </p>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseCreationPage;
