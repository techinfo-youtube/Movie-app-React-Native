import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.heading}>Welcome To Movie App</Text>
      <View style={styles.movieBtn}>
        <Button
          color={"orange"}
          title="Explore Movies"
          onPress={() => navigation.navigate("Movie")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
  },
  movieBtn: {
    width: "75%",
    marginTop: 15,
  },
});

export default Home;
