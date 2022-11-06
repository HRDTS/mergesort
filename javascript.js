
let mergesort = function(array)  {
   if(array.length < 2) {
      return array
    } else {
      let half = Math.ceil(array.length / 2);
      let leftHalf = array.slice(0, half);
      leftHalf = mergeSort(leftHalf);
      let rightHalf = array.slice(half);
      rightHalf = mergeSort(rightHalf);
      let merged = [];
  
      let i = 0;
      let j = 0;
      while(i < leftHalf.length && j < rightHalf.length){
         if(leftHalf[i] < rightHalf[j]){
            merged.push(leftHalf[i]);
            i++;
         }else{
            merged.push(rightHalf[j]);
            j++;
         }
      };
      while(i < leftHalf.length){
         merged.push(leftHalf[i]);
         i++;
      };
      while(j < rightHalf.length){
         merged.push(rightHalf[j]);
         j++;
      };
  
      return merged
    }
}