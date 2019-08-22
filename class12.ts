/*class mno{
	
	dis(a:number){
		console.log(a);
	}
}

var m1=new mno();
m1.dis(90);
*/









/*
class Abc
{
display(x1:xyz)
{
x1.output(10,20);//  not accessable because output is private member
x1.sum();
}
}
*/


/*
class xyz{
	private a:number;
	private b:number;
	public output(a:number,b:number){
		this.a=a;
		this.b=b;
}
	
	public sum(){
		
		console.log(this.a+this.b);
	}
}


var a1=new Abc();
a1.display(new xyz());

*/
//   function with return type 
class Abc{
	
	sum(a:number,b:number):number
	{
		return a+b;
		
	}
	
}


var a1=new Abc();
var s=a1.sum(10,20);
console.log(typeof s);















