const dogButton = document.getElementById("dogBtn");
const facts = document.getElementById("dog-facts");

dogButton.addEventListener("click", () => {
  console.log("clicked the button");
  const url = "https://cat-fact.herokuapp.com/facts?animal_type=dog";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const keys = Object.keys(data.all);
      const randomIndex = keys[Math.floor(Math.random() * keys.length)];
      const item = data.all[randomIndex];
      console.log(item.text);
      facts.innerHTML = item.text;
    });
});
