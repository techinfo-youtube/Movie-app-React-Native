import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";

const Movie = () => {
  const [searchText, setSearchText] = useState("");
  const [moviesList, setMovieList] = useState();
  //input chnage func
  const handleInputChange = (inputText) => {
    setSearchText(inputText);
  };
  //handle btn click
  const handleSearchBtn = async () => {
    console.log(searchText);
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=1310bb05&s=${searchText}`
    );
    let moviesData = await res.json();
    console.log(moviesData.Search);
    setMovieList(moviesData.Search);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="find a movie here"
        value={searchText}
        onChangeText={handleInputChange}
      />
      <View style={styles.searchBtn}>
        <Button title="Search Movie" onPress={handleSearchBtn} />
      </View>
      <View>
        {moviesList && (
          <Text
            style={{ marginVertical: 20, textAlign: "center", color: "green" }}
          >
            {moviesList?.length} Movies found
          </Text>
        )}
        <FlatList
          data={moviesList}
          renderItem={({ item }) => {
            return (
              <View style={styles.movieContainer}>
                <Image
                  style={{ height: 300, width: 300 }}
                  source={{ uri: item.Poster }}
                />
                <Text style={styles.movieTitle}>{item.Title}</Text>
                <Text> YEAR : {item.Year}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: "75%",
    height: "100",
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchBtn: {
    width: "50%",
    marginTop: 20,
  },
  movieContainer: {
    marginHorizontal: 5,
    marginBottom: 30,
  },
  movieTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Movie;
