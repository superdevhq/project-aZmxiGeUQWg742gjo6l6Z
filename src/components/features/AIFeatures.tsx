
import { Brain, Sparkles, Target, LineChart, MessageSquare, FileText, Zap, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Personalized Learning Paths",
    description: "Our AI analyzes your learning style, pace, and goals to create custom learning paths that adapt as you progress."
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Smart Content Recommendations",
    description: "Receive tailored course and resource recommendations based on your interests, career goals, and learning history."
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Auto-Generated Summaries",
    description: "Get AI-generated summaries of lectures and course materials to reinforce key concepts and aid in quick review."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "AI Learning Assistant",
    description: "Ask questions and get instant answers from our AI assistant that understands the context of your courses."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Adaptive Quizzes & Assessments",
    description: "Face challenges that adjust to your knowledge level, focusing on areas where you need more practice."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Progress Analytics",
    description: "Gain insights into your learning patterns with detailed analytics that help you optimize your study habits."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Knowledge Gap Detection",
    description: "Our AI identifies concepts you're struggling with and provides additional resources to strengthen your understanding."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Content Enhancement",
    description: "Experience courses enhanced with AI-generated examples, practice problems, and supplementary materials."
  }
];

const AIFeatures = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(67,97,238,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(76,201,240,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4 bg-background/80 backdrop-blur-sm">
            <span className="flex items-center gap-1.5">
              <Brain className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground/80">Powered by Advanced AI</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Learning Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform leverages cutting-edge artificial intelligence to transform how you learn, 
            making education more personalized, engaging, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="mb-4 p-2 bg-primary/10 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Demo Preview */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-3xl -z-10 opacity-30" />
          <div className="bg-card border rounded-xl overflow-hidden shadow-xl">
            <div className="p-6 border-b bg-muted/50">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                AI Learning Assistant Demo
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 border-r">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-medium">U</span>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-sm">
                      Can you explain the concept of neural networks in simple terms?
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="h-4 w-4 text-accent" />
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 text-sm">
                      <p>Neural networks are computing systems inspired by the human brain. Think of them like this:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>They're made up of interconnected nodes (like brain neurons)</li>
                        <li>Each connection can transmit a signal to other nodes</li>
                        <li>Signals travel through layers, getting processed along the way</li>
                      </ul>
                      <p className="mt-2">Imagine a network that learns to recognize cats in photos by analyzing thousands of examples, gradually improving its accuracy.</p>
                      <p className="mt-2">Would you like me to explain how they learn or provide a specific example?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-muted/30">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Related Learning Resources
                </h4>
                <div className="space-y-3">
                  <div className="bg-background rounded-lg p-3 border">
                    <div className="text-sm font-medium">Introduction to Neural Networks</div>
                    <div className="text-xs text-muted-foreground mt-1">Video Lecture • 12 min</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 border">
                    <div className="text-sm font-medium">Neural Networks Visualization Tool</div>
                    <div className="text-xs text-muted-foreground mt-1">Interactive Exercise • 15 min</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 border">
                    <div className="text-sm font-medium">Building Your First Neural Network</div>
                    <div className="text-xs text-muted-foreground mt-1">Hands-on Tutorial • 30 min</div>
                  </div>
                </div>
                
                <h4 className="font-medium mb-3 mt-6 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Knowledge Check
                </h4>
                <div className="bg-background rounded-lg p-3 border">
                  <div className="text-sm">What is the main inspiration for neural networks?</div>
                  <div className="grid grid-cols-1 gap-2 mt-3">
                    <div className="border rounded p-2 text-sm hover:bg-primary/10 cursor-pointer transition-colors">Computer circuits</div>
                    <div className="border rounded p-2 text-sm hover:bg-primary/10 cursor-pointer transition-colors">The human brain</div>
                    <div className="border rounded p-2 text-sm hover:bg-primary/10 cursor-pointer transition-colors">Quantum physics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
