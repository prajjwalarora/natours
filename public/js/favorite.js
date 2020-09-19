/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const addFavorite = async (tourId, toggleBtn) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `/api/v1/users/favorite/${tourId}`,
      data: {}
    });
    if (res.data.status === 'success') {
      toggleBtn.toggle('favorite-on');
      showAlert('success', 'Tour added to favorite');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const removeFavorite = async (tourId, toggleBtn) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `/api/v1/users/favorite/${tourId}`,
      data: {}
    });

    if (!res.data) {
      showAlert('success', 'Tour removed from favorite');
      toggleBtn.toggle('favorite-on');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
