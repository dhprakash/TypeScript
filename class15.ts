
/*class A
{
	a:number;
	b:number;
	constructor(a:number,b:number)
	{
		this.a=a;
		this.b=b;
	}
	
	getSum():number{
		
		return this.a+this.b;
	}
	
}

class B extends A{
	
	display(){
		console.log("hello");
	}
}


var a1=new B(10,20);
var z=a1.getSum();
console.log(z);
*/
// UPCASTING
class A{
	display1(){
		console.log("display1");
	}
	display2(){
		console.log("display2");
	}
	
}

class B extends A{
	display3(){
		console.log("display 3");
	}
	display4(){
		console.log("display4");
	}
	
}

var b1:A=new B();  // upcasting

b1.display1();
b1.display2();



