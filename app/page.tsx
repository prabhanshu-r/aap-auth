
"use client";

import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(`Login form submitted for: ${email}`);
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="brand">
          <div className="brand-icon">C</div>
          <span>Connect</span>
        </div>

        <h1>Welcome back</h1>
        <p className="subtitle">
          Sign in to continue to your conversations.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <div className="password-heading">
            <label htmlFor="password">Password</label>
            <button
              className="text-button"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />

          <button className="login-button" type="submit">
            Sign in
          </button>
        </form>

        <p className="signup-prompt">
          Don't have an account?{" "}
          <a href="/signup">Create one</a>
        </p>

        <p className="footer-text">
          Your conversations, all in one place.
        </p>
      </section>
    </main>
  );
}
