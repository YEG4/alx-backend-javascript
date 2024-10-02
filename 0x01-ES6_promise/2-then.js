export default function handleResponseFromAPI(promise) {
  promise
    .then(() => new Promise({ status: 200, body: 'success' }))
    .catch(() => new Error({}))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
