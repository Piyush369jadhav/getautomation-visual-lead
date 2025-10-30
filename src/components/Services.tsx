import { ArrowRight, Bot, Users, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import b2bImage from "@/assets/b2b-service.jpg";
import b2cImage from "@/assets/b2c-service.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();

  return (
    <section className="py-24 px-4 relative" id="services">
      <div className="container mx-auto">
        <div
          ref={titleRef as any}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Powerful AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business operations with specialized AI agents designed for real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* B2B Sales AI */}
          <Card
            ref={card1Ref as any}
            className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:scale-105 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_0_60px_hsl(265_85%_58%/0.3)] ${
              card1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={b2bImage} 
                alt="B2B Sales AI" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">B2B Sales AI</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Supercharge your sales pipeline with AI agents that qualify leads, schedule meetings, 
                and nurture prospects 24/7. Increase conversion rates while your team focuses on closing deals.
              </p>

              <ul className="space-y-3">
                {[
                  "Intelligent lead qualification and scoring",
                  "Automated outreach and follow-ups",
                  "Real-time pipeline insights",
                  "Seamless CRM integration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
              >
                <a href="#contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </Card>

          {/* B2C AI Agents */}
          <Card
            ref={card2Ref as any}
            className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 hover:scale-105 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_0_60px_hsl(190_95%_50%/0.3)] ${
              card2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={b2cImage} 
                alt="B2C AI Agents" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-primary">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">B2C AI Agents</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Deliver exceptional customer experiences at scale with AI agents that understand, 
                engage, and support your customers across every touchpoint.
              </p>

              <ul className="space-y-3">
                {[
                  "Natural conversational AI support",
                  "Multi-channel customer engagement",
                  "Personalized recommendations",
                  "Instant query resolution"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity group"
              >
                <a href="#contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
