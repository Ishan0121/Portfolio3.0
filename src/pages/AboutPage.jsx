import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { aboutInfo, timeline, services } from "@/data/about";
import { siteConfig } from "@/data/site";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left Column - Image & Quick Facts */}
        <motion.div variants={fadeIn} className="lg:col-span-5 space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 dark:border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
              <img 
                src={`https://github.com/${siteConfig.githubUsername}.png`} 
                alt="DP" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <Card className="glass border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-md">
            <CardContent className="p-6 flex flex-col gap-3">
              <Badge variant="secondary" className="justify-start py-1.5 px-3 bg-secondary/30 w-fit text-sm font-normal text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {siteConfig.location}
              </Badge>
              <Badge variant="secondary" className="justify-start py-1.5 px-3 bg-secondary/30 w-fit text-sm font-normal text-muted-foreground flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                {timeline[0]?.title || "Available for opportunities"}
              </Badge>
              <Badge variant="secondary" className="justify-start py-1.5 px-3 bg-secondary/30 w-fit text-sm font-normal text-muted-foreground flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                {aboutInfo.degree}
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Bio & Experience */}
        <motion.div variants={fadeIn} className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {aboutInfo.heading}
            </h1>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-none space-y-6">
              {aboutInfo.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
             {aboutInfo.stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl glass bg-card/20 border border-white/5">
                   <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                   <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
             ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-semibold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item, i) => (
                <Card key={i} className="glass hover:bg-white/5 dark:hover:bg-white/5 transition-colors border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-md">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-heading font-semibold flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              My Journey
            </h2>
            <div className="relative ml-3 space-y-8 mt-6">
              <Separator orientation="vertical" className="absolute left-0 top-2 bottom-0 w-[1px] bg-border/50" />
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
                  <div className="text-sm text-primary font-mono mb-1 font-bold">{item.year}</div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <div className="text-sm text-foreground/80 mb-2 font-medium">{item.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
