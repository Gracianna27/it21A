class Person{
    
    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    get name(){
        console.log(this.name)
    }

    displayInfo(){
        console.log("name: " + this.name);
        console.log("name: " + this.age);
        console.log("name: " + this.occupation);
        console.log("-----------");
    }
}

const Person1 = new Person("Coco Martin",24,"Masahista");

Person1.getName();
Person1.displayInfo();