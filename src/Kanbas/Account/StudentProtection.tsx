// src/Kanbas/Account/FacultyOnly.tsx
import { useSelector } from "react-redux";

export default function StudentProtection({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  if (currentUser?.role === "STUDENT") {
    return children;
  }
  return null;
}
