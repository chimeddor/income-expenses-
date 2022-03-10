var uiController = (function(){
    var DOMstrings={
        inputType: ".add__type",
        inputDesciption: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }
    return{
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesciption).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        },
        addListItem: function(item, type){
            var html,list;
            if(type === 'inc'){
                list = ".income__list";
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">$description$$</div><div class="right clearfix"><div class="item__value">$$value$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else{
                list = ".expenses__list";
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
    var data = {
        items:{
            inc: [],
            exp: []
        },
        totals:{
            inc: 0,
            exp: 0
        }
    };
    return {
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
        console.log(input);
        var item = financeController.addItem(input.type,input.description,input.value);
        uiController.addListItem(item,input.type);
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