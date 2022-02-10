import { StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import { Text, View } from '../components/Themed';
import { getRecipes } from '../api/recipes';

export default function TabOneScreen() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));
  }, []);
  console.log(recipes);

  return (
    <View style={styles.container}>
      <ScrollView>
        {recipes.slice(0, 10).map((recipe) => (
          <View style={styles.recipeContainer}>
            <Text key={recipe.id} style={styles.title}>
              {recipe.url}
            </Text>
            <Text key={recipe.id} style={styles.subTitle}>
              {recipe.ingredients}
            </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeContainer: {
    padding: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
