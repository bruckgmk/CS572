const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require('body-parser');

const grades = require("./grades");

const app = express();

app.use(bodyParser.json());
app.use(logger("access.log"));
app.use(cors());

app.get("/", (req, res) => {
  res.send(grades.gradeArray);
});

app.get("/:id",(req,res)=>{
    const searchId = (grades.gradeArray.find(g => g.id === parseInt(req.params.id)));
    if(!searchId) res.status(404).send("course with the Id is not found");
    res.send(searchId);
});

app.post('/', (req, res) => {
  const {name, course, grade } = req.body;
  grades.add(name, course, grade);
  res.json(grades);
});

app.put('/:id',(req,res) =>{
    const updateCourse = (grades.gradeArray.find(g => g.id === parseInt(req.params.id)));
    if(!updateCourse) res.status(404).send('Course with the Id is not found');
    updateCourse.name = req.body.name;
    updateCourse.course = req.body.course;
    updateCourse.grade = req.body.grade;
    res.send(updateCourse);
})


app.delete('/:id', (req, res) => {
    const deleteCourse = grades.gradeArray.find(g => g.id === parseInt(req.params.id));
    if(!deleteCourse) res.status(404).send('Course to delete not found');
    const courseIndex = grades.gradeArray.indexOf(deleteCourse);
    grades.gradeArray.splice(courseIndex,1);
    res.send(deleteCourse);
});

app.listen(3000, ()=>{console.log('Listening on port 3000...')});
