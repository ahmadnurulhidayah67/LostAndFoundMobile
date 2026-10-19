import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LostItem } from '../../types/lost';
import { lostStyles } from '../../styles/lostStyles';

const DUMMY_LOST_DETAIL: Record<string, LostItem> = {
  '201': {
    id: '201',
    title: 'Kunci Motor Honda',
    description: 'Hilang sekitar area Kantin Barat / GKB 3. Ada gantungannya warna biru berbentuk dompet STNK.',
    location: 'GKB 3 UMM',
    date: '19 Okt 2026',
    contact: '081234567890',
    status: 'Proses Dicari',
  },
  '202': {
    id: '202',
    title: 'KTM atas nama Ahmad',
    description: 'Kartu Tanda Mahasiswa Informatika angkatan 2024 terlepas dari dompet. Sudah diserahkan ke satpam perpustakaan.',
    location: 'Perpustakaan Pusat',
    date: '18 Okt 2026',
    contact: '089876543210',
    status: 'Selesai',
  },
};

export default function LostDetailScreen() {
  const router = useRouter();

  // 1. Menerapkan useLocalSearchParams (Dynamic Route Modul 2)
  const { id } = useLocalSearchParams<{ id: string }>();

  // 2. Menerapkan useState & useEffect
  const [detail, setDetail] = useState<LostItem | null>(null);

  useEffect(() => {
    if (id && DUMMY_LOST_DETAIL[id]) {
      setDetail(DUMMY_LOST_DETAIL[id]);
    }
  }, [id]);

  if (!detail) {
    return (
      <View style={lostStyles.container}>
        <Text>Laporan barang hilang tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={lostStyles.container}>
      <Text style={lostStyles.titleHeader}>{detail.title}</Text>

      <View style={[lostStyles.card, { marginTop: 12 }]}>
        <Text style={lostStyles.itemDesc}>{detail.description}</Text>

        <View style={lostStyles.infoRow}>
          <Ionicons name="location-outline" size={16} color="#64748B" />
          <Text style={lostStyles.infoText}>Lokasi Terakhir: {detail.location}</Text>
        </View>

        <View style={lostStyles.infoRow}>
          <Ionicons name="calendar-outline" size={16} color="#64748B" />
          <Text style={lostStyles.infoText}>Tanggal Lapor: {detail.date}</Text>
        </View>

        <View style={lostStyles.infoRow}>
          <Ionicons name="call-outline" size={16} color="#64748B" />
          <Text style={lostStyles.infoText}>Kontak Pelapor: {detail.contact}</Text>
        </View>
      </View>

      {/* 3. Menerapkan router.back() (Kriteria Modul 2) */}
      <Pressable style={lostStyles.backButton} onPress={() => router.back()}>
        <Text style={lostStyles.detailButtonText}>Kembali ke Daftar</Text>
      </Pressable>
    </View>
  );
}