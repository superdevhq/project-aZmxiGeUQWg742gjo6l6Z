
import { BookOpen, UserPlus, Lightbulb, Award } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: "Create an Account",
    description: "Sign up for free and get access to our platform's basic features. Explore courses and see what interests you."
  },
  {
    id: 2,
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Enroll in Courses",
    description: "Browse our extensive catalog and enroll in courses that match your interests and career goals."
  },
  {
    id: 3,
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Learn with AI Assistance",
    description: "Experience personalized learning with our AI tools that adapt to your pace and style, providing custom quizzes and summaries."
  },
  {
    id: 4,
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Earn Certificates",
    description: "Complete courses to earn verified certificates that you can share with employers and on your professional profiles."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How EduForgeAI Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes learning accessible, engaging, and effective through a simple process enhanced by artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{step.id}</span>
              </div>
              
              {/* Step Content */}
              <div className="bg-card border rounded-lg p-6 pt-8 h-full flex flex-col items-center text-center card-hover">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Connector Line (except for the last item) */}
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary/30" />
              )}
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 bg-muted/50 border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your learning experience?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join thousands of students who are already benefiting from our AI-powered learning platform.
            Start your journey today and experience education reimagined.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span>Personalized Learning Paths</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span>Interactive Exercises</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span>Real-time Feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span>Progress Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
