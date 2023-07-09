const { subArray } = require("./subarraySum");

describe("subArray", () => {
    test("[2,2,3,4,4,5,7] => 3", () => {
    
      expect(subArray([2,2,3,4,4,5,7],7)).toEqual(3);
    });
  
    test("[1,2,3] => 2", () => {
    
        expect(subArray([1,2,3],3)).toEqual(2);
      });

      test("[1, -1, 0],0 => 3", () => {
    
        expect(subArray([1, -1, 0],0)).toEqual(3);
      });
      test(" [1, 1, 1],2 => 2", () => {
    
        expect(subArray( [1, 1, 1],2)).toEqual(2);
      });
      test("[28,54,7,-70,22,65,-6],100 => 1", () => {
    
        expect(subArray([28,54,7,-70,22,65,-6],100)).toEqual(1);
      });
  })