var maximumProduct = function (nums = []) {
  const sorter = (a, b) => a -b;
   nums.sort(sorter);
   let pro1 = 1, pro2 = 1;
   let len = nums.length - 1;
   for (let i = len; i > len - 3; i--) {
      pro1 = pro1 * nums[i];
   };
   pro2 = nums[0] * nums[1] * nums[len];
   return Math.max(pro1, pro2);
}