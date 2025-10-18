import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Building2, ShoppingBag, Rocket } from "lucide-react";

const CaseStudies = () => {
  return (
    <section className="py-24 px-4 relative" id="case-studies">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses are transforming with our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <CaseStudyCard
            icon={<Building2 className="h-6 w-6" />}
            company="Infinity Global Traders"
            industry="Export Company"
            stats={[
              { value: 46, suffix: "k", label: "Recurring monthly orders" },
              { value: 15, suffix: "h", label: "Saved per week" },
              { value: 180, suffix: "%", label: "Growth in deals" },
            ]}
            description="Helped them land $46k recurring orders per month through automated lead qualification and follow-up systems."
          />

          <CaseStudyCard
            icon={<Rocket className="h-6 w-6" />}
            company="Catalyst Deal"
            industry="B2B Sales"
            stats={[
              { value: 28, suffix: "%", label: "Increase in conversions" },
              { value: 20, suffix: "h", label: "Time saved weekly" },
              { value: 95, suffix: "%", label: "Follow-up completion" },
            ]}
            description="Implemented an intelligent follow-up system that increased their conversion rate by 28% while saving 20 hours per week."
          />
        </div>
      </div>
    </section>
  );
};

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface CaseStudyCardProps {
  icon: React.ReactNode;
  company: string;
  industry: string;
  stats: Stat[];
  description: string;
}

const CaseStudyCard = ({ icon, company, industry, stats, description }: CaseStudyCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={cardRef}
      className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(265_85%_58%/0.2)] p-8 space-y-6"
    >
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
          {icon}
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <div>
        <h3 className="text-xl font-bold mb-1">{company}</h3>
        <p className="text-sm text-muted-foreground">{industry}</p>
      </div>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <StatCounter
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={index * 200}
            isVisible={isVisible}
          />
        ))}
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

const StatCounter = ({ value, suffix, label, delay, isVisible }: StatCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay, isVisible]);

  return (
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
};

export default CaseStudies;
