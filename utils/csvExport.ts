import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';
import { StudentData, ClassData } from '@/contexts/ClassesContext';

// Mapeamento dos valores numéricos para textos descritivos
const valueMapping = {
  // Sexo
  sexo: { 0: "0", 1: "1", 2: "2" },
  
  // Prática de exercício
  pratica: { 0: "0", 1: "1", 2: "2" },
  
  // Dias de prática
  diasPratica: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4" 
  },
  
  // Competitivo
  competitivo: { 0: "0", 1: "1", 2: "2" },
  
  // Horas TV
  horasTv: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  // Horas PC
  horasPc: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5" 
  },
  
  // Ler na cama
  ler: { 0: "0", 1: "1", 2: "2", 3: "3" },
  
  // Posição para dormir
  posicaoDormir: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4" 
  },
  
  // Horas de sono
  horasDorme: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5" 
  },
  
  // Posturas (1-6 representam diferentes posições)
  sentarEscreverMesa: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  sentarCadeiraConversar: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  sentarComputador: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  // Pegar objeto do chão
  pegarObjeto: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5" 
  },
  
  // Tipo de bolsa
  bolsas: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  // Como levar mochila
  levarMochila: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  // Escolaridade responsáveis
  responsavelFemEstudo: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  responsavelMascEstudo: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  // Responsável com dores
  responsavelDores: { 0: "0", 1: "1", 2: "2", 3: "3" },
  
  // Dor nas costas
  sentiuDor: { 0: "0", 1: "1", 2: "2", 3: "3" },
  
  // Frequência da dor
  dorFrequente: { 
    0: "0", 
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6" 
  },
  
  // Dor impede atividades
  dorImpede: { 0: "0", 1: "1", 2: "2", 3: "3" },
};

// Função para mapear valores numéricos para textos
function mapValueToText(fieldName: string, value: any): string {
  if (value === null || value === undefined || value === '') {
    return "Não respondido";
  }
  
  if (fieldName in valueMapping) {
    const mapping = valueMapping[fieldName as keyof typeof valueMapping];
    return mapping[value as keyof typeof mapping] || value.toString();
  }
  
  return value.toString();
}

// Cabeçalhos das colunas do CSV
const CSV_HEADERS = [
  // Dados pessoais
  'nomeCompleto',
  'dataNascimento', 
  'peso',
  'altura',
  'responsavel',
  // 'Data de Preenchimento',
  
  // Atividades físicas
  'pratica',
  'qualExercicio',
  'diasPratica',
  'competitivo',
  
  // Hábitos
  'horasTv',
  'horasPc', 
  'ler',
  'posicaoDormir',
  'horasDorme',
  
  // Identificação
  'sexo',
  
  // Posturas
  'sentarEscreverMesa',
  'sentarCadeiraConversar',
  'sentarComputador',
  'pegarObjeto',
  'bolsas',
  'levarMochila',
  
  // Dados familiares
  'responsavelFemEstudo',
  'responsavelMascEstudo',
  'responsavelDores',
  'qualResponsavelDores',
  
  // Dores nas costas
  'sentiuDor',
  'dorFrequente',
  'dorImpede',
  'escalaDor'
];


// Função para converter dados do aluno em linha CSV
function studentToCSVRow(student: StudentData): string[] {
  return [
    student.fullName || "Não informado",
    student.age || "Não informado",
    student.weight?.toString() || "0",
    student.height?.toString() || "0", 
    student.parent || "Não informado",
    // new Date(student.createdAt).toLocaleDateString('pt-BR'),
    
    // Atividades físicas
    mapValueToText('pratica', student.pratica),
    student.qual || "N/A",
    mapValueToText('diasPratica', student.diasPratica),
    mapValueToText('competitivo', student.competitivo),
    
    // Hábitos
    mapValueToText('horasTv', student.horasTv),
    mapValueToText('horasPc', student.horasPc),
    mapValueToText('ler', student.ler),
    mapValueToText('posicaoDormir', student.posicaoDormir),
    mapValueToText('horasDorme', student.horasDorme),
    
    // Identificação
    mapValueToText('sexo', student.sexo),
    
    // Posturas
    mapValueToText('sentarEscreverMesa', student.sentarEscreverMesa),
    mapValueToText('sentarCadeiraConversar', student.sentarCadeiraConversar),
    mapValueToText('sentarComputador', student.sentarComputador),
    mapValueToText('pegarObjeto', student.pegarObjeto),
    mapValueToText('bolsas', student.bolsas),
    mapValueToText('levarMochila', student.levarMochila),
    
    // Dados familiares
    mapValueToText('responsavelFemEstudo', student.responsavelFemEstudo),
    mapValueToText('responsavelMascEstudo', student.responsavelMascEstudo),
    mapValueToText('responsavelDores', student.responsavelDores),
    student.qualResponsavelDores || "N/A",
    
    // Dores nas costas
    mapValueToText('sentiuDor', student.sentiuDor),
    mapValueToText('dorFrequente', student.dorFrequente),
    mapValueToText('dorImpede', student.dorImpede),
    student.escalaDor?.toString() || "0"
  ];
}

// Função principal para exportar turma para CSV
export async function exportClassToCSV(classData: ClassData): Promise<void> {
  try {
    // Criar conteúdo CSV
    const csvContent = [
      // Cabeçalho
      CSV_HEADERS.join(','),
      
      // Dados dos alunos
      ...classData.students.map(student => {
        const row = studentToCSVRow(student);
        // Escapar aspas e adicionar aspas em campos que contenham vírgulas
        return row.map(field => {
          if (field.includes(',') || field.includes('"') || field.includes('\n')) {
            return `"${field.replace(/"/g, '""')}"`;
          }
          return field;
        }).join(',');
      })
    ].join('\n');
    
    // Adicionar BOM para UTF-8 (para abrir corretamente no Excel)
    const csvWithBOM = '\ufeff' + csvContent;
    
    // Criar nome do arquivo
    const fileName = `turma_${classData.name.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
    
    // Definir caminho do arquivo
    const fileUri = FileSystem.documentDirectory + fileName;
    
    // Escrever arquivo
    await FileSystem.writeAsStringAsync(fileUri, csvWithBOM, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    
    // Compartilhar arquivo
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri, {
        mimeType: 'text/csv',
        dialogTitle: `Exportar dados da turma ${classData.name}`,
        UTI: 'public.comma-separated-values-text'
      });
    } else {
      Alert.alert(
        'Arquivo Criado!', 
        `Os dados da turma foram salvos em:\n${fileUri}`,
        [{ text: 'OK' }]
      );
    }
    
    // Mostrar mensagem de sucesso
    Alert.alert(
      'Exportação Concluída! ✅', 
      `Dados de ${classData.students.length} aluno(s) da turma "${classData.name}" foram exportados com sucesso!`
    );
    
  } catch (error) {
    console.error('Erro ao exportar CSV:', error);
    Alert.alert(
      'Erro na Exportação', 
      'Não foi possível exportar os dados. Tente novamente.',
      [{ text: 'OK' }]
    );
  }
}

// Função para exportar dados de um único aluno
export async function exportStudentToCSV(student: StudentData, className?: string): Promise<void> {
  const mockClass: ClassData = {
    id: 'temp',
    name: className || 'Aluno_Individual',
    createdAt: new Date(),
    students: [student]
  };
  
  await exportClassToCSV(mockClass);
}