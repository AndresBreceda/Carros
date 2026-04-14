import { useState, useEffect, useRef } from "react";

const MAX_ATTEMPTS = 3;
const LOCKOUT_SECONDS = 30;

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lockedOut, setLockedOut] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const timerRef = useRef(null);

  // Countdown tick
  useEffect(() => {
    if (!lockedOut) return;

    setCountdown(LOCKOUT_SECONDS);

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setLockedOut(false);
          setAttempts(0);
          setErrorMsg("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [lockedOut]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Hard block — nothing passes through
    if (lockedOut) return;

    try {
      const response = await fetch("http://localhost:5206/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userEmail", data.email);
        if (email.includes("admin")) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= MAX_ATTEMPTS) {
          setLockedOut(true);
          setErrorMsg(`Demasiados intentos fallidos. Bloqueado por ${LOCKOUT_SECONDS} segundos.`);
        } else {
          setErrorMsg(`Credenciales incorrectas. Intentos restantes: ${MAX_ATTEMPTS - newAttempts}`);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Error de conexión. Inténtalo de nuevo.");
    }
  };

  const isDisabled = lockedOut;

  return (
    <div className="min-h-screen flex items-center justify-center p-12 bg-background relative overflow-hidden">
      {/* Decorative Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10 glass-panel p-12 lg:p-16 rounded-sm border border-outline-variant/10">
        <h1 className="font-headline text-4xl mb-2 text-center">Private Access</h1>
        <p className="text-center font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-12">Members Only Area</p>

        {/* Error / Lockout message */}
        {errorMsg && (
          <div
            className="mb-8 px-4 py-3 rounded-sm text-center font-label text-[11px] uppercase tracking-widest"
            style={{
              background: "rgba(220,38,38,0.12)",
              border: "1px solid rgba(220,38,38,0.35)",
              color: "#f87171",
            }}
          >
            {errorMsg}
            {lockedOut && (
              <span className="block mt-1" style={{ fontSize: "18px", letterSpacing: "0.05em", color: "#fca5a5" }}>
                {countdown}s
              </span>
            )}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Email or Membership ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isDisabled}
              className="w-full bg-transparent border-b-2 border-outline-variant pb-4 font-body text-on-background placeholder-on-surface-variant focus:outline-none focus:border-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isDisabled}
              className="w-full bg-transparent border-b-2 border-outline-variant pb-4 font-body text-on-background placeholder-on-surface-variant focus:outline-none focus:border-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-4 h-4 border border-outline-variant group-hover:border-secondary transition-colors"></div>
              <span className="font-label text-[10px] uppercase tracking-widest text-[#E5E2E1]">Remember Me</span>
            </label>
            <a href="#" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors">Reset Key</a>
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className="w-full mt-12 gold-gradient text-on-secondary py-4 font-label uppercase tracking-[0.2em] text-xs font-bold transition-transform hover:brightness-110 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:brightness-75 disabled:scale-100"
          >
            {lockedOut ? `Bloqueado (${countdown}s)` : "Enter the Gallery"}
          </button>
        </form>

        <div className="mt-12 text-center">
          <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Not a member? </span>
          <a href="#" className="font-label text-[10px] uppercase tracking-widest text-secondary border-b border-secondary pb-1">Request Invitation</a>
        </div>
      </div>
    </div>
  );
}
