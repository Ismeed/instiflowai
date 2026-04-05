import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Shield, Radio, LayoutDashboard, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "WhatsApp AI Assistant", desc: "Automate responses with AI-powered chatbots tailored to your institution." },
  { icon: Shield, title: "Complaint Management", desc: "Track, assign, and resolve complaints with a streamlined ticketing system." },
  { icon: Radio, title: "Broadcast Messaging", desc: "Send targeted announcements to thousands of recipients instantly." },
  { icon: LayoutDashboard, title: "Admin Dashboard", desc: "Monitor everything from one clean, powerful dashboard." },
];

const steps = [
  { num: "01", title: "Create Your Account", desc: "Sign up and configure your institution profile in minutes." },
  { num: "02", title: "Upload Knowledge Base", desc: "Add FAQs, admission info, and fees so AI can respond accurately." },
  { num: "03", title: "Go Live on WhatsApp", desc: "Connect your WhatsApp number and start engaging with your audience." },
];

const Landing = () => (
  <div className="min-h-screen bg-background">
    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold text-foreground">
          Insti<span className="text-primary">Flow</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <section className="gradient-hero pt-32 pb-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/80">
            <CheckCircle className="h-4 w-4" />
            Trusted by 100+ institutions
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Powering Institutional<br />Communication
          </h1>
          <p className="mb-10 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            WhatsApp-based automation for universities, colleges, and schools. Manage admissions, complaints, and broadcasts from one platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/signup">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-xl">
                Get Started <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 rounded-xl">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">Features</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Everything you need to communicate</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it Works */}
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">How it works</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Get started in 3 simple steps</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
                {s.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl font-bold text-foreground mb-2">Insti<span className="text-primary">Flow</span></p>
        <p className="text-sm text-muted-foreground">© 2026 InstiFlow. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Landing;
