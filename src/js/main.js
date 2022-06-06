document.addEventListener('DOMContentLoaded', () => app.init());


const app = {

  currentSpeed: 14,
  targetSpeed: 0,
  targetVma: 0,
  arrayDistances: [100, 200, 300, 400, 500, 600, 800, 1000, 1500, 2000],

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
    // console.log("input => ", this.elem())
    const el = this.elem();

    el.inputs.addEventListener('input', (e) => {
      // console.log(e.target.value)

      switch (e.target.id) {
        case 'speed':
          el.targetSpeed.textContent = e.target.value + ' km/h';
          // this.targetSpeed = parseInt(e.target.value, 10);
          this.targetSpeed = Number(e.target.value);
          break;
        case 'purcent':
          el.targetVma.textContent = e.target.value + ' %';
          this.targetVma = Number(e.target.value);
          break;
        default:
          null;
          break;
      }

    });
  },

  calcul: function () {
    // console.log(this.targetSpeed)
    // console.log(this.targetVma)
    const resultSpeed = this.getSpeed(this.targetVma, this.targetSpeed);

    this.arrayDistances.forEach(distance => {
      // console.log(distance);
      const times = this.getTimePerSpeed(resultSpeed, distance);
      console.log(`temps de passage au ${distance} m => `, times);
      this.createElements(distance, times);
    })

  },

  getSpeed: function (purcent, speed) {
    let result = null;
    result = speed * purcent / 100;
    return result.toFixed(1);
  },

  getTimePerSpeed: function (speed, distance) {
     // VITESSE EN M/S = vitesse / 3.6;
    // TEMPS = DISTANCE / VITESSE
    console.log("speed ", speed)
    speed /= 3.6;
    let time = distance / speed.toFixed(2);
    time = Math.round(time);
    let minutes = Math.floor(time / 60);
    let secondes = time % 60;
    console.log("minutes ", minutes)
    console.log("secondes ", secondes)
    if (secondes < 10) secondes = '0' + secondes;
    return minutes < 1 ? secondes + ' sec' : minutes + '.' + secondes + ' min';
    //return minutes + ' ' + secondes;
  },


  createElements: function (distance, time) {
    // let elem = document.createElement(element);
    // elem.textContent = content;
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${distance} M</td>
      <td>${time}</td>
    `;
    const el = this.elem();
    el.table__speed.appendChild(tr);
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












