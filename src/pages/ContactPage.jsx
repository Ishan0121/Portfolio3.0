import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import SocialLinks from "@/components/common/SocialLinks";


export default function ContactPage() {
  return (
    <div className="py-12 max-w-6xl mx-auto min-h-[80vh] flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column - Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-primary to-secondary">Let's create something amazing</span> together.
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you have a project in mind, a question about my work, or just want to say hi, I'm always open to chatting.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full glass bg-card/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">{siteConfig.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full glass bg-card/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium group-hover:text-primary transition-colors">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm font-medium mb-4">Connect with me</p>
            <div className="flex gap-4">
              <SocialLinks/>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass border-white/10 dark:border-white/5 shadow-2xl relative overflow-hidden bg-card/40 backdrop-blur-md">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <CardContent className="p-8 relative z-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Send a Message
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="bg-background/50 backdrop-blur-sm border-white/10 dark:border-white/5 focus-visible:ring-primary shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="bg-background/50 backdrop-blur-sm border-white/10 dark:border-white/5 focus-visible:ring-primary shadow-sm" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50 backdrop-blur-sm border-white/10 dark:border-white/5 focus-visible:ring-primary shadow-sm" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="min-h-[150px] bg-background/50 backdrop-blur-sm border-white/10 dark:border-white/5 focus-visible:ring-primary resize-none shadow-sm"
                  />
                </div>
                
                <Button className="w-full gap-2 rounded-xl group" size="lg">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        
      </div>
    </div>
  );
}
