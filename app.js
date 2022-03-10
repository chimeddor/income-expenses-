var now = new Date().getFullYear();

function btn(download){
    var pass = prompt();

        if(pass === '123'){
            alert("sain baina uu");
            var a = "profile";
            return a;
        }else{
            alert("nuuts dugaar buruu baina");
        }

}
var ret = btn();
console.log(ret);

var year = 18;
var who = year >= 18 ? 'tom hvn' : 'hvvhed';
document.querySelector('#id').innerHTML = who;
/*
var year, yearJohn, yearMark;
year = 2019;
yearJohn = 24;
console.log('this is year: '+ year);
console.log('yearJohn: '+ yearJohn);
console.log('yearMark: '+ yearMark);
console.log(typeof yearJohn)
console.log(2<4);
*/