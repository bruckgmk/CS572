var University = /** @class */ (function () {
    //name : String; 
    //dept: String
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return University;
}());
var mum = new University("MUM", "Computer Science");
mum.graduation(2019);