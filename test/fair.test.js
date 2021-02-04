process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;

class Fairness {
    is_fair(a, b) {
        if(a === b){
            return "success";
        }
        else if(typeof a !== 'number' || typeof b !== 'number'){
            return "error";
        }
        return "fail";
    }
}

describe("Fairness App", function() {

    it("Return a success message if 2 values are equal", function(){
        let fairness = new Fairness();
        let result = fairness.is_fair(1, 1);
        expect(result).to.equal("success");
    });

    it("Return a fail message if 2 values are not equal", function(){
        let fairness = new Fairness();
        let result = fairness.is_fair(2, 1);
        expect(result).to.equal("fail");
    });

    it("Return an error message if 2 values are not numbers", function(){
        let fairness = new Fairness();
        let result = fairness.is_fair("abc", 1);
        expect(result).to.equal("error");
    });
});