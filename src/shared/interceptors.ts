// Desc: Axios interceptors are a way to run some code before or after a request is made or a response is received.
// This is useful for handling errors, adding headers, and other common tasks.
// In this snippet, we create an Axios instance with a base URL and an interceptor to handle errors. We then export the instance to be used in other parts of the application.
// This is a good practice to avoid repeating the same configuration in multiple places.

import axios from "axios";
import { showError } from "./utils";

const api = axios.create({
  baseURL: "/api/api.php",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let userMessage = "An unexpected error occurred. Please try again later.";

    if (error.response) {
      // Handle HTTP errors
      switch (error.response.status) {
        case 404:
          userMessage = "Requested resource not found.";
          break;
        case 500:
          userMessage = "Server error. Please try again later.";
          break;
        default:
          userMessage = `Error occurred: ${error.response.status} - ${error.response.statusText}`;
          break;
      }
    } else if (error.request) {
      userMessage = "Network error. Please check your connection.";
    }
    console.error(error);
    showError(userMessage);
    return Promise.reject(error);
  }
);

export default api;
