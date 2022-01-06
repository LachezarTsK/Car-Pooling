
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    
    if (trips.length === 1) {
        return trips[0][0] <= capacity;
    }

    const MAX_PLACE_ID = 1000;
    const pickUp_dropOff_events = new Array(MAX_PLACE_ID + 1).fill(0);

    for (let trip of trips) {
        pickUp_dropOff_events[trip[1]] += trip[0];
        pickUp_dropOff_events[trip[2]] -= trip[0];
    }

    let passengers = 0;
    for (let people of pickUp_dropOff_events) {
        passengers += people;
        if (passengers > capacity) {
            return false;
        }
    }

    return true;
};
