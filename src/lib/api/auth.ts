import { User } from "@/types/auth";

export async function login(email: string, password: string): Promise<User> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export async function logout(): Promise<void> {
  await fetch("/api/auth/logout", { method: "POST" });
}