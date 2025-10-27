async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();

  return data;
}

const data = fetchData().then((data) => {
  console.log(data);
  const app = document.getElementById("app");

  app.innerHTML = `
  ${data.map((post) => `<p>${post.title}</p>`).join("")}
  `;
});
