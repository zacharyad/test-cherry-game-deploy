import prideFlagCodes from "./flagData";
const prideInfo = prideFlagCodes.Agender.id;
var image = new Image();
image.onload = cutImageUp();
image.src = `https://pride.dev/api/flags/${prideInfo}/SVG`;

function cutImageUp() {
  var imagePieces = [];
  for (var x = 0; x < 3; ++x) {
    for (var y = 0; y < 3; ++y) {
      var canvas = document.createElement("canvas");
      canvas.width = 20;
      canvas.height = 20;
      var context = canvas.getContext("2d");
      context.drawImage(
        image,
        x * 20,
        y * 20,
        20,
        20,
        0,
        0,
        canvas.width,
        canvas.height
      );
      imagePieces.push(canvas);
    }
  }

  // imagePieces now contains data urls of all the pieces of the image

  // load one piece onto the page
  var anImageElement = document.getElementById("pridleimage");
  anImageElement.src = imagePieces[0];
}
export default class Pridle extends Phaser.Scene {
  constructor() {
    super("Pridle");
  }
  preload() {
    this.cameras.main.backgroundColor =
      Phaser.Display.Color.HexStringToColor("#423e41");
  }
  create() {
    const pridle = this;
    const pridleGame = document.getElementById("pridle");
    const canvas = document.querySelector("canvas");
    const exitButton = document.getElementById("pridle-exit");
    cutImageUp();

    pridleGame.classList.remove("hidden");

    exitButton.addEventListener("click", exitRoom);

    function exitRoom() {
      pridle.scene.stop("Pridle");
      pridle.scene.start("Lobby");
      pridle.classList.toggle("hidden");
      canvas.classList.toggle("hidden");
    }
  }

  update() {}
}
