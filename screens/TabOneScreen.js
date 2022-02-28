import { StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';

import { Text, View } from '../components/Themed';
import { getRecipes } from '../api/recipes';
import Card from './components/Card';
import RECIPES from '../constants/Recipes';

export default function TabOneScreen({navigation}) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));
  }, []);
  // console.log(recipes);

  return (
    <View style={styles.container}>
      {/*<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>*/}
      {/*  {recipes.slice(0, 10).map((recipe, index) => (*/}
      {/*    <View style={styles.recipeContainer} key={recipe.id + index}>*/}
      {/*      <Card title={recipe.url} description={recipe.ingredients}/>*/}
      {/*      /!*<Text style={styles.title}>*!/*/}
      {/*      /!*  {recipe.url}*!/*/}
      {/*      /!*</Text>*!/*/}
      {/*      /!*<Text style={styles.subTitle}>*!/*/}
      {/*      /!*  {recipe.ingredients}*!/*/}
      {/*      /!*</Text>*!/*/}
      {/*      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*    </View>*/}
      {/*  ))}*/}
      {/*</ScrollView>*/}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {RECIPES.map((recipe, index) => (
          <View style={styles.recipeContainer} key={recipe.id + index}>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('Details', {recipe})
              }}
            >
              <Card
                title={recipe.title}
                image={recipe.img_url}
                description={recipe.ingredients[0].name}
              />
            </TouchableHighlight>
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
    padding: 12,
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
