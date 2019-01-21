class Grades {
  
    constructor(){
        console.log('ha')
        this.gradeArray = new Array();
    }  
  
  add(username, coursename, coursegrade) {
        

      console.log("dding.")
     const user = {
            id: this.gradeArray.length+1, 
            name: username,
            course: coursename,
            grade:coursegrade
        };
        this.gradeArray.push(user);
        console.log(user)
     //{id:id, name:namee, course, grade };
  }

  update(id, name, course, grade) {
    { id, name, course, grade };
  }

  remove(id) {
    delete this[id];
  }
  

}

 
const grades = new Grades();
grades.add("Assad Sadd", "cs572", "95");

module.exports = grades;
