// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    //returns the number of blocks given a value
    return Math.abs(block - 42)
    return distanceFromHqInBlocks
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled =Math.abs (destination-start)
    return blocksTravelled *264    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
  