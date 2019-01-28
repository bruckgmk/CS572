class University{
//name : String; 
//dept: String
    constructor(public name: String, public dept: String){}
    
    graduation (year: Number) :void  {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}  
    const mum = new University("MUM","Computer Science");
    mum.graduation(2019);
