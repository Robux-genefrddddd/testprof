import { BarChart3, Users, MessageSquare, TrendingUp, LogOut } from "lucide-react";

export default function Admin() {
  const stats = [
    { label: "Total Users", value: "2,451", change: "+12.5%", icon: Users },
    { label: "Active Chats", value: "8,234", change: "+8.2%", icon: MessageSquare },
    { label: "API Requests", value: "52.3K", change: "+23.1%", icon: TrendingUp },
    { label: "Uptime", value: "99.97%", change: "Perfect", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b border-border h-14 bg-background/50">
        <div className="h-full max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <span className="text-xs font-bold text-accent-foreground">A</span>
            </span>
            <h1 className="text-sm font-medium text-foreground">Admin</h1>
          </div>
          <button className="p-1.5 text-foreground hover:bg-secondary/40 rounded transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-8 px-6 max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-foreground mb-1">Dashboard</h2>
          <p className="text-xs text-foreground/60">Overview of VanIA platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="card-minimal hover:border-accent/40 cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-foreground/60 mb-1">{stat.label}</p>
                    <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                  </div>
                  <Icon className="w-4 h-4 text-foreground/40" />
                </div>
                <p className="text-xs text-accent font-medium">{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 card-minimal">
            <h3 className="text-sm font-medium text-foreground mb-4">User Activity</h3>
            <div className="h-48 bg-secondary/30 rounded border border-border flex items-center justify-center">
              <p className="text-xs text-foreground/40">Chart placeholder</p>
            </div>
          </div>

          {/* Side Panel */}
          <div className="card-minimal">
            <h3 className="text-sm font-medium text-foreground mb-4">Top Models</h3>
            <div className="space-y-3">
              {["GPT-4", "Claude 3", "Llama 2"].map((model, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs pb-3 border-b border-border/50 last:border-b-0 last:pb-0">
                  <span className="text-foreground">{model}</span>
                  <span className="font-medium text-accent">
                    {Math.floor(Math.random() * 40 + 20)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="card-minimal overflow-x-auto">
          <h3 className="text-sm font-medium text-foreground mb-4">Recent Activity</h3>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-2 px-3 text-foreground/60 font-medium">User</th>
                <th className="text-left py-2 px-3 text-foreground/60 font-medium">Action</th>
                <th className="text-left py-2 px-3 text-foreground/60 font-medium">Time</th>
                <th className="text-left py-2 px-3 text-foreground/60 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { user: "john@example.com", action: "Started chat", time: "2m ago", status: "Active" },
                { user: "sarah@example.com", action: "Upgraded plan", time: "15m ago", status: "Complete" },
                { user: "mike@example.com", action: "API request", time: "42m ago", status: "Active" },
                { user: "emma@example.com", action: "Settings updated", time: "1h ago", status: "Complete" },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                  <td className="py-2 px-3 text-foreground">{row.user}</td>
                  <td className="py-2 px-3 text-foreground/70">{row.action}</td>
                  <td className="py-2 px-3 text-foreground/60">{row.time}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${
                        row.status === "Active"
                          ? "bg-accent/10 text-accent border-accent/30"
                          : "bg-secondary/30 text-foreground/70 border-border/30"
                      }`}
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
  );
}
