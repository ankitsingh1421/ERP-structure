import { useAuth } from "@/hooks/useAuth";
import { Role } from "@/types/auth";
import { PropsWithChildren } from "react";

interface RoleGuardProps extends PropsWithChildren {
  allowedRoles: Role[];
}

export function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}