class Person{
    constructor(first, last, age, gender, interests){
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting(){
        console.log(`Hi ${this.name.first}`);
    };

    farewell(){
        console.log(`${this.name.first} has leave`);
    };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leia = new Person('Leia', 'Organa', 19, 'female', ['Goverment']);
leia.farewell();

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests);
  
      // subject and grade are specific to Teacher
      this._subject = subject;
      this.grade = grade;
    }

    get subject(){
        return this._subject; 
    }

    set subject(newSubject){
        this._subject = newSubject;
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
snape.age;

console.log(snape.subject);
snape.subject = "Ballon animals";
console.log(snape.subject);