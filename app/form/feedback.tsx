import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useQuestForm } from "@/hooks/useQuestForm";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type FeedbackItem = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
};

export default function Feedback() {
  const { questFormData } = useQuestForm();

  // Função para analisar os dados e gerar feedbacks
  const generateFeedback = (): FeedbackItem[] => {
    const feedbacks: FeedbackItem[] = [];

    // --------------------- MODULO 02

    if ([2, 3, 4, 5].includes(questFormData.posicaoComumCadeira)) {
      feedbacks.push({
        icon: "warning",
        color: Colors.medium,
        title: "Atenção à Sua Postura na Cadeira",
        description:
          "Sua forma de sentar pode estar forçando sua coluna. Ajuste a posição para evitar dores futuras.",
        priority: "medium",
      });
    }

    if ([3, 4, 5].includes(questFormData.freqEncosto)) {
      feedbacks.push({
        icon: "body",
        color: Colors.blue,
        title: "Encoste as Costas no Encosto",
        description:
          "Você quase não usa o encosto da cadeira, o que aumenta a chance de dores na lombar.",
        priority: "low",
      });
    }

    if ([2, 3].includes(questFormData.apoioEscrevendoComputador)) {
      feedbacks.push({
        icon: "book",
        color: Colors.blue,
        title: "Apoie Melhor os Braços ao Estudar",
        description:
          "A falta de apoio adequado aumenta a tensão nos ombros e no pescoço.",
        priority: "low",
      });
    }

    if ([3, 4, 5].includes(questFormData.ajusteCadeiraMesa)) {
      feedbacks.push({
        icon: "brush",
        color: Colors.blue,
        title: "Ajuste o Espaço Antes de Sentar",
        description:
          "Não ajustar cadeira ou mesa pode causar desconfortos durante a aula.",
        priority: "low",
      });
    }

    // --------------------- MODULO 03

    if ([3, 4, 5].includes(questFormData.freqAnsiedade)) {
      feedbacks.push({
        icon: "heart-sharp",
        color: Colors.hight,
        title: "Atenção à Ansiedade",
        description:
          "Sinais frequentes de ansiedade podem aumentar a tensão muscular e afetar sua postura.",
        priority: "high",
      });
    }

    if ([3, 4].includes(questFormData.reageProva)) {
      feedbacks.push({
        icon: "leaf",
        color: Colors.hight,
        title: "Reações Intensificadas ao Estresse",
        description:
          "Seu corpo reage forte ao estresse, o que pode aumentar dores e tensão muscular.",
        priority: "high",
      });
    }

    if ([1, 2].includes(questFormData.membrosTensao)) {
      feedbacks.push({
        icon: "pulse",
        color: Colors.hight,
        title: "Tensão Muscular Elevada",
        description:
          "Você apresenta tensão frequente nos ombros ou mandíbula, sinal de estresse alto.",
        priority: "high",
      });
    }

    if ([3, 4].includes(questFormData.estresseGeral)) {
      feedbacks.push({
        icon: "sad",
        color: Colors.hight,
        title: "Estresse Elevado",
        description:
          "O estresse alto pode piorar dores e afetar sua postura no dia a dia.",
        priority: "high",
      });
    }

    // ---------------------- MODULO 04

    if (questFormData.dorGeral === 1) {
      feedbacks.push({
        icon: "man",
        color: Colors.hight,
        title: "Você Sentiu Dor Recentemente",
        description:
          "A presença de dor indica que seus hábitos podem estar sobrecarregando seu corpo, procure um médico.",
        priority: "high",
      });
    }

    if ([4, 5].includes(questFormData.escalaDor)) {
      feedbacks.push({
        icon: "man",
        color: Colors.hight,
        title: "Dor Intensa",
        description:
          "Sua dor foi classificada como forte. Isso exige atenção e ajustes nos hábitos diários, procure um médico.",
        priority: "high",
      });
    }

    if (questFormData.dorDuracao === 1) {
      feedbacks.push({
        icon: "man",
        color: Colors.hight,
        title: "Dor Persistente",
        description:
          "A dor prolongada indica que ela pode ter se tornado crônica, exigindo cuidados, procure um médico",
        priority: "high",
      });
    }

    if (questFormData.dorPioraEstresse === 1) {
      feedbacks.push({
        icon: "man",
        color: Colors.hight,
        title: "Dor Relacionada ao Estresse",
        description:
          "Seu corpo sente mais dor quando você está estressado, o que piora a tensão muscular.",
        priority: "high",
      });
    }

    // ----------------------- MODULO 05

    if ([1, 2].includes(questFormData.diasPraticaAtv)) {
      feedbacks.push({
        icon: "basketball",
        color: Colors.medium,
        title: "Pouca Atividade Física",
        description:
          "Você se movimenta pouco na semana, busque praticar algum exercício ou esporte.",
        priority: "medium",
      });
    }

    if ([1, 4].includes(questFormData.tempoAtvFimSemana)) {
      feedbacks.push({
        icon: "time",
        color: Colors.blue,
        title: "Pouco Movimento no Fim de Semana",
        description:
          "A falta de atividade física pode prejudicar seu corpo, busque praticar algum esporte ou atividade física",
        priority: "low",
      });
    }

    if ([3, 4].includes(questFormData.horasSentado)) {
      feedbacks.push({
        icon: "laptop-outline",
        color: Colors.medium,
        title: "Tempo Excessivo Sentado",
        description:
          "Muitas horas sentado aumentam a sobrecarga na coluna, busque se movimentar mais e fazer pausas",
        priority: "medium",
      });
    }

    // --------------------- MODULO 06

    if ([3, 4, 5].includes(questFormData.classificaSono)) {
      feedbacks.push({
        icon: "cloudy-night",
        color: Colors.hight,
        title: "Sono de Baixa Qualidade",
        description:
          "Dormir mal aumenta o estresse e reduz a recuperação do corpo.",
        priority: "high",
      });
    }

    if ([3, 4, 5].includes(questFormData.freqAcorda)) {
      feedbacks.push({
        icon: "bed",
        color: Colors.medium,
        title: "Cansaço ao Acordar",
        description:
          "Acordar cansado ou com dor é um sinal de qualidade de sono ruim, tente dormir mais cedo e ficar longe de telas antes de deitar-se.",
        priority: "medium",
      });
    }

    if ([3, 4, 5].includes(questFormData.freqAnsiedadeSono)) {
      feedbacks.push({
        icon: "alarm",
        color: Colors.medium,
        title: "Ansiedade Prejudicando o Sono",
        description:
          "A ansiedade está interferindo no seu sono, o que piora ainda mais o estresse.",
        priority: "medium",
      });
    }

    // Se não houver problemas graves
    if (
      feedbacks.length === 0 ||
      !feedbacks.some((f) => f.priority === "high")
    ) {
      feedbacks.unshift({
        icon: "checkmark-circle",
        color: Colors.low,
        title: "Parabéns! Boa Saúde Postural",
        description:
          "Você demonstra bons hábitos posturais. Continue assim e mantenha as práticas saudáveis!",
        priority: "low",
      });
    }

    // Ordenar por prioridade
    return feedbacks.sort((a, b) => {
      const priorities = { high: 0, medium: 1, low: 2 };
      return priorities[a.priority] - priorities[b.priority];
    });
  };

  const feedbacks = generateFeedback();
  const hasHighPriority = feedbacks.some((f) => f.priority === "high");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seu Feedback Postural</Text>
        <Text style={styles.subtitle}>{questFormData.fullName}</Text>
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
              feedback.priority === "high" && styles.highPriority,
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: feedback.color + "20" },
              ]}
            >
              <Ionicons name={feedback.icon} size={32} color={feedback.color} />
            </View>

            <View style={styles.feedbackContent}>
              <Text style={styles.feedbackTitle}>{feedback.title}</Text>
              <Text style={styles.feedbackDescription}>
                {feedback.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.tipsBox}>
        <Text style={styles.tipsTitle}>
          💡 Dicas Gerais para Saúde Postural
        </Text>
        <Text style={styles.tipItem}>
          Pratique exercícios físicos regularmente para manter uma rotina
          saudável e fortalecer o seu corpo.
        </Text>
        <Text style={styles.tipItem}>
          Ajuste sempre a mesa ou cadeira para você ficar numa posição
          confortável.
        </Text>
        <Text style={styles.tipItem}>
          Não carregue peso excessivo na sua mochila.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 24,
    color: Colors.blue,
    fontWeight: '300',
    marginTop: 4,
  },
  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFEBEE",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    gap: 10,
  },
  alertText: {
    flex: 1,
    color: Colors.danger,
    fontWeight: "600",
  },
  feedbackList: {
    gap: 12,
    marginBottom: 20,
  },
  feedbackCard: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
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
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  feedbackContent: {
    flex: 1,
    justifyContent: "center",
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  feedbackDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  tipsBox: {
    backgroundColor: "#ffffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#dededeff"
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 12,
  },
  tipItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
    lineHeight: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
