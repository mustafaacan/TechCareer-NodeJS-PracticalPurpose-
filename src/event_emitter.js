// for run --> npm run nodemon_event

// Event module create data
const dataEvent = require("events");

// Event emitter create data
const dataEmitterON = new dataEvent.EventEmitter();
const dataEmitterONCE = new dataEvent.EventEmitter();

// Event name
const eventName = "Data Send";

dataEmitterON.on(eventName, () => {
  console.log(`${eventName} successfully.`);
});

dataEmitterONCE.once(eventName, () => {
  console.log(`${eventName} successfully ONCE.`);
});

// since used with "on" it can be used multiple times
dataEmitterON.emit(eventName);
dataEmitterON.emit(eventName);
dataEmitterON.emit(eventName);

// since used with "once" it will be used only once even if called multiple times
dataEmitterONCE.emit(eventName);
dataEmitterONCE.emit(eventName);
dataEmitterONCE.emit(eventName);

// operation with time interval

// for ON usage
let count1 = 0;

function repeatON() {
  if (count1 < 4) {
    console.log("Opertion worked for ON:", count1 + 1);
    dataEmitterON.emit(eventName);
    count1++;
    setTimeout(repeatON, 2000); // 2 saniye sonra tekrar çağır
  }
}

repeatON();

// for ONCE usage
let count2 = 0;

function repeatONCE() {
  if (count2 < 4) {
    console.log("Opertion worked for ONCE:", count2 + 1);
    dataEmitterONCE.emit(eventName);
    count2++;
    setTimeout(repeatONCE, 2000); // 2 saniye sonra tekrar çağır
  }
}

repeatONCE();
