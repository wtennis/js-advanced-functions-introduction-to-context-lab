// Your code here

//Test Data: 

const emp1 = ['Joe', 'Pesce', 'Head of HR', 400]
const emp2 = ['Bob', 'Deniro', 'Enforcer', 1000]
const emp3 = ['Danny', 'Devito', 'CEO', 1]

const dreamTeam = [emp1, emp2, emp3]



//let empArr = [emFirstName, emFamName, emTitle, emPayPerHour]

function createEmployeeRecord([emFirstName, emFamName, emTitle, emPayPerHour]) {
    let empRec = {
        firstName: emFirstName,
        familyName: emFamName,
        title: emTitle,
        payPerHour: emPayPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    };
    return empRec;
}

function createEmployeeRecords(arrOfArrs) {
    let empRecs =[]
    arrOfArrs.forEach((employee) => {
  empRecs.push(createEmployeeRecord(employee))
}
)
return empRecs
}


function createTimeInEvent(empRec, dateStamp) {
    const [dateIn, time] = dateStamp.split(' ')
    empRec.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: dateIn,
    }) 
    return empRec;
}

function createTimeOutEvent(empRec, dateStamp) {
    const [dateOut, time] = dateStamp.split(' ')
    empRec.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time),
        date: dateOut,
    }) 
    return empRec;
}

function hoursWorkedOnDate(empRec, dateWorked) {
    const timeOutEvent = empRec.timeOutEvents.find(ev => ev.date === dateWorked);
    const timeInEvent = empRec.timeInEvents.find(ev => ev.date === dateWorked);

    return (timeOutEvent.hour - timeInEvent.hour)/100;
}

function wagesEarnedOnDate(empRec, dateWorked) {
    let hours = hoursWorkedOnDate(empRec, dateWorked);

    return parseInt(hours*empRec.payPerHour);
}

function allWagesFor(empRec) {
    console.log('allWagesFor called')
    let allWages = 0
    empRec.timeOutEvents.forEach(ev => {
      allWages += wagesEarnedOnDate(empRec, ev.date);
    })
    return allWages
  }
  
  function calculatePayroll(arrOfEmpRecs) {
    let payRoll = 0;
    arrOfEmpRecs.forEach(emp => {
      payRoll += allWagesFor(emp)
    })
    return payRoll
  }

  function findEmployeeByFirstName(arrOfEmpRecs, first) {
    let empRec = arrOfEmpRecs.find(empArray => empArray['firstName'] === first)
    return empRec

}
