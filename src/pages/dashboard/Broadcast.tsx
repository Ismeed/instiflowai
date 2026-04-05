import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Broadcast = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    if (!message.trim()) return;
    toast({ title: "Broadcast sent!", description: "Your message has been queued for delivery." });
    setMessage("");
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Broadcast</h1>
        <p className="text-sm text-muted-foreground">Send a message to all your contacts.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
        <div className="space-y-2">
          <Label>Message</Label>
          <Textarea placeholder="Write your broadcast message here..." rows={6} value={message} onChange={e => setMessage(e.target.value)} />
        </div>
        <Button onClick={handleSend} disabled={!message.trim()}>
          <Send className="mr-2 h-4 w-4" /> Send Broadcast
        </Button>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-sm font-semibold text-card-foreground mb-3">Recent Broadcasts</h2>
        <div className="space-y-3">
          {["Semester exams start on April 15th", "Library hours extended during finals"].map((b, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <p className="text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
