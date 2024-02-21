// Error handling
function showError(message: string) {
  console.error(message);
}

// Replace http with https
function secureUrl(url: string) {
  return url.replace(/^http:/, "https:");
}

export { showError, secureUrl };
