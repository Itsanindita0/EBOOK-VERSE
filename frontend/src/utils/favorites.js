// Favorites utility functions using localStorage

const FAVORITES_KEY = 'bookLibraryFavorites';

export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const addToFavorites = (bookId) => {
  try {
    const favorites = getFavorites();
    if (!favorites.includes(bookId)) {
      favorites.push(bookId);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};

export const removeFromFavorites = (bookId) => {
  try {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(id => id !== bookId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error removing from favorites:', error);
  }
};

export const isFavorite = (bookId) => {
  const favorites = getFavorites();
  return favorites.includes(bookId);
};

export const toggleFavorite = (bookId) => {
  if (isFavorite(bookId)) {
    removeFromFavorites(bookId);
    return false;
  } else {
    addToFavorites(bookId);
    return true;
  }
};

