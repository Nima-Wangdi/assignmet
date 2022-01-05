// Data types:
// string,Number,Object,Array,Boolean,
// string
var name={"name":"Extended Family"}
console.log(name)

// number
var age={"age":30}
console.log(age)

//objects:
var details={"dsp":{
    "did":"DS(39)20-6986",
    "name":"Sonam Tobgay",
    "age":99,
    "gender":"Male"
}}
console.log(details)

var my_arr=['Zangpo',"Web Development",99,"Ex-Monk"]
console.log(my_arr)
//JSON.parse()

var json_name=JSON.parse('{"name":"John", "age":30, "city":"New York"}')
console.log(json_name)

//JSON.stringify()
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(myJSON)

//accessing individual element
fetch_individual=obj.name
console.log(fetch_individual)

