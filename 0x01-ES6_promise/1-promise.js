export default function getFullResponseFromAPI(success) {
  return new Promise((response, reject) => {
    if (success) {
      response({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
