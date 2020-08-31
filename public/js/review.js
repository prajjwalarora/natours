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
    if (err.response.data.message.includes('Duplicate'))
      return showAlert('error', 'You have already added a review!🙂');
    showAlert('error', err.response.data.message);
  }
};
