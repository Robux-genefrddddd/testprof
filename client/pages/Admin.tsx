import { BarChart3, Users, MessageSquare, TrendingUp, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Admin() {
  const stats = [
    {
      label: "Total Users",
      value: "2,451",
      change: "+12.5%",
      icon: Users,
      color: "bg-accent/10 border-accent/20",
    },
    {
      label: "Active Chats",
      value: "8,234",
      change: "+8.2%",
      icon: MessageSquare,
      color: "bg-secondary/10 border-secondary/20",
    },
    {
      label: "API Requests",
      value: "52.3K",
      change: "+23.1%",
      icon: TrendingUp,
      color: "bg-accent/10 border-accent/20",
    },
    {
      label: "Uptime",
      value: "99.97%",
      change: "Perfect",
      icon: BarChart3,
      color: "bg-secondary/10 border-secondary/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b border-border/50">
        <div className="bg-background/80 backdrop-blur-md">
          <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <span className="text-sm font-bold text-accent-foreground">A</span>
              </div>
              <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
            </div>
            <button className="p-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <LogOut className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-6 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-foreground mb-2">Dashboard</h2>
          <p className="text-foreground/60">Overview of VanIA platform metrics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={cn(
                  "card-premium",
                  stat.color,
                  "border transition-all duration-200 hover:border-accent/40 cursor-pointer"
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                    <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                  </div>
                  <Icon className="w-5 h-5 text-foreground/40 flex-shrink-0" />
                </div>
                <p className="text-xs text-accent font-medium">{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-6">User Activity</h3>
            <div className="h-64 bg-secondary/10 rounded-lg border border-border/50 flex items-center justify-center">
              <p className="text-foreground/40">Chart placeholder</p>
            </div>
          </div>

          {/* Side Panel */}
          <div className="card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-6">Top Models</h3>
            <div className="space-y-4">
              {["GPT-4", "Claude 3", "Llama 2"].map((model, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-border/30 last:border-b-0">
                  <span className="text-sm text-foreground">{model}</span>
                  <span className="text-sm font-medium text-accent">
                    {Math.floor(Math.random() * 40 + 20)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="card-premium">
          <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">User</th>
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Action</th>
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Time</th>
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { user: "john@example.com", action: "Started chat", time: "2m ago", status: "Active" },
                  {
                    user: "sarah@example.com",
                    action: "Upgraded plan",
                    time: "15m ago",
                    status: "Complete",
                  },
                  {
                    user: "mike@example.com",
                    action: "API request",
                    time: "42m ago",
                    status: "Active",
                  },
                  {
                    user: "emma@example.com",
                    action: "Settings updated",
                    time: "1h ago",
                    status: "Complete",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-4 text-foreground">{row.user}</td>
                    <td className="py-3 px-4 text-foreground/80">{row.action}</td>
                    <td className="py-3 px-4 text-foreground/60">{row.time}</td>
                    <td className="py-3 px-4">
                      <span
                        className={cn(
                          "inline-block px-2 py-1 rounded text-xs font-medium",
                          row.status === "Active"
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "bg-secondary/10 text-foreground/70 border border-secondary/20"
                        )}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
