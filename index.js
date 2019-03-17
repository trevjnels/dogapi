const imageRender = function(img) {
  $(".photoFlex").append(
    `<div class="photo"><img class="pho" src="${img}" alt="pic of a dog"><div>`
  );
};

const fetcher = function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(responseJSON => imageRender(responseJSON.message))
    .catch(e => console.log(e));
};

const getDogs = function(num) {
  var img = "";
  if (num < 1 || num > 50) {
    alert("Please input a number between 1 & 50!!");
    num = 0;
  }
  for (let i = 0; i < num; i++) {
    fetcher();
  }
};

const inputListener = function() {
  $(".dogForm").submit(function(event) {
    event.preventDefault();
    $(".photoFlex").html("");
    var numOfDogs = $(".dogInput").val();
    getDogs(numOfDogs);
  });
};

inputListener();
