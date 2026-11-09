import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { fetchLostItemById } from "../../services/lostService";
import { lostStyles } from "../../styles/lostStyles";
import { LostItem } from "../../types/lost";

export default function LostDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [detail, setDetail] = useState<LostItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setErrorMessage("");

    fetchLostItemById(id)
      .then((data: LostItem) => {
        setDetail(data);
      })
      .catch((error: any) => {
        setErrorMessage(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <View
        style={[
          lostStyles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={{ marginTop: 12, color: "#64748B", fontSize: 13 }}>
          Memuat data dari server...
        </Text>
      </View>
    );
  }

  if (errorMessage || !detail) {
    return (
      <View
        style={[
          lostStyles.container,
          { justifyContent: "center", alignItems: "center", padding: 20 },
        ]}
      >
        <Ionicons
          name="alert-circle-outline"
          size={48}
          color="#EF4444"
          style={{ marginBottom: 12 }}
        />
        <Text
          style={{
            color: "#EF4444",
            marginBottom: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {errorMessage || "Laporan barang hilang tidak ditemukan."}
        </Text>
        <Pressable
          style={[lostStyles.backButton, { width: "100%" }]}
          onPress={() => router.back()}
        >
          <Text style={lostStyles.detailButtonText}>Kembali ke Daftar</Text>
        </Pressable>
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
          <Text style={lostStyles.infoText}>
            Lokasi Terakhir: {detail.location}
          </Text>
        </View>

        <View style={lostStyles.infoRow}>
          <Ionicons name="calendar-outline" size={16} color="#64748B" />
          <Text style={lostStyles.infoText}>Tanggal Lapor: {detail.date}</Text>
        </View>

        <View style={lostStyles.infoRow}>
          <Ionicons name="call-outline" size={16} color="#64748B" />
          <Text style={lostStyles.infoText}>
            Kontak Pelapor: {detail.contact}
          </Text>
        </View>
      </View>

      <Pressable style={lostStyles.backButton} onPress={() => router.back()}>
        <Text style={lostStyles.detailButtonText}>Kembali ke Daftar</Text>
      </Pressable>
    </View>
  );
}
