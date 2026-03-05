const foodNames = [
  { name: "Adobo", clues: ["The most famous Filipino dish", "Has a darkish-brown soup/sabaw", "Can be cooked with chicken or meat"] },
  { name: "Kaldereta", clues: ["A rich tomato-based stew", "Usually made with goat or beef", "Often has liver spread and olives"] },
  { name: "Sinigang", clues: ["Famous for its sour tamarind broth", "Usually has vegetables like kangkong and labanos", "Can be made with pork, shrimp, or fish"] },
  { name: "Lechon", clues: ["A whole roasted pig over charcoal", "The skin is crispy and golden", "A staple at Filipino celebrations and fiestas"] },
  { name: ["Kare-kare", "Kare kare"], clues: ["Has a thick peanut-based sauce", "Usually served with bagoong on the side", "Often cooked with oxtail and banana blossom"] },
  { name: "Pancit Canton", clues: ["A popular Filipino noodle dish", "Cooked with vegetables and meat", "Often served at birthdays for long life"] },
  { name: "Lumpia", clues: ["A Filipino version of spring rolls", "Can be fresh or fried crispy", "Usually filled with vegetables or ground meat"] },
  { name: "Bistek", clues: ["A Filipino-style beef steak", "Cooked with soy sauce and calamansi", "Topped with caramelized onion rings"] },
  { name: "Menudo", clues: ["A tomato-based pork stew", "Has potatoes, carrots, and liver", "A common dish at Filipino parties"] },
  { name: "Pinakbet", clues: ["A vegetable dish from the Ilocos region", "Uses bagoong as its main seasoning", "Has ampalaya, talong, and okra"] },
  { name: "Dinuguan", clues: ["Known as 'chocolate meat' in English", "Made with pork offal cooked in pig blood", "Often paired with puto"] },
  { name: "Nilaga", clues: ["A simple boiled soup dish", "Made with pork or beef and vegetables", "Has potatoes, pechay, and corn"] },
  { name: "Tinola", clues: ["A ginger-based chicken soup", "Has green papaya and chili leaves", "A classic Filipino comfort food"] },
  { name: "Bulalo", clues: ["A bone marrow beef soup", "The broth is rich and fatty", "Famous in Batangas province"] },
  { name: "Laing", clues: ["Made from dried taro leaves", "Cooked in creamy coconut milk", "A spicy dish from the Bicol region"] },
  { name: "Bicol Express", clues: ["A very spicy Bicolano dish", "Made with pork and lots of chili peppers", "Cooked in coconut milk and bagoong"] },
  { name: "Crispy Pata", clues: ["A whole deep-fried pork leg", "The skin is extremely crispy", "Usually served with a vinegar dipping sauce"] },
  { name: "Bagnet", clues: ["An Ilocano version of crispy pork belly", "Double-fried until very crunchy", "Often served with pinakbet"] },
  { name: "Paksiw na Pata", clues: ["Pork leg cooked in vinegar and spices", "Has a sweet and sour taste", "Often has banana blossoms"] },
  { name: "Mechado", clues: ["A tomato-based beef stew", "Inspired by Spanish cuisine", "Has potatoes and bay leaves"] },
  { name: "Afritada", clues: ["A Filipino tomato-based stew", "Made with chicken or pork", "Has bell peppers, potatoes, and carrots"] },
  { name: "Sisig", clues: ["Made from chopped pork cheeks and ears", "Served sizzling on a hot plate", "Originally from Pampanga province"] },
  { name: "Tortang Talong", clues: ["A Filipino eggplant omelette", "The eggplant is charred and flattened first", "Dipped in egg and pan-fried"] },
  { name: "Ginisang Mongo", clues: ["A mung bean soup dish", "Often cooked with ampalaya leaves", "A common everyday Filipino meal"] },
  { name: "Arroz Caldo", clues: ["A Filipino rice porridge or congee", "Flavored with ginger and topped with garlic", "A popular comfort food when sick"] },
  { name: "Goto", clues: ["A rice porridge with beef tripe", "Garnished with green onions and chicharon", "A popular Filipino street food breakfast"] },
  { name: "Sopas", clues: ["A creamy Filipino macaroni soup", "Made with chicken and milk", "A popular rainy day comfort food"] },
  { name: "Lomi", clues: ["A thick egg noodle soup", "Popular in Batangas province", "Has a thick, starchy broth"] },
  { name: "Palabok", clues: ["Rice noodles with a shrimp-based orange sauce", "Topped with chicharon, tinapa, and eggs", "A popular Filipino party noodle dish"] },
  { name: "Batchoy", clues: ["A noodle soup from Iloilo", "Has pork innards and crushed chicharon", "A famous dish from La Paz, Iloilo"] },
  { name: "Pork Barbecue", clues: ["Marinated pork skewers on a stick", "Grilled over hot charcoal", "A very popular Filipino street food"] },
  { name: "Inasal", clues: ["A grilled chicken dish from Bacolod", "Marinated in lemongrass and annatto", "Famous for its garlic rice and chicken oil"] },
  { name: "Fried Bangus", clues: ["Milkfish fried until golden and crispy", "The national fish of the Philippines", "Often paired with spiced vinegar"] },
  { name: "Sinigang na Hipon", clues: ["A sour tamarind soup with shrimp", "Has vegetables like sitaw and eggplant", "A lighter version of sinigang"] },
  { name: "Kinilaw", clues: ["A Filipino raw fish dish", "Cured in vinegar and calamansi", "Similar to ceviche but Filipino style"] },
  { name: "Sinuglaw", clues: ["A combination of kinilaw and sinugba", "Mix of raw fish and grilled pork belly", "A popular dish in Davao and Cebu"] },
  { name: "Lechon Kawali", clues: ["Deep-fried crispy pork belly", "Boiled first then fried in hot oil", "Served with lechon sauce or vinegar"] },
  { name: "Humba", clues: ["A Visayan braised pork dish", "Similar to adobo but sweeter", "Has tausi and pineapple for sweetness"] },
  { name: "Binagoongan", clues: ["Pork cooked with bagoong alamang", "Has a very salty and savory flavor", "Often paired with fried eggplant"] },
  { name: "Pinapaitan", clues: ["A bitter Ilocano goat or beef soup", "Uses bile to create its bitter taste", "A strong acquired taste dish"] },
  { name: "Kilawin", clues: ["A Cordilleran meat dish cured in vinegar", "Can be made with pork or goat", "From the highlands of the Philippines"] },
  { name: "Longganisa", clues: ["A Filipino-style pork sausage", "Can be sweet or garlicky depending on region", "A popular breakfast staple with garlic rice and egg"] },
  { name: "Tocino", clues: ["Sweet cured pork or chicken", "Has a caramelized reddish color when cooked", "Part of the classic Filipino breakfast"] },
  { name: "Tapa", clues: ["Cured and dried beef or pork", "Part of the famous tapsilog breakfast", "Has a savory and slightly sweet flavor"] },
  { name: "Daing na Bangus", clues: ["Butterflied milkfish marinated in vinegar and garlic", "Fried until crispy on both sides", "A popular Filipino breakfast dish"] },
  { name: "Inihaw na Liempo", clues: ["Grilled pork belly over charcoal", "Marinated in soy sauce and calamansi", "A Filipino barbecue favorite"] },
  { name: ["Pochero", "Putchero"], clues: ["A Filipino-Spanish boiled stew", "Has saba bananas and tomato sauce", "Often made with beef or pork"] },
  { name: "Dinakdakan", clues: ["An Ilocano grilled pork face dish", "Mixed with mayonnaise or pig brain", "Similar to sisig but from Ilocos"] },
  { name: "Pancit Malabon", clues: ["A thick rice noodle dish from Malabon", "Has a rich shrimp-based orange sauce", "Topped with seafood like shrimp and squid"] },
];

