import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LostItem } from '../../types/lost';
import { lostStyles } from '../../styles/lostStyles';

const DUMMY_LOST: LostItem[] = [
  {
    id: '201',
    title: 'Kunci Motor Honda',
    description: 'Hilang sekitar area Kantin Barat / GKB 3. Ada gantungannya.',
    location: 'GKB 3 UMM',
    date: '19 Okt 2026',
    contact: '081234567890',
    status: 'Proses Dicari',
  },
  {
    id: '202',
    title: 'KTM atas nama Ahmad',
    description: 'Kartu Tanda Mahasiswa Informatika angkatan 2024 terlepas dari dompet.',
    location: 'Perpustakaan Pusat',
    date: '18 Okt 2026',
    contact: '089876543210',
    status: 'Selesai',
  },
];

export default function LostListScreen() {
  const router = useRouter(); // Hook Navigasi Expo Router

  // 1. Menerapkan useState (Kriteria Modul 2)
  const [items, setItems] = useState<LostItem[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  // 2. Menerapkan useEffect (Kriteria Modul 2)
  useEffect(() => {
    // Inisialisasi data & kalkulasi jumlah barang hilang
    setItems(DUMMY_LOST);
    setTotalItems(DUMMY_LOST.length);
  }, []);

  const renderCard = ({ item }: { item: LostItem }) => {
    const isSearching = item.status === 'Proses Dicari';
    const badgeColor = isSearching ? '#EF4444' : '#10B981';

    return (
      <View style={lostStyles.card}>
        <View style={lostStyles.cardHeader}>
          <Text style={lostStyles.itemTitle}>{item.title}</Text>
          <View style={[lostStyles.badge, { backgroundColor: badgeColor }]}>
            <Text style={lostStyles.badgeText}>{item.status}</Text>
          </View>
        </View>

        <Text style={lostStyles.itemDesc}>{item.description}</Text>

        <View style={lostStyles.infoRow}>
          <Ionicons name="location-outline" size={14} color="#64748B" />
          <Text style={lostStyles.infoText}>Lokasi Hilang: {item.location}</Text>
        </View>

        {/* 3. Menerapkan router.push() untuk Navigasi Dynamic Route (Kriteria Modul 2) */}
        <Pressable
          style={lostStyles.detailButton}
          onPress={() => router.push(`/lost/${item.id}`)}
        >
          <Text style={lostStyles.detailButtonText}>Lihat Detail Kehilangan</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={lostStyles.container}>
      <Text style={lostStyles.titleHeader}>Barang Hilang</Text>
      <Text style={lostStyles.subtitle}>Total Laporan Kehilangan: {totalItems} Laporan</Text>

      <FlatList
        data={items}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}