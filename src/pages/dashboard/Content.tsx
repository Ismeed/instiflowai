import { Button } from "@/components/ui/button";
import { Upload, FileText, Trash2 } from "lucide-react";

const files = [
  { name: "Admission_Guide_2026.pdf", size: "2.4 MB", date: "2026-03-20" },
  { name: "Fee_Structure.pdf", size: "1.1 MB", date: "2026-03-18" },
  { name: "FAQ_General.txt", size: "45 KB", date: "2026-03-15" },
];

const Content = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Content</h1>
        <p className="text-sm text-muted-foreground">Manage your knowledge base files.</p>
      </div>
      <Button><Upload className="mr-2 h-4 w-4" /> Upload File</Button>
    </div>
    <div className="space-y-3">
      {files.map(f => (
        <div key={f.name} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-soft">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-card-foreground">{f.name}</p>
              <p className="text-xs text-muted-foreground">{f.size} · {f.date}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default Content;
