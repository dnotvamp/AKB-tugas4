import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const names = [
  { name: "RADIN", nim: "105841107722" },
  { name: "YANI", nim: "105841107922" },
  { name: "ANNAS", nim: "105841109022" },
  { name: "LEHA", nim: "105841109222" },
  { name: "DINDA", nim: "105841109322" },
  { name: "FAREL", nim: "105841109422" },
  { name: "FAUZAN", nim: "105841109622" },
  { name: "FADHIL", nim: "105841109722" },
  { name: "DAYANG", nim: "105841109822" },
  { name: "SABAN", nim: "10584111022" },
];

const fonts = [
  "Lato-Regular",
  "Lato-Bold",
  "Roboto-Regular",
  "Roboto-Bold",
  "Merriweather-Regular",
  "Inter-Variable",
  "Raleway-Variable",
  "Nunito-Variable",
  "Mulish-Variable",
  "Manrope-Variable",
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Nama Berdasarkan Stambuk</Text>

      <FlatList
        data={names}
        keyExtractor={(item) => item.nim}
        renderItem={({ item, index }) => (
          <Text style={[styles.itemText, { fontFamily: fonts[index] }]}>
            {item.name} - {item.nim}
          </Text>
        )}
      />

      <View style={styles.iconRow}>
        <AntDesign name="sound" size={32} color="red" />
        <AntDesign name="clockcircleo" size={32} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Lato-Bold",
  },
  itemText: {
    fontSize: 18,
    marginVertical: 4,
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 40,
    gap: 30,
  },
});
