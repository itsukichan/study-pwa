async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  return data;
}

const data = fetchData().then((data) => {
  const app = document.getElementById("app");
  app.innerHTML = `
  ${data
    .map(
      (post) => `
      <div class="post">
        <p>${post.id} : ${post.title}</p>
      </div>`
    )
    .join("")}
  `;
});

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
