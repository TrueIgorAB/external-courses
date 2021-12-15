function fetch(url, method, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.onload = function onload() {
      return resolve(new Response(xhr.response));
    };

    xhr.onerror = function onerror() {
      return reject(new Error('Error'));
    };

    xhr.send(data);
  });
}

module.exports = fetch;
