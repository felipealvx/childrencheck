import { createContext, ReactNode, useState } from "react";

export type QuestProps = {
  fullName: string;
  age: string;
  weight: number;
  height: number;
  parent: string;
  pratica: 1 | 2;
  qual?: string;
  diasPratica: 1 | 2 | 3 | 4;
  competitivo: 1 | 2;
  horasTv: 1 | 2 | 3 | 4 | 5 | 6;
  horasPc: 1 | 2 | 3 | 4 | 5;
  ler: 1 | 2 | 3;
  posicaoDormir: 1 | 2 | 3 | 4;
  horasDorme: 1 | 2 | 3 | 4 | 5;
  sexo: 1 | 2;
  sentarEscreverMesa: 1 | 2 | 3 | 4 | 5 | 6;
  sentarCadeiraConversar: 1 | 2 | 3 | 4 | 5 | 6;
  sentarComputador: 1 | 2 | 3 | 4 | 5 | 6;
  pegarObjeto: 1 | 2 | 3 | 4 | 5;
  bolsas: 1 | 2 | 3 | 4 | 5 | 6;
  levarMochila: 1 | 2 | 3 | 4 | 5 | 6;
  responsavelFemEstudo: 1 | 2 | 3 | 4 | 5 | 6; 
  responsavelMascEstudo: 1 | 2 | 3 | 4 | 5 | 6; 
  responsavelDores: 1 | 2 | 3;
  qualResponsavelDores?: string;
  sentiuDor: 1 | 2 | 3;
  dorFrequente: 1 | 2 | 3 | 4 | 5 | 6; 
  dorImpede: 1 | 2 | 3;
  escalaDor: number;
};

type QuestFormContextDataProps = {
  questFormData: QuestProps;
  updateFormData: (value: QuestProps) => void;
};

type QuestFormContextProviderProps = {
  children: ReactNode;
};

const QuestFormContext = createContext<QuestFormContextDataProps>(
  {} as QuestFormContextDataProps
);

function QuestProvider({ children }: QuestFormContextProviderProps) {
  const [questFormData, setQuestFormData] = useState<QuestProps>(
    {} as QuestProps
  );

  function updateFormData(data: QuestProps) {
    setQuestFormData((prevState) => ({ ...prevState, ...data }));
  }

  return (
    <QuestFormContext.Provider
      value={{
        questFormData,
        updateFormData
      }}
    >
      {children}
    </QuestFormContext.Provider>
  );
}

export { QuestProvider, QuestFormContext };