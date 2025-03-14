
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "The AI-powered learning assistant is a game-changer. It's like having a personal tutor available 24/7 who knows exactly what I need to focus on.",
    author: "Jessica Martinez",
    role: "Software Developer",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "As an instructor, the AI tools have transformed how I create and deliver my courses. The auto-generated quizzes and summaries save me hours of work.",
    author: "David Wilson",
    role: "Data Science Instructor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "I've tried many online learning platforms, but EduForgeAI's personalized learning paths have helped me progress faster than ever before.",
    author: "Aisha Johnson",
    role: "Marketing Professional",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4
  },
  {
    id: 4,
    content: "The way the platform adapts to my learning style is incredible. It's like the courses are custom-built just for me, focusing on areas where I need more help.",
    author: "Michael Chen",
    role: "Engineering Student",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5
  },
  {
    id: 5,
    content: "The AI-generated summaries after each section help me review key concepts quickly. It's perfect for busy professionals like me who need efficient learning.",
    author: "Sarah Thompson",
    role: "Healthcare Professional",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5
  },
  {
    id: 6,
    content: "I was skeptical about AI in education, but EduForgeAI has changed my mind. The personalized feedback on my assignments has been invaluable.",
    author: "James Rodriguez",
    role: "Business Analyst",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how EduForgeAI is transforming the learning experience for students and instructors around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover overflow-hidden border-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="text-muted-foreground pt-2 pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card border rounded-lg p-6 text-center card-hover">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="bg-card border rounded-lg p-6 text-center card-hover">
            <div className="text-4xl font-bold text-primary mb-2">5M+</div>
            <p className="text-muted-foreground">Global Students</p>
          </div>
          <div className="bg-card border rounded-lg p-6 text-center card-hover">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">Courses Available</p>
          </div>
          <div className="bg-card border rounded-lg p-6 text-center card-hover">
            <div className="text-4xl font-bold text-primary mb-2">45K+</div>
            <p className="text-muted-foreground">Expert Instructors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
