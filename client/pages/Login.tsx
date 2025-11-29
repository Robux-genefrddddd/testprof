import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login attempt:", { email, password });
    } catch (err) {
      setError("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl text-foreground mb-2">
            Welcome to VanIA
          </h1>
          <p className="text-sm text-foreground/60">Sign in to your account</p>
        </div>

        {/* Form Card */}
        <div className="border border-border rounded bg-card/50 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-foreground uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`input-clean pl-9 ${error ? "border-destructive focus:border-destructive" : ""}`}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-foreground uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`input-clean pl-9 ${error ? "border-destructive focus:border-destructive" : ""}`}
                  required
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="p-2.5 rounded bg-destructive/10 border border-destructive/30">
                <p className="text-xs text-destructive">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-3 py-2.5 rounded bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm transition-colors duration-150 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-foreground/40">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-xs text-foreground/60">
            Don't have an account?{" "}
            <a href="#" className="text-accent hover:text-accent/80 font-medium transition-colors">
              Create one
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-foreground/40 mt-6">
          By signing in, you agree to our{" "}
          <a href="#" className="hover:text-accent transition-colors">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="hover:text-accent transition-colors">
            Privacy
          </a>
        </p>
      </div>
    </div>
  );
}
