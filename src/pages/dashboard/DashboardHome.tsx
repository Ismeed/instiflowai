import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, AlertTriangle, Radio } from "lucide-react";

const stats = [
  { label: "Total Users", value: "2,430", icon: Users, change: "+12%" },
  { label: "Messages", value: "18,209", icon: MessageSquare, change: "+8%" },
  { label: "Complaints", value: "47", icon: AlertTriangle, change: "-5%" },
  { label: "Broadcasts", value: "126", icon: Radio, change: "+22%" },
];

const DashboardHome = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      <p className="text-sm text-muted-foreground">Overview of your institution's activity.</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(s => (
        <Card key={s.label} className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
            <s.icon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-card-foreground">{s.value}</p>
            <p className="text-xs text-accent mt-1">{s.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default DashboardHome;
