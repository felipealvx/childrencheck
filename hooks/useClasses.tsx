import { useContext } from "react";
import { ClassesContext } from "@/contexts/ClassesContext";

export function useClasses() {
  const context = useContext(ClassesContext);

  if (!context) {
    throw new Error('useClasses deve ser usado dentro de um ClassesProvider');
  }

  return context;
}