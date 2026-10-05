import { Ionicons } from '@expo/vector-icons'; // Dependency Library (Materi 4)
import { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { lostStyles } from '../styles/lostStyles';
import { LostItem } from '../types/lost';

// Initial Data Dummy (Array of Objects)
const INITIAL_LOST_DATA: LostItem[] = [
  {
    id: '1',
    title: 'Kunci Motor Honda',
    description: 'Kunci motor dengan gantungan dompet kecil warna biru.',
    location: 'Gedung Kuliah Bersama (GKB 3)',
    date: '04 Okt 2026',
    contact: '081234567890',
    status: 'Proses Dicari',
  },
  {
    id: '2',
    title: 'KTM atas nama Ahmad',
    description: 'Kartu Tanda Mahasiswa Informatika angkatan 2024.',
    location: 'Perpustakaan Pusat',
    date: '03 Okt 2026',
    contact: '089876543210',
    status: 'Selesai',
  },
];

export default function LostScreen() {
  // State untuk data list barang hilang
  const [lostList, setLostList] = useState<LostItem[]>(INITIAL_LOST_DATA);

  // State Form Input
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [contact, setContact] = useState<string>('');

  // Custom Function untuk Tambah Laporan Hilang
  const handleAddLostItem = () => {
    if (!title || !description || !location || !contact) {
      Alert.alert('Peringatan', 'Harap isi semua kolom laporan!'); // Built-in Function Alert
      return;
    }

    const newItem: LostItem = {
      id: Date.now().toString(),
      title,
      description,
      location,
      date: 'Hari ini',
      contact,
      status: 'Proses Dicari',
    };

    // Immutability update array of objects
    setLostList([newItem, ...lostList]);

    // Reset Form
    setTitle('');
    setDescription('');
    setLocation('');
    setContact('');

    Alert.alert('Berhasil', 'Laporan barang hilang berhasil ditambahkan!');
  };

  // Custom Function Render Item Card untuk FlatList (Materi 5.3.B & 5.4.B)
  const renderItemCard = ({ item }: { item: LostItem }) => {
    // Inline Style kondisional untuk background badge status (Materi 3.3)
    const badgeColor = item.status === 'Proses Dicari' ? '#EF4444' : '#10B981';

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
          <Text style={lostStyles.infoText}>{item.location}</Text>
        </View>

        <View style={lostStyles.infoRow}>
          <Ionicons name="calendar-outline" size={14} color="#64748B" />
          <Text style={lostStyles.infoText}>{item.date}</Text>
        </View>

        <View style={lostStyles.infoRow}>
          <Ionicons name="call-outline" size={14} color="#64748B" />
          <Text style={lostStyles.infoText}>Hubungi: {item.contact}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={lostStyles.container}>
      <Text style={lostStyles.titleHeader}>Lapor & Cari Barang Hilang</Text>

      {/* Form Tambah Barang Hilang */}
      <View style={lostStyles.formCard}>
        <Text style={lostStyles.formTitle}>Buat Laporan Baru</Text>

        <TextInput
          style={lostStyles.input}
          placeholder="Nama Barang Hilang"
          placeholderTextColor="#94A3B8"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={lostStyles.input}
          placeholder="Deskripsi & Ciri-ciri Ciri Barang"
          placeholderTextColor="#94A3B8"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={lostStyles.input}
          placeholder="Lokasi Terakhir Terlihat"
          placeholderTextColor="#94A3B8"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={lostStyles.input}
          placeholder="Nomor Kontak / WhatsApp"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
          value={contact}
          onChangeText={setContact}
        />

        <Pressable style={lostStyles.buttonSubmit} onPress={handleAddLostItem}>
          <Text style={lostStyles.buttonText}>Kirim Laporan</Text>
        </Pressable>
      </View>

      {/* List Barang Hilang menggunakan FlatList (Materi 5.4.B) */}
      <FlatList
        data={lostList}
        renderItem={renderItemCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}