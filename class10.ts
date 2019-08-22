/*class Abc{
a:number;	
	
}


var a1=new Abc();

a1.a=50;

console.log(a1.a);

*/

//a:number=10;
//a:number;

/*
class Xyz{
	a:number;
	k:string;
	}
class Mno{
	
	x1:Xyz;
	c:number;
}
var a1=new Mno();

var xx=new Xyz();
a1.x1=xx;

a1.x1.a=90;
console.log(a1.x1.a);

*/


/*  Function In Typescript */


/*
class Abc{
	
	
	display(){
		console.log("hello");
		let i=5;  // local variable;
		console.log(i);
	}


}	


var a1=new Abc();
a1.display();

*/



/*
class Abc{
	a:number;
	display(num:number){
	console.log(num);	
	}
}

//new Abc().display(10);

var a1=new Abc();
a1.display(20);
a1.a=90;

console.log(a1.a);

*/



class Abc{
	a:number;
	
	display(){
		console.log(this.a);
	}
	
}

var a1=new Abc();
a1.a=80;
a1.display();