const total = foodNames.length;
let pool = [], current = null, attempts = 0, done = false, score = 0;

const cluesEl    = document.getElementById('clues');
const inputEl    = document.getElementById('input');
const msgEl      = document.getElementById('message');
const nextBtn    = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const guessBtn   = document.getElementById('guessBtn');
const scoreEl    = document.getElementById('score');
const subEl      = document.getElementById('sub');

function restart() {
  pool  = foodNames.map((_, i) => i);
  score = 0;
  scoreEl.textContent  = 'Score: 0';
  subEl.textContent    = 'Think you know your Filipino food?';
  restartBtn.style.display = 'none';
  next();
}

function next() {
  if (!pool.length) return;
  done     = false;
  attempts = 1;
  inputEl.value    = '';
  inputEl.disabled = false;
  guessBtn.disabled = false;
  nextBtn.style.display = 'none';

  // Hide message
  msgEl.className   = 'game-message';
  msgEl.style.display = 'none';

  const idx = Math.floor(Math.random() * pool.length);
  current   = { food: foodNames[pool[idx]], poolIdx: idx };
  renderClues();
  updateProgress();
  inputEl.focus();
}

function guess() {
  if (done || !inputEl.value.trim()) return;

  const names   = Array.isArray(current.food.name) ? current.food.name : [current.food.name];
  const val     = inputEl.value.trim().toLowerCase();
  const correct = names.some(n => n.toLowerCase() === val);

  if (correct) {
    pool.splice(current.poolIdx, 1);
    score++;
    scoreEl.textContent = 'Score: ' + score;
    done = true;
    showMsg('correct', '✅', 'Correct! The answer is ' + names[0] + '.');
    finish();
  } else if (attempts < current.food.clues.length) {
    attempts++;
    renderClues();
    inputEl.value = '';
    inputEl.classList.remove('shake');
    void inputEl.offsetWidth;
    inputEl.classList.add('shake');
  } else {
    pool.splice(current.poolIdx, 1);
    done = true;
    showMsg('wrong', '❌', 'The answer was: ' + names[0] + '.');
    finish();
  }
  updateProgress();
}

function finish() {
  inputEl.disabled  = true;
  guessBtn.disabled = true;
  if (!pool.length) {
    restartBtn.style.display = 'inline-block';
    subEl.textContent = 'All done! Final score: ' + score + ' / ' + total;
  } else {
    nextBtn.style.display = 'inline-block';
  }
}

function renderClues() {
  cluesEl.innerHTML = current.food.clues.slice(0, attempts).map(c =>
    '<div class="clue-line">' + c + '</div>'
  ).join('');
}

function showMsg(type, icon, text) {
  msgEl.className     = 'game-message ' + type;
  msgEl.style.display = 'flex';
  msgEl.innerHTML     =
    '<span class="msg-icon">' + icon + '</span>' +
    '<span id="msgText">' + text + '</span>';
}

function updateProgress() {
  const answered = total - pool.length;
  const pct      = (answered / total) * 100;

  document.getElementById('progress').textContent = answered + ' / ' + total + ' dishes';

  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = pct + '%';

  scoreEl.textContent = 'Score: ' + score;
}

document.addEventListener('keydown', function(e) { if (e.key === 'Enter') guess(); });
restart();