// src/Kanbas/Account/FacultyOnly.tsx
import { useSelector } from "react-redux";

export default function FacultyProtection({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  if (currentUser?.role === "FACULTY") {
    return children;
  }
  return null;
}
