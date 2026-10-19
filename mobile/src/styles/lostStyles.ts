import { StyleSheet } from 'react-native';

export const lostStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  titleHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  itemDesc: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#64748B',
  },
  detailButton: {
    backgroundColor: '#2563EB', // Warna biru untuk Lost
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  detailButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  backButton: {
    backgroundColor: '#64748B',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
});