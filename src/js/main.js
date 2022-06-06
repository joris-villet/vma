document.addEventListener('DOMContentLoaded', () => app.init());


const app = {

  currentSpeed: 14,
  targetSpeed: 0,
  targetVma: 0,
  arraySpeeds: [],

  elem: function() {
    return {
      table__speed: document.querySelector("#table__speed"),
      inputs: document.querySelector("#inputs"),
      targetSpeed: document.querySelector(".target__speed"),
      targetVma: document.querySelector(".target__vma"),
      inputSpeed: document.querySelector("#inputs #speed"),
      inputPurcent: document.querySelector("#inputs #purcent"),
    }
  },

  
  AllEventsListeners: function() {
    console.log("input => ", this.elem())
    const el = this.elem();

    el.inputs.addEventListener('input', (e) => {
      // console.log(e.target)

      switch (e.target.id) {
        case 'speed':
          el.targetSpeed.textContent = e.target.value + ' km/h';
          this.targetSpeed = parseInt(e.target.value, 10);
          break;
        case 'purcent':
          el.targetVma.textContent = e.target.value + ' %';
          this.targetVma = parseInt(e.target.value, 10);
          break;
        default:
          null;
          break;
      }

    });
  },

  calcul: function () {
    console.log(this.targetSpeed)
    console.log(this.targetVma)
    const resultSpeed = this.getSpeed(this.targetVma, this.targetSpeed);
    console.log(resultSpeed)
    const times = this.getTimePerSpeed(resultSpeed);
    console.log("temps de passage au 400 m => ", times)
  },

  getSpeed: function (purcent, speed) {
    let result = null;
    result = speed * purcent / 100;
    return result.toFixed(1);
  },

  getTimePerSpeed: function (speed) {
     // VITESSE EN M/S = vitesse / 3.6;
    // TEMPS = DISTANCE / VITESSE
    console.log("speed ", speed)
    speed /= 3.6;
    let time = 200 / speed.toFixed(2);
    time = Math.round(time.toFixed(2));
    return time;
  },


  init: function () {
    const el = this.elem();
    el.inputSpeed.value = '';
    el.inputPurcent.value = '';
    // el.targetSpeed.textContent = this.currentSpeed + ' km/h';
    this.targetSpeed = el.targetSpeed.textContent;
    this.AllEventsListeners();
  }
}



// function getSpeed(purcent, speed) {
//   let result = null;
//   result = speed * purcent / 100;
//   return result.toFixed(1);
// }










