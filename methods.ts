class employee {
    first_name: string;
    last_name: string;

    fullname()
    {
        return this.first_name + " " + this.last_name;
    }
}

const person = new employee()
const fname = person.first_name = "def";
const lname = person.last_name = "abc"

console.log(fname)
console.log(lname)

