
public class Solution {

    public boolean carPooling(int[][] trips, int capacity) {

        if (trips.length == 1) {
            return trips[0][0] <= capacity;
        }

        final int MAX_PLACE_ID = 1000;
        int[] pickUp_dropOff_events = new int[MAX_PLACE_ID + 1];

        for (int[] trip : trips) {
            pickUp_dropOff_events[trip[1]] += trip[0];
            pickUp_dropOff_events[trip[2]] -= trip[0];
        }

        int passengers = 0;
        for (int people : pickUp_dropOff_events) {
            passengers += people;
            if (passengers > capacity) {
                return false;
            }
        }

        return true;
    }
}
