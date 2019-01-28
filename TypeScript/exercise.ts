function University(name: String, dept: String){
    this.name = name;
    this.dept = dept;
    this.graduation = function(year: Number){
        console.log(`Graduating ${this.dept} ${year} students`);
    }
    var mum = new University("MUM","Computer Science");
    mum.graduation(2019);
}