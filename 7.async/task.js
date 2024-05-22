class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null; 
    }

    addClock (time, callback) {
        if (time === null || callback == null) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.filter(function (alarm) {
            return alarm.time === time;
          }).length > 0) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({time: time, callback: callback, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(function (alarm) {
            return alarm.time !== time;
          }
        )
    }

    #padTime(time) {
        return ('0' + time).slice(-2).toString()
    }

    getCurrentFormattedTime() {
        let currDate = new Date();
        return this.#padTime(currDate.getHours()) + ":" + this.#padTime(currDate.getMinutes());
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        let alarms = this.alarmCollection;
        let currTime = this.getCurrentFormattedTime();
        this.intervalId = setInterval(function() {
            alarms.forEach(alarm => {
                if (alarm.canCall && alarm.time === currTime) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => { alarm.canCall = true });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
