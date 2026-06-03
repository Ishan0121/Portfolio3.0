import AnimatedText from "@/components/common/AnimationText";
import SocialLinks from "@/components/common/SocialLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";


const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomePage() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col items-center justify-center py-10 relative"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl flex flex-col items-center justify-center text-center px-4 relative z-10"
      >
        <div className="space-y-10 flex flex-col items-center justify-center">
          <motion.div
            variants={fadeUp}
            className="space-y-6 flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-foreground max-w-4xl drop-shadow-2xl">
              <span className="block text-primary/80 text-2xl sm:text-3xl font-medium tracking-normal mb-4">Hello, I am</span>
              <span className="bg-clip-text text-transparent bg-linear-to-br from-foreground to-foreground/50">
                {siteConfig.name}
              </span>
            </h1>
            <div className="text-xl sm:text-2xl text-muted-foreground h-10 tracking-tight font-medium max-w-2xl text-balance">
              <AnimatedText texts={siteConfig.taglines} speed={65} pause={2000} />
            </div>
          </motion.div>
              
          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl font-normal leading-relaxed text-balance"
          >
            {siteConfig.bio}
          </motion.p>
              
          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6 pt-6 w-full justify-center">
            <Button asChild size="lg" className="p-5 glass">
              <Link to="/projects">
                View My Work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="p-5"
            >
              <a href={siteConfig.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
                        
          <motion.div variants={fadeUp} className="pt-10">
            <Badge variant="ghost" className="mb-6 text-lg">
              Connect
            </Badge>
            <Card className="px-4 py-2">
              <SocialLinks size="lg" className="gap-6"/>
            </Card>
          </motion.div>
        </div>
      </motion.div>
      </section>
  );
}
              
