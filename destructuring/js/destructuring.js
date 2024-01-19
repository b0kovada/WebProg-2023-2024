//1. Feladat
let car = ["Ford", "Mustang", 2022, "blue"];
let [brand, model, year, color] = car;

console.log("Brand:", brand);
console.log("Model:", model);
console.log("Year:", year);
console.log("Color:", color);

//Kérdések:
//1.: Tömb destruktúrálás során a változóneveket tetszőlegesen lehet kiválasztani.
//2.: A változók sorrendje fontos, mivel a tömb elemei a sorrendjük alapján kerülnek hozzárendelésre a változókhoz.


//2. Feladat
let book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    publicationYear: 2008,
    language: "English"
  };
  
  const { title: bookTitle, author: bookAuthor, publicationYear, language } = book;
  
  console.log("Book Title:", bookTitle);
  console.log("Book Author:", bookAuthor);
  console.log("Publication Year:", publicationYear);
  console.log("Language:", language);

  //Kérdések:
  //1.: A változóneveknek nem feltétlenül kell megegyezniük az eredeti objektum kulcsaival.
  //2.: Az objektum destruktúrálás során a változók sorrendje nem fontos.

  //3. Feladat
  function printStudentInfo(student) {
    const { name, age, grade, subjects } = student;
    console.log("Name:" + name + ", Age:" + age + ", Grade:" + grade + ", Subjects:" + subjects.join(", "));
  }
  
  let student = {
    name: "John Doe",
    age: 20,
    grade: "B",
    subjects: ["Math", "English", "History"]
  };
  
  printStudentInfo(student);