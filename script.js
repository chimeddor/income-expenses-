
medeelel('chimeddorj',12, 'programmist');
medeelel('bayarmaa',35, 'designer');


function medeelel(name, age, job){
    document.querySelector('#functionid').innerHTML = name + ' ' + age + ' ' +job;
    console.log(name, age, job);
}
 
var module = function(number){
    console.log("Expression function working" + number);
}
module(-238);

mod(238);
 function mod(number){
    console.log("Expression function working" +' '+ number);
}
// #1
var tooniiModule = function(too){
    var too2;
    if(too < 0) too2 = -too;
    else too2 = too;

    console.log(too +" toonii modul ni "+ too2);
    return too2;
}
// #2
var addModules = function(x,y,z){
    var niilber = tooniiModule(x) + tooniiModule(y) + tooniiModule(z);
    return niilber;
}
// #3
var sumPrint = addModules(-2,3,-6);
console.log("niilber:"+sumPrint);





var h1 = {
    ner:"bataa",
    nas:"23",
    surguuli:{
      ner:"Seoul Unvi",
      location:"inSeoul"
    },
    myInfo: function(){
      console.log(this.ner, this.nas, this.surguuli.ner,this.surguuli.location);
   
    }
  }.myInfo();
  

  var h2 = {
    ner:"chimdee",
    nas:"28",
    surguuli:{
      ner: "konkuk",
      location:"seoul"
    },
    myInfo: function(ner, nas , surguuliinNer,surguuliinLocation){
     this.ner = ner, 
     this.nas = nas, 
     this.surguuli.ner = surguuliinNer, 
     this.surguuli.location = surguuliinLocation
    }
    
  }

  
  /*
  console.log(h2['ner']);
  console.log(h2.nas);
  
  console.log(h1['ner'],h1['nas'])
  
  
  var h1iinNer = 'ner';
  console.log(h1[h1iinNer],h2[h1iinNer])
  */