import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useQuestForm } from "@/hooks/useQuestForm";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

type FeedbackItem = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
};

export default function Feedback() {
  const { questFormData } = useQuestForm();

  // Função para analisar os dados e gerar feedbacks
  const generateFeedback = (): FeedbackItem[] => {
    const feedbacks: FeedbackItem[] = [];

    // Análise de dor nas costas
    if (questFormData.sentiuDor === 1) {
      if (questFormData.escalaDor >= 7) {
        feedbacks.push({
          icon: "warning",
          color: Colors.danger,
          title: "Dor Intensa Detectada",
          description: "Você relatou dor intensa nas costas. Recomendamos consultar um profissional de saúde o quanto antes.",
          priority: 'high'
        });
      } else if (questFormData.escalaDor >= 4) {
        feedbacks.push({
          icon: "alert-circle",
          color: "#FF9800",
          title: "Atenção à Dor nas Costas",
          description: "Você sente dor moderada. Procure melhorar sua postura e considere fazer alongamentos diários.",
          priority: 'medium'
        });
      }
    }

    // Análise de postura ao sentar
    if (questFormData.sentarEscreverMesa === 2 || questFormData.sentarEscreverMesa === 5) {
      feedbacks.push({
        icon: "body",
        color: "#FF9800",
        title: "Melhore sua Postura ao Estudar",
        description: "Mantenha as costas retas e apoiadas na cadeira. Use uma mesa com altura adequada.",
        priority: 'high'
      });
    }

    // Análise de horas na TV/PC
    if (questFormData.horasTv >= 4 || questFormData.horasPc >= 4) {
      feedbacks.push({
        icon: "time",
        color: "#FF9800",
        title: "Tempo Excessivo Sentado",
        description: "Você passa muitas horas sentado. Faça pausas a cada 30 minutos para se movimentar e alongar.",
        priority: 'high'
      });
    }

    // Análise de atividade física
    if (questFormData.pratica === 2 || questFormData.diasPratica === 1) {
      feedbacks.push({
        icon: "fitness",
        color: "#2196F3",
        title: "Pratique Mais Atividades Físicas",
        description: "Exercícios regulares fortalecem a musculatura das costas. Tente praticar pelo menos 3x por semana.",
        priority: 'high'
      });
    }

    // Análise de mochila
    if (questFormData.levarMochila === 2 || questFormData.levarMochila === 4) {
      feedbacks.push({
        icon: "bag-handle-sharp",
        color: "#FF9800",
        title: "Modo de Carregar a Mochila",
        description: "Carregue a mochila nas duas alças para distribuir melhor o peso nas costas.",
        priority: 'medium'
      });
    }

    // Análise de sono
    if (questFormData.horasDorme === 1) {
      feedbacks.push({
        icon: "moon",
        color: "#9C27B0",
        title: "Durma Mais Horas",
        description: "Sono adequado é essencial para recuperação muscular. Tente dormir pelo menos 8 horas por noite.",
        priority: 'medium'
      });
    }

    // Análise de posição para dormir
    if (questFormData.posicaoDormir === 2) {
      feedbacks.push({
        icon: "bed",
        color: "#FF9800",
        title: "Posição ao Dormir",
        description: "Dormir de bruços pode sobrecarregar a coluna. Prefira dormir de lado ou de costas.",
        priority: 'medium'
      });
    }

    // Análise de ler na cama
    if (questFormData.ler === 1) {
      feedbacks.push({
        icon: "book",
        color: "#2196F3",
        title: "Estudar na Cama",
        description: "Evite estudar ou ler na cama. Use uma mesa com cadeira adequada para manter boa postura.",
        priority: 'low'
      });
    }

    // Se não houver problemas graves
    if (feedbacks.length === 0 || !feedbacks.some(f => f.priority === 'high')) {
      feedbacks.unshift({
        icon: "checkmark-circle",
        color: "#4CAF50",
        title: "Parabéns! Boa Saúde Postural",
        description: "Você demonstra bons hábitos posturais. Continue assim e mantenha as práticas saudáveis!",
        priority: 'low'
      });
    }

    // Ordenar por prioridade
    return feedbacks.sort((a, b) => {
      const priorities = { high: 0, medium: 1, low: 2 };
      return priorities[a.priority] - priorities[b.priority];
    });
  };

  const feedbacks = generateFeedback();
  const hasHighPriority = feedbacks.some(f => f.priority === 'high');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seu Feedback Postural</Text>
        <Text style={styles.subtitle}>
          {questFormData.fullName}
        </Text>
      </View>

      {hasHighPriority && (
        <View style={styles.alertBox}>
          <Ionicons name="information-circle" size={24} color={Colors.danger} />
          <Text style={styles.alertText}>
            Alguns pontos precisam de atenção imediata
          </Text>
        </View>
      )}

      <View style={styles.feedbackList}>
        {feedbacks.map((feedback, index) => (
          <View 
            key={index} 
            style={[
              styles.feedbackCard,
              feedback.priority === 'high' && styles.highPriority
            ]}
          >
            <View style={[styles.iconContainer, { backgroundColor: feedback.color + '20' }]}>
              <Ionicons name={feedback.icon} size={32} color={feedback.color} />
            </View>
            
            <View style={styles.feedbackContent}>
              <Text style={styles.feedbackTitle}>{feedback.title}</Text>
              <Text style={styles.feedbackDescription}>{feedback.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.tipsBox}>
        <Text style={styles.tipsTitle}>💡 Dicas Gerais para Saúde Postural</Text>
        <Text style={styles.tipItem}>• Mantenha as costas sempre retas ao sentar</Text>
        <Text style={styles.tipItem}>• Faça pausas e alongamentos regulares</Text>
        <Text style={styles.tipItem}>• Ajuste a altura da cadeira e mesa</Text>
        <Text style={styles.tipItem}>• Pratique exercícios para fortalecer as costas</Text>
        <Text style={styles.tipItem}>• Distribua bem o peso ao carregar mochilas</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  alertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    gap: 10,
  },
  alertText: {
    flex: 1,
    color: Colors.danger,
    fontWeight: '600',
  },
  feedbackList: {
    gap: 12,
    marginBottom: 20,
  },
  feedbackCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  highPriority: {
    borderLeftWidth: 4,
    borderLeftColor: Colors.danger,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  feedbackContent: {
    flex: 1,
    justifyContent: 'center',
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  feedbackDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  tipsBox: {
    backgroundColor: '#ffffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
  },
  tipItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
    lineHeight: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});