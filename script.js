let fetchBtn = document.getElementById('fetch-btn');
let loading = document.getElementById('loading');
let setup = document.getElementById('setup');
let punchline = document.getElementById('punchline');
let error = document.getElementById('error');

async function fetchJoke() {
  loading.textContent = "loading.."
  error.textContent = ""
  try{const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  console.log(response);
  const data = await response.json();
  setup.textContent = data.setup;
  punchline.textContent = data.punchline;
  } catch (err) {error.textContent = "something went wrong"};
  loading.textContent = ""

}

fetchBtn.addEventListener("click", () => {
  fetchJoke()
})



  
  
