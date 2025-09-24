import { useContext } from "react";
import { QuestFormContext } from "@/contexts/QuestFormContext";

export function useQuestForm() {
  const context = useContext(QuestFormContext);

  if (!context) {
    throw new Error('useQuestForm deve ser usado dentro de um QuestProvider');
  }

  return context;
}