import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const names = [
  { name: "SABAN", nim: "10584111022" },
  { name: "RADIN", nim: "105841107722" },
  { name: "YANI", nim: "105841107922" },
  { name: "ANNAS", nim: "105841109022" },
  { name: "LEHA", nim: "105841109222" },
  { name: "DINDA", nim: "105841109322" },
  { name: "FAREL", nim: "105841109422" },
  { name: "FAUZAN", nim: "105841109622" },
  { name: "FADHIL", nim: "105841109722" },
  { name: "DAYANG", nim: "105841109822" },
];

const sortedNames = [...names].sort((a, b) => a.nim.localeCompare(b.nim));

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontFamily: "Lato-Bold",
  },
  subTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    marginTop: 20,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 17,
    marginVertical: 3,
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 30,
    gap: 30,
  },
});

export default function Home() {
  const lowerNim = sortedNames.filter((item) => parseInt(item.nim) < 105841109000);
  const higherNim = sortedNames.filter((item) => parseInt(item.nim) >= 105841109000);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Nama Berdasarkan Stambuk</Text>

      <Text style={styles.subTitle}>NIM Rendah</Text>
      <FlatList
        data={lowerNim}
        keyExtractor={(item) => item.nim}
        renderItem={({ item, index }) => (
          <Text style={[styles.itemText, { fontFamily: fonts[index % fonts.length] }]}>
            {item.name} - {item.nim}
          </Text>
        )}
      />

      <Text style={styles.subTitle}>NIM Tinggi</Text>
      <FlatList
        data={higherNim}
        keyExtractor={(item) => item.nim}
        renderItem={({ item, index }) => (
          <Text
            style={[
              styles.itemText,
              { fontFamily: fonts[(index + lowerNim.length) % fonts.length] },
            ]}
          >
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
