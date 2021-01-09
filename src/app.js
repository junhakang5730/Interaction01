let twoSum = function(nums, target) {
    
  let firstNum = null;
  let secondNum = null;
  
  for (num of nums) {
      
      for ( let i = nums.indexOf(num)+1; i < nums.length; i++ ){
          if (num + nums[i] == target) {
              console.log(i)
              firstNum = nums.indexOf(num);
              secondNum = i;

              return [firstNum , secondNum];
              } 
          }        
      }
};


console.log(twoSum([3,2,4], 6))
// Expected : [1,2]