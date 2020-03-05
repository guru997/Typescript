class hello {
    greet() {
        console.log("Hello world")
    }
}

//calling an object via inheritance
class programmer extends hello 
{

}

//calling an object via inheritance and Overriding the object value
class developer extends hello
{
    greet()
    {
        console.log("Hey there")
    }
}

//calling an object into object using "this" in an overriding
class tester extends hello
{
    greet() {
        console.log("Hey there")
    }
    greeting()
    {
        this.greet()
    }
}
//calling an object into object using "super" in an overriding
class marketing extends hello {
    greet() {
        console.log("Hey there")
    }
    greeting() {
        super.greet()
    }
}
const aProgrammer = new programmer
const adeveloper = new developer
const atester = new tester
const amarketing = new marketing

aProgrammer.greet();
adeveloper.greet();
atester.greeting();
amarketing.greeting();