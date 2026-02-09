let fetchBtn = document.getElementById('fetch-btn');
let loading = document.getElementById('loading');
let setup = document.getElementById('setup');
let punchline = document.getElementById('punchline');
let error = document.getElementById('error');

async function fetchJoke() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  console.log(response);
  const data = await response.json();

  setup.textContent = data.setup;
  punchline.textContent = data.punchline;

}

fetchBtn.addEventListener("click", () => {
  loading.textContent = "loading.."
  fetchJoke()
})



  
  
