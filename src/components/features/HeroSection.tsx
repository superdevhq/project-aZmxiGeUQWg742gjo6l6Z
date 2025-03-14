
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-[10%] left-[30%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-background/80 backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground/80">Revolutionizing online education with AI</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Learn Smarter with <span className="text-gradient">AI-Powered</span> Education
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              EduForgeAI combines cutting-edge artificial intelligence with expert-led courses to deliver 
              personalized learning experiences that adapt to your unique needs and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Explore Courses
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/teach">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Become an Instructor
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Active Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5M+</p>
                <p className="text-sm text-muted-foreground">Global Students</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Students learning with AI assistance" 
                className="w-full h-auto"
              />
              
              {/* AI Features Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-3 text-white">
                  <Brain className="h-6 w-6 text-accent" />
                  <div>
                    <h3 className="font-medium">AI-Powered Learning</h3>
                    <p className="text-sm text-white/80">Personalized to your learning style</p>
                  </div>
                </div>
              </div>
              
              {/* Feature Badges */}
              <div className="absolute top-4 right-4 bg-accent/90 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                <span>Smart Recommendations</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 h-full w-full rounded-xl border border-primary/20 bg-muted/50" />
            <div className="absolute -z-20 -bottom-12 -right-12 h-full w-full rounded-xl border border-primary/20 bg-muted/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
