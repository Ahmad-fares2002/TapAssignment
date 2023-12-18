function twoSum(nums, target) {
    const numIndices = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums.find(element=> element ==  target - nums[i])
     if(num){
        return [num,nums[i]]
     }
    }
  
    // If no solution is found
    return [];
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 18;
  const result = twoSum(nums, target);
  
  console.log(result); // Output: [0, 1]
  