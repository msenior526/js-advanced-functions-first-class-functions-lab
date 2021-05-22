// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) =>  {
    return array.slice(array.length - 2)
}

const selectingDrivers =
    [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
    return function(value) {
        return (int * value)
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, fnctn) => {
    return fnctn(arrayOfDrivers);
}