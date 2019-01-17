class Gym extends require("events") {
  constructor() {
    super();
  }
}

const gym = new Gym();
setInterval(() => gym.emit("boom"), 1000);

gym.on("boom", () => console.log("Athlete is working out!"));
