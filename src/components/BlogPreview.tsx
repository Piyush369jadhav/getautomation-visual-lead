import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogPreview = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation();

  const posts = [
    {
      title: "The Future of B2B Sales: How AI is Changing the Game",
      excerpt: "Discover how leading companies are leveraging AI agents to transform their sales pipelines and achieve unprecedented growth.",
      date: "Oct 15, 2025",
      readTime: "5 min read",
      category: "B2B Sales",
    },
    {
      title: "5 Ways AI Agents Improve Customer Experience",
      excerpt: "Learn how AI-powered automation can deliver personalized, instant support that keeps customers coming back.",
      date: "Oct 12, 2025",
      readTime: "4 min read",
      category: "B2C",
    },
    {
      title: "ROI Calculator: Is AI Automation Right for Your Business?",
      excerpt: "A comprehensive guide to understanding the costs, benefits, and timeline for implementing AI agents in your organization.",
      date: "Oct 8, 2025",
      readTime: "7 min read",
      category: "Strategy",
    },
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref];
  const cardVisibles = [card1Visible, card2Visible, card3Visible];

  return (
    <section className="py-24 px-4" id="blog">
      <div className="container mx-auto">
        <div
          ref={titleRef as any}
          className={`flex justify-between items-end mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay ahead with expert insights on AI automation and business transformation
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-2 border-primary/50 hover:bg-primary/10">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              ref={cardRefs[index] as any}
              className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_40px_hsl(265_85%_58%/0.2)] cursor-pointer ${
                cardVisibles[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="p-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {post.category}
                </div>

                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="border-2 border-primary/50 hover:bg-primary/10">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
