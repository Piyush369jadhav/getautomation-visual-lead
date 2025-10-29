import { CheckCircle2, MessageSquare, Zap, Target, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Process = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();

  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Discovery Call",
      description: "We understand your goals and challenges",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategy Design",
      description: "Custom AI solution tailored to your needs",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Implementation",
      description: "Seamless integration with your systems",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Launch & Optimize",
      description: "Continuous improvement and support",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div
          ref={titleRef as any}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment in just 4 simple steps
          </p>
        </div>

        <div
          ref={stepsRef as any}
          className="relative max-w-5xl mx-auto"
        >
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative text-center space-y-4 transition-all duration-700 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-[0_0_30px_hsl(265_85%_58%/0.3)] z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">Average implementation time: 2-4 weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
