function binarySearch(arr, left, right, target) {
    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        // If the element is present at the middle itself
        if (arr[mid] == target)
            return mid;

        // If element is smaller than mid, then it can only be present in left subarray
        if (arr[mid] > target)
            return binarySearch(arr, left, mid - 1, target);

        // Else the element can only be present in right subarray
        return binarySearch(arr, mid + 1, right, target);
    }

    return -1;
}

console.log(binarySearch([2, 3, 4, 10, 40], 0, 4, 10));