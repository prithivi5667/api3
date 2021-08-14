function startPage() {}

function random_bg_color() {
  rand = Math.random() * 360;
  color = "hsl(" + rand + ", 100%, 90%)";
  color2 = "hsl(" + rand + ", 100%, 5%)";
  document.body.style.background = color;
  document.getElementById("contPage").style.color = color2;
}

let Question = [
  "Do you like it, try again?",
  "One more ?",
  "Think one more time",
  "Try again !!!",
  "Best of luck !",
];
let count = 0;
$("*").click(function (event) {
  if (this === event.target) {
    // only fire this handler on the original element
    contPage = document.getElementById("contPage");

    fetch(`https://yesno.wtf/api`)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        let answer = data.answer;
        let image = data.image;
        if (count == 0) {
          contPage.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${image}" alt="gif">
                    <div class="card-body srn text-center text-capitalize">
                    ${answer}
                    </div>
                </div>
                `;
          count = 1;
        } else {
          contPage.innerHTML = `
          <h2> ${Question[getRandomInt(4)]} </h2>
                `;
          count = 0;
        }

        random_bg_color();
      })
      .catch(function (err) {
        console.log("API Error:", err);
      });
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
