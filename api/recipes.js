import axios from 'axios';

const RECIPES_URL = 'http://34.79.182.102/recipes/';

export const getRecipes = ({ category, notCategory, isSnack, ingredients, mtype } = {}) => {
  return axios
    .get(RECIPES_URL, {
      params: { category, not_category: notCategory, is_snack: isSnack, ingredients, mtype },
    })
    .then((response) => response.data);
};
