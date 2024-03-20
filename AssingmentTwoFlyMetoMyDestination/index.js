function calculateMinimumPlanes(arr) {
    const numOfAirports = arr.length;
 
    let planeCount = 0;
    let currentFuel = arr[0];
    let maxReachableIndex = 0;
 
    for (let i = 1; i < numOfAirports; i++) {
        if (i <= currentFuel) {
            if (i > maxReachableIndex) {
                maxReachableIndex = i;
            }
        } else {
            if (maxReachableIndex === 0) {
                return -1;
            }
            planeCount++;
            currentFuel = arr[maxReachableIndex];
            maxReachableIndex = i;
        }
    }
 
    return planeCount;
}

const airports1 = [2, 1, 2, 3, 1];
console.log(calculateMinimumPlanes(airports1));

const airports2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(calculateMinimumPlanes(airports2));