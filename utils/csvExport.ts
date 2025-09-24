import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';
import { StudentData, ClassData } from '@/contexts/ClassesContext';

// Mapeamento dos valores numéricos para textos descritivos
const valueMapping = {
  // Sexo
  sexo: { 0: "Não respondido", 1: "Masculino", 2: "Feminino" },
  
  // Prática de exercício
  pratica: { 0: "Não respondido", 1: "Sim", 2: "Não" },
  
  // Dias de prática
  diasPratica: { 
    0: "Não respondido", 
    1: "1-2 dias", 
    2: "3-4 dias", 
    3: "5+ dias", 
    4: "Não sei responder" 
  },
  
  // Competitivo
  competitivo: { 0: "Não respondido", 1: "Sim", 2: "Não" },
  
  // Horas TV
  horasTv: { 
    0: "Não respondido", 
    1: "0-1 hora", 
    2: "2-3 horas", 
    3: "4-5 horas", 
    4: "6-7 horas", 
    5: "8+ horas", 
    6: "Não sei responder" 
  },
  
  // Horas PC
  horasPc: { 
    0: "Não respondido", 
    1: "0-1 hora", 
    2: "2-3 horas", 
    3: "4-5 horas", 
    4: "6+ horas", 
    5: "Não sei responder" 
  },
  
  // Ler na cama
  ler: { 0: "Não respondido", 1: "Sim", 2: "Não", 3: "Às vezes" },
  
  // Posição para dormir
  posicaoDormir: { 
    0: "Não respondido", 
    1: "De lado", 
    2: "De bruços", 
    3: "De costas", 
    4: "Não sei responder" 
  },
  
  // Horas de sono
  horasDorme: { 
    0: "Não respondido", 
    1: "0-6 horas", 
    2: "7 horas", 
    3: "8-9 horas", 
    4: "10+ horas", 
    5: "Não sei responder" 
  },
  
  // Posturas (1-6 representam diferentes posições)
  sentarEscreverMesa: { 
    0: "Não respondido", 
    1: "Posição 1", 
    2: "Posição 2", 
    3: "Posição 3", 
    4: "Posição 4", 
    5: "Posição 5", 
    6: "Outro" 
  },
  
  sentarCadeiraConversar: { 
    0: "Não respondido", 
    1: "Posição 1", 
    2: "Posição 2", 
    3: "Posição 3", 
    4: "Posição 4", 
    5: "Posição 5", 
    6: "Outro" 
  },
  
  sentarComputador: { 
    0: "Não respondido", 
    1: "Posição 1", 
    2: "Posição 2", 
    3: "Posição 3", 
    4: "Posição 4", 
    5: "Posição 5", 
    6: "Outro" 
  },
  
  // Pegar objeto do chão
  pegarObjeto: { 
    0: "Não respondido", 
    1: "Posição 1", 
    2: "Posição 2", 
    3: "Posição 3", 
    4: "Posição 4", 
    5: "Outro" 
  },
  
  // Tipo de bolsa
  bolsas: { 
    0: "Não respondido", 
    1: "Mochila 1", 
    2: "Mochila 2", 
    3: "Mochila 3", 
    4: "Mochila 4", 
    5: "Mochila 5", 
    6: "Outro" 
  },
  
  // Como levar mochila
  levarMochila: { 
    0: "Não respondido", 
    1: "Posição 1", 
    2: "Posição 2", 
    3: "Posição 3", 
    4: "Posição 4", 
    5: "Posição 4", 
    6: "Outro" 
  },
  
  // Escolaridade responsáveis
  responsavelFemEstudo: { 
    0: "Não respondido", 
    1: "Não frequentou", 
    2: "Fundamental", 
    3: "Médio", 
    4: "Superior", 
    5: "Não sei", 
    6: "Não tenho" 
  },
  
  responsavelMascEstudo: { 
    0: "Não respondido", 
    1: "Não frequentou", 
    2: "Fundamental", 
    3: "Médio", 
    4: "Superior", 
    5: "Não sei", 
    6: "Não tenho" 
  },
  
  // Responsável com dores
  responsavelDores: { 0: "Não respondido", 1: "Sim", 2: "Não", 3: "Não sei" },
  
  // Dor nas costas
  sentiuDor: { 0: "Não respondido", 1: "Sim", 2: "Não", 3: "Não sei" },
  
  // Frequência da dor
  dorFrequente: { 
    0: "Não respondido", 
    1: "Uma vez", 
    2: "Uma vez/mês", 
    3: "Uma vez/semana", 
    4: "2-3x/semana", 
    5: "4+x/semana", 
    6: "Não sei" 
  },
  
  // Dor impede atividades
  dorImpede: { 0: "Não respondido", 1: "Sim", 2: "Não", 3: "Não sei" },
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
  'Nome Completo',
  'Data de Nascimento', 
  'Peso (kg)',
  'Altura (cm)',
  'Responsável',
  'Data de Preenchimento',
  
  // Atividades físicas
  'Pratica Exercício',
  'Qual Exercício',
  'Dias por Semana',
  'É Competitivo',
  
  // Hábitos
  'Horas TV por Dia',
  'Horas PC por Dia', 
  'Lê na Cama',
  'Posição para Dormir',
  'Horas de Sono',
  
  // Identificação
  'Sexo',
  
  // Posturas
  'Sentar para Escrever',
  'Sentar para Conversar',
  'Sentar no Computador',
  'Pegar Objeto do Chão',
  'Tipo de Bolsa',
  'Como Leva Mochila',
  
  // Dados familiares
  'Estudo Responsável Feminino',
  'Estudo Responsável Masculino',
  'Responsável tem Dores',
  'Qual Responsável com Dores',
  
  // Dores nas costas
  'Sente Dor nas Costas',
  'Frequência da Dor',
  'Dor Impede Atividades',
  'Escala de Dor (0-10)'
];


// Função para converter dados do aluno em linha CSV
function studentToCSVRow(student: StudentData): string[] {
  return [
    student.fullName || "Não informado",
    student.age || "Não informado",
    student.weight?.toString() || "0",
    student.height?.toString() || "0", 
    student.parent || "Não informado",
    new Date(student.createdAt).toLocaleDateString('pt-BR'),
    
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