var uiController = (function(){
    var DOMstrings={
        inputType: ".add__type",
        inputDesciption: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn",
        incomeList: ".income__list",
        expenseList: ".expenses__list",
        tusuvLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expeseLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        containerDev: ".container"
    }
    return{
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesciption).value,
           //string to int whit use parseInt
                value: parseInt(document.querySelector(DOMstrings.inputValue).value)
           
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        },
        clearFields: function(){
            var fields = document.querySelectorAll(
                DOMstrings.inputDesciption +', '+ DOMstrings.inputValue
            );
            //list to Array
            var fieldsArr = Array.prototype.slice.call(fields);
            // for(var i=0;i<fieldsArr.length; i++)
            // {
                //     fieldsArr[i].value = "";
                // }

            //utga oruulsanii daraa utgiig arilgah
            fieldsArr.forEach(function(el,index,array){
                el.value = "";
            });
            //enter darsnii daraa cursor 0-dugaar index aguulj bui(tailbar) heseg deer ochino
            fieldsArr[0].focus();
        },

        tusviigUzuuleh: function(ftusuv){
            document.querySelector(DOMstrings.tusuvLabel).textContent = ftusuv.tusuv;
            document.querySelector(DOMstrings.incomeLabel).textContent = "+"+ftusuv.totalInc;
            document.querySelector(DOMstrings.expeseLabel).textContent = "-"+ftusuv.totalExp;
            if(ftusuv.huvi === 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = ftusuv.huvi;
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = ftusuv.huvi+"%";
            }
        },

        addListItem: function(item, type){
            var html,list;
            if(type === 'inc'){
                list = DOMstrings.incomeList;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">$description$$</div><div class="right clearfix"><div class="item__value">$$value$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else{
                list = DOMstrings.expenseList;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">$description$$</div><div class="right clearfix"><div class="item__value">$$value$</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            html =html.replace("%id%", item.id);
            html = html.replace("$$value$",item.value);
            html =html.replace("$description$$",item.description);

            document.querySelector(list).insertAdjacentHTML("beforeend",html);
        }
    };
})();
var financeController = (function() {
    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Exponse = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function(type){
        var sum = 0;
        data.items[type].forEach(function(el){
            sum = sum+el.value;
        });
        data.totals[type] = sum;
    }
    var data = {
        items:{
            inc: [],
            exp: []
        },
        totals:{
            inc: 0,
            exp: 0
        },
        tusuv: 0,
        huvi: 0
    };
  
    return {
      
        tusuvTootsooloh: function(){
            //niit orlogiin niilberiig tootsoolno
            calculateTotal('inc');

            //niit zarlagiin niilberiig tootsoolno
            calculateTotal("exp");

            // tusuwiig shineer tootsoolno
            data.tusuv = data.totals.inc - data.totals.exp;

            //Orlogo Zarlagiin huwiig tootsoolno
            data.huvi = Math.round((data.totals.exp / data.totals.inc)*100);
        },
        tusviigAvah: function(){
            return {
                tusuv: data.tusuv,
                huvi: data.huvi,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp
                
            }
        },
      
        deleteItem: function(type, id) {
            var ids = data.items[type].map(function(e){
                return e.id;
            });

            var index = ids.indexof(id);
            console.log('index: '+index);
            if(index !== -1){
                console.log("ustgah gej baina");
                data.items[type].splice(index, 1);
            }
        },
        addItem: function(type, description, value) {
            var item, id;
            if(data.items[type].length === 0) {
                id = 1;
            }
            else{
                id = data.items[type][data.items[type].length - 1].id + 1;
            }
            if(type === "inc"){
                item = new Income(id,description,value);
            }else{
                item = new Exponse(id,description,value);
            }
            data.items[type].push(item);
            return item;
        }, 
        seeData: function (){
            return data;
        }
    };
})();
var appController = (function(uiController, financeController){
    var ctrlAddItem = function(){
        var input =  uiController.getInput();
        // console.log(typeof input.value)
        if(input.description !== "" && input.value !== "" ){
            var item = financeController.addItem(
                input.type,
                input.description,
                input.value);
        }

        uiController.addListItem(item,input.type);
        uiController.clearFields();

        // Tuswiig tootsoolno
        financeController.tusuvTootsooloh();

        //Etssiin vldegdel
        var tusuv = financeController.tusviigAvah();

        //Tusuviig vzvvleh
        uiController.tusviigUzuuleh(tusuv);
    };
 var serupEventListeners = function(){  
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function() {
        ctrlAddItem();
    });
    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

    document.querySelector(DOM.containerDev).addEventListener("click",function(event){
        var id = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log("id "+ id);
        if(id){
            var arr = id.split("-");
            var type = arr[0];
            var itemId = parseInt(arr[1]);
            // console.log('itemType: '+ itemType + ' itemId: ' + itemId );
            financeController.deleteItem(type, itemId);
        };
     });

}
return {
    init: function(){
        serupEventListeners();
        console.log("started...");
    }
}
})(uiController, financeController);
appController.init();



// var uiController = (function(){
//     var x = 12;
//     function add(y){
//         return x+y;
//     }
//     return {
//         publicAdd: function(a){
//             a = add(a);
//             console.log("hvleen awsan utga " + a);
//         }
//     }
// })();

// var appController = (function(uiController){
//     uiController.publicAdd(248);
// })(uiController);