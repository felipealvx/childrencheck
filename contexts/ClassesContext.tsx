import { createContext, ReactNode, useState } from "react";
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
};

type ClassesContextProviderProps = {
  children: ReactNode;
};

const ClassesContext = createContext<ClassesContextDataProps>(
  {} as ClassesContextDataProps
);

function ClassesProvider({ children }: ClassesContextProviderProps) {
  const [classes, setClasses] = useState<ClassData[]>([]);

  function addNewClass(className: string) {
    const newClass: ClassData = {
      id: Date.now().toString(), // ID simples baseado no timestamp
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
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
}

export { ClassesProvider, ClassesContext };