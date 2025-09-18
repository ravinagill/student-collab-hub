#include <iostream>
#include <vector>
using namespace std;

bool subSetSum(vector<int> &arr, int sum) {
    int n = arr.size();
    vector<vector<bool>> dp(n + 1, vector<bool>(sum + 1, false));

    for (int i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= sum; j++) {
            if (arr[i - 1] > j)
                dp[i][j] = dp[i - 1][j];
            else
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
        }
    }
    return dp[n][sum];
}
int main() {
    vector<int> arr = {3, 2, 7, 1};
    int sum = 6;
    if (subSetSum(arr, sum)) {
        cout << "subset with sum found " << sum << endl;
    } else {
        cout << "no subset found " << sum << endl;
    }
}
