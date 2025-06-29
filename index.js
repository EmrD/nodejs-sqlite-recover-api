function syncRecover() {
  fetch("http://localhost:3000/run/sync")
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}

setInterval(syncRecover, 1 * 60 * 1000);