import TokenService from "./token-service";
import config from "../config";

const BooksApiService = {
  getBooks() {
    return fetch(`${config.API_ENDPOINT}/books`, {
      headers: {}
    }).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
  },

  getBook(bookId) {
    return fetch(`${config.API_ENDPOINT}/books/${bookId}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getBookReviews(bookId) {
    return fetch(`${config.API_ENDPOINT}/books/${bookId}/reviews`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  //maybe make it so a user can view all reviews of a given user
  getAllUserReviews() {
    const user_id = TokenService.getUserId();

    return fetch(
      `${config.API_ENDPOINT}/reviews?user_id=${user_id}&sort=date_created`,
      {
        headers: {}
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postReview(book_id, rating, review_text) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        book_id,
        rating,
        review_text
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default BooksApiService;
