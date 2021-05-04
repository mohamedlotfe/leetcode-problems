/**
 * 518. Coin Change 
 * Input: amount = 5, coins = [1,2,5] 
 * Output: 4
 * Explanation:  5=5 , 5=2+2+1 , 5=2+1+1+1 , 5=1+1+1+1+1
 */
var change = function (amount, coins) {
    const n = coins.length || 0;
    let memo = new Array(n + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(-1);
    }
    var solve = function (rem, pos) {

        if (rem === 0) return 1;
        if (pos === n) return 0;

        if (memo[pos][rem] > -1)
            return memo[pos][rem];

        if (rem >= coins[pos])
            memo[pos][rem] = solve(rem - coins[pos], pos) + solve(rem, pos + 1);
        else
            memo[pos][rem] = solve(rem, pos + 1);

        return memo[pos][rem];

    }


    return solve(amount, 0);
};
//console.log(change(5, [1, 2, 5]))

/****************************************************************************************/

/**
 * 46. Permutations 
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
var permute = function (nums, arr = [], answers = []) {
    // base case
    if (!nums.length) answers.push([...arr]);

    for (let i = 0; i < nums.length; i++) {

        let newArr = nums.filter((v, idx) => i !== idx);

        arr.push(nums[i]) //do

        permute(newArr, arr, answers); //recurse

        arr.pop(); //undo
    }
    return answers;
};

/****************************************************************************************/

var permuteUnique = function (nums) {
    let answers = [];
    nums.sort((a, b) => a - b)

    var solve = function (nums, arr) {
        if (!nums.length) answers.push([...arr]);

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) continue;

            let newArr = nums.filter((v, idx) => i !== idx);

            arr.push(nums[i]) //do

            solve(newArr, arr); //recurse

            arr.pop(); //undo
        }

    }
    solve(nums, []);
    return answers;
};
//console.log(permuteUnique([1, 1, 3]))

/****************************************************************************************/
/**
 * 39. Combination Sum
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 */
var combinationSum = function (candidates, target) {
    const result = [], path = [];

    var solve = function (rem, pos) {
        // console.log(rem, pos, path);
        if (rem === 0) {
            result.push([...path])
            return;
        }
        for (let i = pos; i < candidates.length; i++) {

            if (candidates[i] > rem) continue;
            //do 
            path.push(candidates[i])
            //recurse 
            solve(rem - candidates[i], i);
            //undo
            path.pop();
        }


    }
    solve(target, 0);
    return result
};

/****************************************************************************************/

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [], path = [];

    var solve = function (rem, pos) {
        if (rem === 0) {
            result.push([...path])
            return;
        }
        for (let i = pos; i < candidates.length; i++) {

            if (candidates[i] > rem) continue;
            if (candidates[i] === candidates[i - 1] && i > pos) continue;
            //do 
            path.push(candidates[i])
            //recurse 
            solve(rem - candidates[i], i + 1);
            //undo
            path.pop();
        }


    }
    solve(target, 0);
    return result
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));