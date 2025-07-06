const stories = [
  {
    title: "سلمان کر و شعبان کر",
    code: "۰۰۰۱",
    type: "حکایت، طنز",
    url: "/dastanz/سلمان کر و شعبان کر - 0001/"
  },
  {
    title: "ملانصرالدین و دانشمند",
    code: "۰۰۰۲",
    type: "حکایت، طنز",
    url: "/dastanz/ملانصرالدین و دانشمند - 0002/"
  }
  // هر داستان جدید رو اینجا اضافه کن
];

function normalize(text) {
  return text.replace(/\s/g, "").split("").join("+");
}

function searchStories(query) {
  const queryLetters = normalize(query);
  const scores = stories.map(story => {
    const titleLetters = normalize(story.title);
    let match = 0;
    queryLetters.split("+").forEach(letter => {
      if (titleLetters.includes(letter)) match++;
    });
    return { story, match };
  });

  // مرتب‌سازی بر اساس تعداد حروف مشترک
  scores.sort((a, b) => b.match - a.match);

  const resultContainer = document.getElementById("results");
  resultContainer.innerHTML = "";

  scores.forEach(({ story }) => {
    resultContainer.innerHTML += `
      <h3 class="cardsne">
        <a class="cardsa" href="${story.url}">${story.title}</a>
      </h3>
      <p class="cardsinfo">کد: ${story.code} - نوع: ${story.type}</p>
      <br><hr class="hrcards"><br>
    `;
  });
}

document.querySelector(".searchbutton").addEventListener("click", e => {
  e.preventDefault();
  const query = document.getElementById("search").value;
  searchStories(query);
});