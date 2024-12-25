"use client";

import { User } from "@/types/auth";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
}));