class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email
    }
    login(){
        console.log(`${name} has logged In`);
    }
    logout(){
        console.log(`${name} has logged Out`);
    }
}

class Moderator extends User{
    constructor(name,age,email,addCoins,removeCoins){
        super(name,age,email);
        this.addCoins = addCoins;
        this.removeCoins = removeCoins;
    }
    addCoins(){
        this.addCoins++;
        console.log(`${this.name} has ${this.addCoins} coins`);
        return this;
    }
    removeCoins(){
        this.removeCoins-this.addCoins;
        console.log(`${this.name} has ${this.removeCoins} coins`);
        return this;
    }
}

class Admin extends Moderator{ 
    addCourse(User,course){
        user.courses.push(course);
        console.log(user);
    }
    removeCourse(user,course){
        User.course.pop(course);
        console.log(User);
    }
 }
let user1 = new User('rahul',25,'r@gmail.com');
let user2 = new User('sumeet',24,'s@gmai.com')
let mod = new Moderator('sahil',34,'sa@gmail.com', 1, 4);
let admin = new Admin('Javascript', 'Blockchain');
let users = [user1,user2,mod,admin];

users.forEach(print => {
    console.log(print);
});

