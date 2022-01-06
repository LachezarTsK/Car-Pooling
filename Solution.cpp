
#include<vector>
using namespace std;

class Solution {
public:

    bool carPooling(vector<vector<int>>&trips, int capacity) {

        if (trips.size() == 1) {
            return trips[0][0] <= capacity;
        }

        const size_t MAX_PLACE_ID = 1000;
        int pickUp_dropOff_events[MAX_PLACE_ID + 1]{0};

        for (const auto& trip : trips) {
            pickUp_dropOff_events[trip[1]] += trip[0];
            pickUp_dropOff_events[trip[2]] -= trip[0];
        }

        int passengers = 0;
        for (const auto& people : pickUp_dropOff_events) {
            passengers += people;
            if (passengers > capacity) {
                return false;
            }
        }

        return true;
    }
};
