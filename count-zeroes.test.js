const countZeroes = require("./count-zeroes")

describe("#countZeros", function(){
    it("counts the number of zeroes", function(){
        expect(countZeroes([1, 1, 1, 1, 0, o])).toBe(2)
        expect(countZeroes([1, 0, 0, 0, 0,])).toBe(4)
        expect(countZeroes([0, 0, 0])).toBe(3)
        expect(countZeroes([1, 1, 1, 1])).toBe(0)
    })
})