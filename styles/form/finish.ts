import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  congratulations: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  congratulationsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
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
    marginBottom: 24,
    textAlign: 'center',
    color: Colors.text,
    lineHeight: 24,
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
  excelButton: {
    backgroundColor: '#2E8B57', // Verde
  },
  newFormButton: {
    backgroundColor: '#6A5ACD', // Roxo
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
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    width: '90%'
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
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
  },
  modalCloseButton: {
    marginTop: 10,
    padding: 5,
    borderRadius: 4,
  },
  modalCloseButtonText: {
    textAlign: 'center',

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
    color: Colors.deepBlue,
  }
})