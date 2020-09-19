/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const submitReview = async (rating, review, tourId) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `/api/v1/tours/${tourId}/reviews`,
      data: {
        rating,
        review
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Review added successfully!🎉');
      window.setTimeout(() => {
        location.reload();
      }, 2000);
    }
  } catch (err) {
    if (err.response.data.message.includes('duplicate'))
      return showAlert('error', 'You have already added a review!🙂');
    showAlert('error', err.response.data.message);
  }
};

export const updateReview = async (reviewId, rating, review) => {
  // return console.log(data)
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/reviews/${reviewId}`,
      data: {
        rating, review
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Review updated successfuly!', 2);
      window.setTimeout(() => {
        location.reload();
      }, 2000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const deleteReview = async reviewId => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `/api/v1/reviews/${reviewId}`
    });

    if (!res.data) {
      showAlert('success', 'Review deleted successfully!', 1);
      window.setTimeout(() => location.reload(), 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
