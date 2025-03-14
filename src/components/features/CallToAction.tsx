
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Personalized learning paths tailored to your goals",
  "AI-powered assistance available 24/7",
  "Learn at your own pace with flexible scheduling",
  "Join a global community of learners and experts",
  "Access to thousands of courses across diverse topics",
  "Earn recognized certificates to boost your career"
];

const CallToAction = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(76,201,240,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border rounded-xl overflow-hidden shadow-lg">
            <div className="hero-gradient p-1">
              <div className="bg-card rounded-t-lg p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Your Learning Journey Today
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of students and instructors on EduForgeAI and experience 
                  the future of education powered by artificial intelligence.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto gap-2">
                      Get Started for Free
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      View Pricing Plans
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Testimonial Footer */}
            <div className="p-6 bg-muted/30 border-t">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                      alt={`User ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground">
                    Joined by <span className="font-medium text-foreground">5M+</span> learners worldwide
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-primary fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
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

export default CallToAction;
