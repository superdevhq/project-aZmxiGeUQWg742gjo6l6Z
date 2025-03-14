
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube, Copyright } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">EduForge<span className="text-primary">AI</span></span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              EduForgeAI is revolutionizing online education with AI-powered learning experiences. 
              Create, teach, learn, and grow with our cutting-edge platform.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Browse Courses</Link></li>
              <li><Link to="/teach" className="text-muted-foreground hover:text-primary transition-colors">Become an Instructor</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing Plans</Link></li>
              <li><Link to="/ai-features" className="text-muted-foreground hover:text-primary transition-colors">AI Features</Link></li>
              <li><Link to="/affiliate" className="text-muted-foreground hover:text-primary transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/help-center" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors">Investors</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              <Copyright className="h-4 w-4 mr-1.5" />
              <p>
                <span className="font-medium">{currentYear} EduForgeAI.</span> All rights reserved. Unauthorized reproduction or distribution of any material on this site is strictly prohibited.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm">
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
