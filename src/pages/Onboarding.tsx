import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Upload, Building2, MessageSquare, PartyPopper } from "lucide-react";

const stepsMeta = [
  { title: "Institution Info", icon: Building2 },
  { title: "Knowledge Base", icon: Upload },
  { title: "Departments", icon: Building2 },
  { title: "Connect WhatsApp", icon: MessageSquare },
  { title: "Finish", icon: PartyPopper },
];

const departments = ["Admissions", "ICT", "Exams", "Finance"];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [selectedDepts, setSelectedDepts] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleDept = (d: string) =>
    setSelectedDepts(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);

  const next = () => step < 4 ? setStep(step + 1) : navigate("/dashboard");
  const back = () => step > 0 && setStep(step - 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-lg">
        <p className="text-center text-2xl font-bold text-foreground mb-8">
          Insti<span className="text-primary">Flow</span> Setup
        </p>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {stepsMeta.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? "w-10 bg-primary" : i < step ? "w-6 bg-accent" : "w-6 bg-border"}`} />
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <h2 className="text-lg font-semibold text-card-foreground mb-1">{stepsMeta[step].title}</h2>
          <p className="text-sm text-muted-foreground mb-6">Step {step + 1} of 5</p>

          {step === 0 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Institution Name</Label>
                <Input placeholder="e.g. University of Lagos" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Briefly describe your institution..." rows={3} />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              {["Admission Info", "Fee Structure", "FAQs"].map(label => (
                <div key={label} className="flex items-center justify-between rounded-xl border border-border p-4">
                  <span className="text-sm font-medium text-card-foreground">{label}</span>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-1 h-4 w-4" /> Upload
                  </Button>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-2 gap-3">
              {departments.map(d => (
                <button
                  key={d}
                  onClick={() => toggleDept(d)}
                  className={`rounded-xl border p-4 text-sm font-medium transition-all ${
                    selectedDepts.includes(d) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {selectedDepts.includes(d) && <CheckCircle className="inline mr-1 h-4 w-4" />}
                  {d}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="mx-auto mb-4 h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">WhatsApp Business API integration will be configured here.</p>
              <Button variant="outline" className="mt-4">Connect WhatsApp</Button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <PartyPopper className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h3 className="text-xl font-bold text-card-foreground mb-2">You're all set!</h3>
              <p className="text-sm text-muted-foreground">Your institution is ready. Head to the dashboard to start.</p>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={back} disabled={step === 0}>Back</Button>
            <Button onClick={next}>{step === 4 ? "Go to Dashboard" : "Continue"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
