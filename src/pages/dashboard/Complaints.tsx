import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const tickets = [
  { id: "TKT-001", category: "Admissions", status: "Open", date: "2026-04-01" },
  { id: "TKT-002", category: "Finance", status: "In Progress", date: "2026-04-02" },
  { id: "TKT-003", category: "ICT", status: "Resolved", date: "2026-03-30" },
  { id: "TKT-004", category: "Exams", status: "Open", date: "2026-04-04" },
  { id: "TKT-005", category: "Finance", status: "Resolved", date: "2026-03-28" },
];

const statusColor: Record<string, string> = {
  Open: "bg-destructive/10 text-destructive border-destructive/20",
  "In Progress": "bg-primary/10 text-primary border-primary/20",
  Resolved: "bg-accent/20 text-accent-foreground border-accent/30",
};

const Complaints = () => (
  <div className="space-y-4 animate-fade-in">
    <h1 className="text-2xl font-bold text-foreground">Complaints</h1>
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticket ID</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map(t => (
            <TableRow key={t.id}>
              <TableCell className="font-medium">{t.id}</TableCell>
              <TableCell>{t.category}</TableCell>
              <TableCell>
                <Badge variant="outline" className={statusColor[t.status]}>{t.status}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{t.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default Complaints;
