import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const mockMessages = [
  { id: 1, sender: "Student", text: "When does admission start?", time: "10:30 AM", isUser: false },
  { id: 2, sender: "Bot", text: "Admissions open on June 1st. Visit our portal for more details.", time: "10:30 AM", isUser: true },
  { id: 3, sender: "Student", text: "What are the tuition fees?", time: "10:32 AM", isUser: false },
  { id: 4, sender: "Bot", text: "Tuition fees vary by program. I'll send you a detailed breakdown.", time: "10:32 AM", isUser: true },
];

const Messages = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] animate-fade-in">
      <h1 className="text-2xl font-bold text-foreground mb-4">Messages</h1>
      <div className="flex-1 rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
        <div className="flex-1 p-4 overflow-auto space-y-3">
          {mockMessages.map(m => (
            <div key={m.id} className={`flex ${m.isUser ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm ${m.isUser ? "gradient-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                <p>{m.text}</p>
                <p className={`text-[10px] mt-1 ${m.isUser ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border p-3 flex gap-2">
          <Input placeholder="Type a message..." value={input} onChange={e => setInput(e.target.value)} className="flex-1" />
          <Button size="icon"><Send className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
