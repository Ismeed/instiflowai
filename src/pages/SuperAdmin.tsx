import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, MessageSquare, Plus, ArrowLeft } from "lucide-react";

const tenants = [
  { name: "University of Lagos", users: 1200, messages: 8400, status: "Active" },
  { name: "Covenant University", users: 830, messages: 5200, status: "Active" },
  { name: "Babcock University", users: 400, messages: 2600, status: "Pending" },
];

const stats = [
  { label: "Total Institutions", value: "3", icon: Building2 },
  { label: "Total Users", value: "2,430", icon: Users },
  { label: "Total Messages", value: "16,200", icon: MessageSquare },
];

const SuperAdmin = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-14 items-center gap-4 px-4">
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <span className="text-lg font-bold text-foreground">Insti<span className="text-primary">Flow</span></span>
        <Badge variant="outline" className="ml-1 border-primary/30 text-primary text-xs">Super Admin</Badge>
      </div>
    </header>
    <main className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Platform Overview</h1>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Tenant</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map(s => (
          <Card key={s.label} className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-card-foreground">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Institution</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Messages</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenants.map(t => (
              <TableRow key={t.name}>
                <TableCell className="font-medium">{t.name}</TableCell>
                <TableCell>{t.users.toLocaleString()}</TableCell>
                <TableCell>{t.messages.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={t.status === "Active" ? "bg-accent/20 text-accent-foreground border-accent/30" : "bg-primary/10 text-primary border-primary/20"}>
                    {t.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  </div>
);

export default SuperAdmin;
