/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51HKgkXDl1EedCrNzLMfZKGhBqmpeiyltWrwQXRJVAi8ydiJ1IsUgcCsBsB3AP72yqwBT6VgBhyoT9uX7a9QTgUzu00qcry7HCx'
);

export const bookTour = async tourId => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
