//  Constructor

/*
class Abc{
a:number;
constructor(){
console.log("hello amit");	
this.a=20;
}
	
	
}

	
var a1=new Abc();
*/

//  constructor  special type of function


// 1  function have return type
//  2 constructor have no return type

// constructor used for object initlinlization


// two types of constructor

// 1   default constructor
//  2  prameterized constructor



/*
class xyz{
	a:number;
	b:number;
constructor(a:number, b:number){

this.a=a;
this.b=b;
}	


getSum():number{
	
	return this.a+this.b;
	
}
	
}

var a1=new xyz(2,3);
a1.getSum();

console.log(a1.getSum());




*/
class Abc{
	constructor(private a:number){}
	output(){
		console.log(this.a);
	}
}

var a1=new Abc(30);
a1.output();








