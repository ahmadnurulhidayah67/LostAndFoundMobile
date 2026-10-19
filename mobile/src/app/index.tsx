import { Redirect } from "expo-router";

export default function Index() {
  // Mengarahkan pengguna secara otomatis dari / ke /lost
  return <Redirect href="/lost" />;
}
