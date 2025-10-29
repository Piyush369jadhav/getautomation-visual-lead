import { ArrowRight, Calendar, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: bookingRef, isVisible: bookingVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 px-4 relative" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(265_85%_58%/0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div
          ref={titleRef as any}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with a free consultation and see how AI can accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card
            ref={formRef as any}
            className={`bg-card/50 backdrop-blur-sm border-border/50 p-8 transition-all duration-700 ${
              formVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Inc."
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and goals..."
                  required
                  className="bg-background/50 min-h-32 resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                size="lg"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          {/* Booking Card */}
          <div
            ref={bookingRef as any}
            className={`space-y-6 transition-all duration-700 ${
              bookingVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <Card className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-primary/50 p-8 space-y-6">
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent w-fit">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Book a Demo</h3>
                <p className="text-muted-foreground">
                  Schedule a personalized 30-minute demo to see our AI agents in action
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "See live AI agents in your industry",
                  "Custom solution recommendations",
                  "ROI analysis and timeline",
                  "Q&A with our experts",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/20 text-primary mt-0.5">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Demo Call
              </Button>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">info@getautomationgo.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">+91 9022848731</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
