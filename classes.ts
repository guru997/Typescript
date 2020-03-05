class Person
{
    firstname: string
    lastname: string
}

const aperson = new Person()
const firstname = aperson.firstname = "abc"
const lastname = aperson.lastname = "def"
console.log(firstname)
console.log(lastname)