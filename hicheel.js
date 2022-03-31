 const superMan = {
		name: "chimeddorj",
    age : 25,
}
console.log(superMan.name);
console.log(superMan['age']);
superMan.school = "KonkukU";
console.log(superMan)
delete superMan.age;
console.log(superMan);

const add = (name, age)=>{
	return{
		name : name,
    age: age,
	}
}

const result = add("jihyeon", 24);
console.log(result);

const isAdult = (user)=>{
		if(!('age' in user) || user.age < 20 ){
				return false;
		}
				return true;
}

const mike = {
	name: "mike",
  age : 25
};

const lisa = {
	name: "lisa"
};

console.log(isAdult(mike))

for(i in mike){
	console.log(mike[i])
}









