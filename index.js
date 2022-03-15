// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
   return distanceFromHqInBlocks(pickupLocation)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination)*264);
}

function calculatesFarePrice(start, destination) {
    let feet = Math.abs((start-destination)*264);
    if(feet <= 400) {
        return 0;
    } else if(400 < feet && feet <= 2000) {
        return ((feet - 400) * .02);
    } else if(feet > 2000 && feet < 2500) {
        return 25;
    } else if(feet > 2500) {
     return 'cannot travel that far';
   } 
}