import { useContext } from "react";

import { QuestFormContext } from "@/contexts/QuestFormContext";

export function useQuestForm() {
  const context = useContext(QuestFormContext);

  return context;
}
