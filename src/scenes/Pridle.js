export default class Pridle extends Phaser.Scene {
  constructor() {
    super("Pridle");
  }
  preload() {
    this.cameras.main.backgroundColor =
      Phaser.Display.Color.HexStringToColor("#423e41");
      this.load.image(
      "Agender", "../public/assets/images/pridleflags/Agender2014.svg"
    );
  }
  create() {
    const pridle = this;
    const pridleGame = document.getElementById("pridle");
    const canvas = document.querySelector("canvas");
    const exitButton = document.getElementById("pridle-exit");

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
