import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';
import { StudentData, ClassData } from '@/contexts/ClassesContext';

const valueMapping = {
  // modulo 1
  sexo: { 0: "0", 1: "1", 2: "2", 3: "3" },

  // modulo 2
  posicaoComumCadeira: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
  freqEncosto: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
  apoioEscrevendoComputador: { 0: "0", 1: "1", 2: "2", 3: "3" },
  ajusteCadeiraMesa: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },

  // modulo 3
  freqAnsiedade: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
  reageProva: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4" },
  membrosTensao: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
  estresseGeral: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4" },

  // modulo 4
  dorGeral: { 0: "0", 1: "1", 2: "2" },
  escalaDor: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
  dorDuracao: { 0: "0", 1: "1", 2: "2", 3: "3" },
  dorPioraEstresse: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4" },

  // modulo 5
  diasPraticaAtv: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4" },
  tempoAtvFimSemana: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4" },
  horasSentado: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4" },

  // modulo 6
  classificaSono: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
  freqAcorda: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
  freqAnsiedadeSono: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
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
  'sexo',
  // 'Data de Preenchimento',
  
  // modulo 2
  'posicaoComumCadeira',
  'freqEncosto',
  'apoioEscrevendoComputador',
  'ajusteCadeiraMesa',
  
  // modulo 3
  'freqAnsiedade',
  'reageProva', 
  'membrosTensao',
  'estresseGeral',
  
  // modulo 4
  'dorGeral',
  'escalaDor',
  'dorDuracao',
  'dorPioraEstresse',
  
  // modulo 5
  'diasPraticaAtv',
  'tempoAtvFimSemana',
  'horasSentado',
  
  // modulo 6
  'classificaSono',
  'freqAcorda',
  'freqAnsiedadeSono',
];


// Função para converter dados do aluno em linha CSV
function studentToCSVRow(student: StudentData): string[] {
  return [
    student.fullName || "Não informado",
    student.age || "Não informado",
    student.weight?.toString() || "0",
    student.height?.toString() || "0", 
    student.parent || "Não informado",
    mapValueToText('sexo', student.sexo),
    // new Date(student.createdAt).toLocaleDateString('pt-BR'),
    
    // modulo 2
    mapValueToText('posicaoComumCadeira', student.posicaoComumCadeira),
    mapValueToText('freqEncosto', student.freqEncosto),
    mapValueToText('apoioEscrevendoComputador', student.apoioEscrevendoComputador),
    mapValueToText('ajusteCadeiraMesa', student.ajusteCadeiraMesa),

    
    // modulo 3
    mapValueToText('freqAnsiedade', student.freqAnsiedade),
    mapValueToText('reageProva', student.reageProva),
    mapValueToText('membrosTensao', student.membrosTensao),
    mapValueToText('estresseGeral', student.estresseGeral),
    
    // modulo 4
    mapValueToText('dorGeral', student.dorGeral),
    mapValueToText('escalaDor', student.escalaDor),
    mapValueToText('dorDuracao', student.dorDuracao),
    mapValueToText('dorPioraEstresse', student.dorPioraEstresse),
    
    // modulo 5
    mapValueToText('diasPraticaAtv', student.diasPraticaAtv),
    mapValueToText('tempoAtvFimSemana', student.tempoAtvFimSemana),
    mapValueToText('horasSentado', student.horasSentado),
    
    // modulo 6
    mapValueToText('classificaSono', student.classificaSono),
    mapValueToText('freqAcorda', student.freqAcorda),
    mapValueToText('freqAnsiedadeSono', student.freqAnsiedadeSono),
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