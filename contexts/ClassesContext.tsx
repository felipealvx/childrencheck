import { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuestProps } from "./QuestFormContext";

export type StudentData = QuestProps & {
  id: string;
  createdAt: Date;
};

export type ClassData = {
  id: string;
  name: string;
  createdAt: Date;
  students: StudentData[];
};

type ClassesContextDataProps = {
  classes: ClassData[];
  addNewClass: (className: string) => void;
  addStudentToClass: (classId: string, studentData: QuestProps) => void;
  deleteClass: (classId: string) => void;
  removeStudentFromClass: (classId: string, studentId: string) => void;
  getClassById: (classId: string) => ClassData | undefined;
  isLoading: boolean; // Novo estado para indicar carregamento
};

type ClassesContextProviderProps = {
  children: ReactNode;
};

const ClassesContext = createContext<ClassesContextDataProps>(
  {} as ClassesContextDataProps
);

const STORAGE_KEY = '@app_classes_data';

function ClassesProvider({ children }: ClassesContextProviderProps) {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Função para salvar dados no AsyncStorage
  const saveClassesToStorage = async (classesToSave: ClassData[]) => {
    try {
      const jsonValue = JSON.stringify(classesToSave);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  // Função para carregar dados do AsyncStorage
  const loadClassesFromStorage = async () => {
    try {
      setIsLoading(true);
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      
      if (jsonValue != null) {
        const loadedClasses: ClassData[] = JSON.parse(jsonValue);
        
        // Converter strings de data de volta para objetos Date
        const classesWithDates = loadedClasses.map(classItem => ({
          ...classItem,
          createdAt: new Date(classItem.createdAt),
          students: classItem.students.map(student => ({
            ...student,
            createdAt: new Date(student.createdAt)
          }))
        }));
        
        setClasses(classesWithDates);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar dados quando o componente monta
  useEffect(() => {
    loadClassesFromStorage();
  }, []);

  // Salvar dados sempre que o estado classes mudar
  useEffect(() => {
    if (!isLoading && classes.length >= 0) {
      saveClassesToStorage(classes);
    }
  }, [classes, isLoading]);

  function addNewClass(className: string) {
    const newClass: ClassData = {
      id: Date.now().toString(),
      name: className,
      createdAt: new Date(),
      students: [],
    };

    setClasses(prevState => [...prevState, newClass]);
  }

  function addStudentToClass(classId: string, studentData: QuestProps) {
    const newStudent: StudentData = {
      ...studentData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };

    setClasses(prevState =>
      prevState.map(classItem =>
        classItem.id === classId
          ? { ...classItem, students: [...classItem.students, newStudent] }
          : classItem
      )
    );
  }

  function deleteClass(classId: string) {
    setClasses(prevState => prevState.filter(classItem => classItem.id !== classId));
  }

  function removeStudentFromClass(classId: string, studentId: string) {
    setClasses(prevState =>
      prevState.map(classItem =>
        classItem.id === classId
          ? {
              ...classItem,
              students: classItem.students.filter(student => student.id !== studentId)
            }
          : classItem
      )
    );
  }

  function getClassById(classId: string): ClassData | undefined {
    return classes.find(classItem => classItem.id === classId);
  }

  return (
    <ClassesContext.Provider
      value={{
        classes,
        addNewClass,
        addStudentToClass,
        deleteClass,
        removeStudentFromClass,
        getClassById,
        isLoading,
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
}

export { ClassesProvider, ClassesContext };