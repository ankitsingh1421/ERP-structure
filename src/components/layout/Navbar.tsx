"use client";

import { UserButton } from "@/components/auth/UserButton";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { Building2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="font-semibold">Enterprise ERP</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}