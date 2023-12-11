// destructuring
// const student1 = {
//   name: "thamizh",
//   age: 25,
//   mark: { tamil: 80, english: 72, maths: 80, science: 80 },
// };
// const student2 = {
//   name: "thamizh",
//   age: 25,
//   mark: { tamil: 80, english: 72, maths: 80, science: 80 },
// };
// const student3 = {
//   name: "thamizh",
//   age: 25,
//   mark: { tamil: 80, english: 72, maths: 80, science: 80 },
// };

// const student4 = {
//   name: "thamizh",
//   age: 25,
//   mark: { tamil: 80, english: 72, maths: 80, science: 80 },
// };

function Student(name, age, mark) {
  this.name = name;
  this.age = age;
  this.mark = mark;
  this.display = function () {
    // console.log(this);
    console.log(this.name, this.age, this.mark);
  };
}

s1 = new Student("thamizh", 20, 450);

// s1.location = "pondy";
// console.log(s1);

// s1.display();
s2 = new Student("vidhya", 20, 450);

Student.prototype.location = "pondy";
console.log(s1);
console.log(s2);
s1.location = "tamilnadu";
console.log(s1);
// s2.display();
// s2 = new Student("");
// const studentCopy = { ...student };

// const studentCopy = Object.assign({}, student);

// const studentCopy = JSON.parse(JSON.stringify(student));
// console.log(student);
// console.log(studentCopy);
// studentCopy.mark.tamil = 90;
// console.log(student);
// console.log(studentCopy);
// const numbers = [10, 41, 57, 86, 58];

// var [a, ...b] = numbers;
// console.log(a, b);
// // var name = student.name;
// // var age = student.age;
// // var mark = student.mark;

// const { name, age, mark, rollno = "1212" } = student;
// console.log(name, age, mark, rollno);
// // var { name: studentName, age: studentAge, mark: studentMark } = student;

// // var { name: student1Name, age: student1Age, mark: student1Mark } = student;
// // // for (let i = 0;i<student.l)
// // console.log(studentName, studentAge, studentMark);
// // console.log(student1Name, student1Age, student1Mark);

// function display({ name, age, mark }) {
//   console.log(name);
//   console.log(age);
//   console.log(mark);
// }

// console.log(`${10 + 50}px`);

// display(student);
