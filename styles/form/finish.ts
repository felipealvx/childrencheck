import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  congratulations: {
    padding: 10,
    alignItems: 'center',
  },
  congratulationsUser: {
    fontSize: 28,
    color: Colors.primary,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.text,
  },
  actionsContainer: {
    marginBottom: 24,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 12,
  },
  classButton: {
    backgroundColor: Colors.primary,
  },
  newFormButton: {
    backgroundColor: '#6A5ACD', // Roxo
  },
  feedbackButton: {
    backgroundColor: '#61b66fff',
  },
  actionButtonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.text,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    flex: 2,
    textAlign: 'right',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 10,
  },
  noteText: {
    color: Colors.danger
  },
  modalContent: {
    position: 'relative',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 40,
    borderRadius: 8,
    width: '90%',
    minHeight: '40%',
    maxHeight: '60%',
    borderBottomWidth: 30,
    borderColor: "white",
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  noClassesContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  noClassesText: {
    fontSize: 12,
    color: '#9798a1ff'    
  },
  noClassesSubtext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goToClassesButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 4,
  },
  goToClassesButtonText: {
    color: 'white'
  },
  modalCloseButtonContainer: {
    position: 'absolute',
    right: 0,
    top: -10,
  },
  modalCloseButton: {
    // backgroundColor: Colors.danger,
    marginTop: 10,
    padding: 16,
    borderRadius: 4,
  },
  modalCloseButtonText: {
    textAlign: 'center',
    color: "white",
  },
  classOption: {
    backgroundColor: Colors.primary,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  classOptionName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  classOptionInfo: {
    fontSize: 16,
    color: '#cad4e2ff',
  }
})