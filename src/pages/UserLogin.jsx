import { useState } from "react";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5206/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      console.log(email);
      const data = await response.json();

      console.log(data);

      if (data.token) {
        localStorage.setItem("token", data.token);

        if (email.includes("admin")) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/dashboard";
        }

      } else {
        alert("Credenciales incorrectas");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-12 bg-background relative overflow-hidden">
      {/* Decorative Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10 glass-panel p-12 lg:p-16 rounded-sm border border-outline-variant/10">
        <h1 className="font-headline text-4xl mb-2 text-center">Private Access</h1>
        <p className="text-center font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-12">Members Only Area</p>

        <form className="space-y-8">
          <div>
            <input
              type="email"
              placeholder="Email or Membership ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b-2 border-outline-variant pb-4 font-body text-on-background placeholder-on-surface-variant focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b-2 border-outline-variant pb-4 font-body text-on-background placeholder-on-surface-variant focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-4 h-4 border border-outline-variant group-hover:border-secondary transition-colors"></div>
              <span className="font-label text-[10px] uppercase tracking-widest text-[#E5E2E1]">Remember Me</span>
            </label>
            <a href="#" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors">Reset Key</a>
          </div>

          <button type="submit" onClick={handleLogin} className="w-full mt-12 gold-gradient text-on-secondary py-4 font-label uppercase tracking-[0.2em] text-xs font-bold transition-transform hover:brightness-110 active:scale-[0.98]">Enter the Gallery</button>
        </form>

        <div className="mt-12 text-center">
          <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Not a member? </span>
          <a href="#" className="font-label text-[10px] uppercase tracking-widest text-secondary border-b border-secondary pb-1">Request Invitation</a>
        </div>
      </div>
    </div>
  );
}
