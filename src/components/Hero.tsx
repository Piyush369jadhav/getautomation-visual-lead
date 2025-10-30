import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <img
          src={heroBg}
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-30 animate-[float_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(265_85%_58%/0.15)_0%,transparent_50%)] animate-[pulse-glow_4s_ease-in-out_infinite]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              AI Agents That
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Transform Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Automate your B2B sales pipeline and deliver exceptional B2C experiences with cutting-edge AI solutions
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105 text-lg px-8 py-6 rounded-xl shadow-[0_0_40px_hsl(265_85%_58%/0.3)] hover:shadow-[0_0_60px_hsl(265_85%_58%/0.5)]"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>

          <div className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10x
              </div>
              <div className="text-sm text-muted-foreground">Faster Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                40%
              </div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
