export default class Pridle extends Phaser.Scene {
  constructor() {
    super("Pridle");
  }
  preload() {
    this.cameras.main.backgroundColor =
      Phaser.Display.Color.HexStringToColor("#423e41");
    this.load.image(
      "Agender",
      "../public/assets/images/pridleflags/Agender2014.svg"
    );
  }
  create() {
    // const flag = this.add.image(400, 300, "Agender");
    // flag.setScale(4.5);
    const pridle = this;
    const pridleGame = document.getElementById("pridle");
    const canvas = document.querySelector("canvas");
    canvas.classList.add("hidden");
    const exitButton = document.getElementById("pridle-exit");
    const choiceButton = document.getElementById("bumsit");
    const option = document.getElementById("pflag");
    const sq1 = document.getElementById("square1");
    const sq2 = document.getElementById("square2");
    const sq3 = document.getElementById("square3");
    const sq4 = document.getElementById("square4");
    const sq5 = document.getElementById("square5");
    const sq6 = document.getElementById("square6");
    pridleGame.classList.remove("hidden");
    exitButton.addEventListener("click", exitRoom);
    choiceButton.addEventListener("click", submit);

    function exitRoom() {
      pridle.scene.stop("Pridle");
      pridle.scene.start("Lobby");
      pridleGame.classList.add("hidden");
      canvas.classList.remove("hidden");
    }
    function removeSquare() {
      sq1.classList.add("hidden");
    }
    function submit() {
      var select = document.getElementById("lang");
      var option = select.options[select.selectedIndex];
      console.log(option.value);
      //   document.getElementById("value").value = option.value;
      removeSquare();
    }
  }

  update() {}
}
