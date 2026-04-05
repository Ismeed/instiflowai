import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SettingsPage = () => (
  <div className="space-y-6 animate-fade-in max-w-2xl">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="text-sm text-muted-foreground">Manage your institution details.</p>
    </div>
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-5">
      <div className="space-y-2">
        <Label>Institution Name</Label>
        <Input defaultValue="University of Lagos" />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea defaultValue="A leading institution in West Africa." rows={3} />
      </div>
      <div className="space-y-2">
        <Label>Admin Email</Label>
        <Input defaultValue="admin@unilag.edu" />
      </div>
      <Button>Save Changes</Button>
    </div>
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="text-sm font-semibold text-card-foreground mb-3">Departments</h2>
      <div className="flex flex-wrap gap-2">
        {["Admissions", "ICT", "Exams", "Finance"].map(d => (
          <span key={d} className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{d}</span>
        ))}
      </div>
    </div>
  </div>
);

export default SettingsPage;
