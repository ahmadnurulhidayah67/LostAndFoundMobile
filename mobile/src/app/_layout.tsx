import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#2563EB' }, headerTintColor: '#FFFFFF' }}>
      <Stack.Screen name="lost/index" options={{ title: 'Daftar Barang Hilang' }} />
      <Stack.Screen name="lost/[id]" options={{ title: 'Detail Laporan Kehilangan' }} />
    </Stack>
  );
}