/*
class Abc{
	
	a:number;
	b:number;
	
	init(a:number,b:number){
		this.a=a;
		this.b=b;
		
	}
	
	output(){
		
		console.log(this.a+ "  "+this.b)
	}
}

var a1=new Abc();

a1.init(10,20);

a1.output();

*/




/*
class Abc{
	a:number;
	b:number;
	init(a:number,b:number){
		this.a=a;
		this.b=b;
		let d=5;   //  local varaible 
		}
	output(){
		
		console.log(this.a+ "  "+this.b)
		}
}

var a1=new Abc();

a1.init(10,20);

var a2=new Abc();
a2.output();

a1.output();

*/



//  ENCAPSULATION

class Abc{
private a:number;  // instance variable	

dhram(a:number){
	
	this.a=a;   //  a local varaible
}

output(){
	console.log(this.a);   // 
}
	
	
}

var a1=new Abc();
//a1.dhram(10);
a1.output();












