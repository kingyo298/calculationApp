var app = new Vue({
  el: "#app",
  data(){
    return {
      value:"",
      formula:"",
    }
  },
  methods : {
    concatenateOperator:function(operator){
      if(this.formula.slice(-1) === " "){
        return this.formula = this.formula.substr(0,this.formula.length - 3) + operator;
      }else if(this.formula === ""){
        return "";
      }else{
        return this.formula += operator;
      }
    },
    calcDyadicOperator(num1,operator,num2){
      var result;
      switch(operator){
        case "+" :
          result =  num1 + num2;
          break;
        case "-" :
          result =  num1 - num2;
          break;
        case "*" :
          result =  num1 * num2;
          break;
        case "/" :
          result =  num1 / num2;
          break;
        default :
          throw new SyntaxError(operator + 'is not a operator');
      }
      return result;
    },
    calculate : function(){
      var formulaArray = this.formula.split(" ");
      var temp = 0;
      while(formulaArray.length >= 3){
        temp = this.calcDyadicOperator(parseInt(formulaArray[0]),formulaArray[1],parseInt(formulaArray[2]));
        formulaArray.splice(0,3);
        formulaArray.unshift(temp);
      }
      this.formula = "";
      this.value = formulaArray[0];
    }
  },
});
