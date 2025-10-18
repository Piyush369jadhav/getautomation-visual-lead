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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CaseStudyCard
            icon={<Building2 className="h-6 w-6" />}
            company="TechCorp Enterprise"
            industry="B2B SaaS"
            stats={[
              { value: 245, suffix: "%", label: "Increase in qualified leads" },
              { value: 18, suffix: "h", label: "Saved per week" },
              { value: 3.2, suffix: "M", label: "Additional revenue" },
            ]}
            description="Automated their entire outbound sales process, resulting in 3x more meetings booked and 245% increase in qualified leads."
          />

          <CaseStudyCard
            icon={<ShoppingBag className="h-6 w-6" />}
            company="RetailMax"
            industry="E-commerce"
            stats={[
              { value: 89, suffix: "%", label: "Customer satisfaction" },
              { value: 12, suffix: "k", label: "Conversations per day" },
              { value: 60, suffix: "%", label: "Cost reduction" },
            ]}
            description="Deployed AI agents to handle customer inquiries, achieving 89% satisfaction rate while reducing support costs by 60%."
          />

          <CaseStudyCard
            icon={<Rocket className="h-6 w-6" />}
            company="GrowthLabs"
            industry="Digital Marketing"
            stats={[
              { value: 340, suffix: "%", label: "ROI improvement" },
              { value: 24, suffix: "/7", label: "Lead engagement" },
              { value: 95, suffix: "%", label: "Response accuracy" },
            ]}
            description="Transformed their lead generation with AI agents that engage prospects 24/7, increasing ROI by 340%."
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
