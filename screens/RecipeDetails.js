import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import * as React from 'react';

export default function RecipeDetails({
  route: {
    params: { recipe },
  },
}) {
  const { title, ingredients, img_url } = recipe;
  return (
    <View style={styles.container}>
      <View style={{ width: 450 }}>
        <Image
          style={{ width: '100%', height: 240 }}
          // resizeMode="contain"
          source={{
            uri: img_url,
          }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.ingredientsContainer}>
        <Text style={styles.subTitle}>Ingredients:</Text>

        <View>
          {ingredients.map((ingredient) => (
            <Text>{ingredient.name}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingredientsContainer: {
    paddingHorizontal: 12,
  },
  title: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  separator: {
    marginVertical: 24,
    height: 1,
    width: '80%',
  },
});
