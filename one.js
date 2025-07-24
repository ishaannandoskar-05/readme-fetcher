let user = document.getElementById("user");
let repo = document.getElementById("repo");
let btn = document.getElementById("fetch");
let container = document.querySelector(".container");
function decodeBase(base64) {
  const binary = atob(base64);
  return decodeURIComponent(escape(binary));
}
async function fetchData() {
  try {
    const response = await fetch(URI);
    const data = await response.json();
    let content = decodeBase(data.content);
    document.getElementById("content").innerHTML = `<pre>${content}</pre>`;
  } catch (error) {
    console.error("Error fetching README:", error);
  }
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  URI = `https://api.github.com/repos/${user.value}/${repo.value}/contents/README.md`;

  fetchData();
  container.style.display = "block";
});
