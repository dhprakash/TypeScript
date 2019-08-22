/*
oops
1   class
2   object
3   Inhertitance
4   Polymorphism
5   Abstraction
6   Encapsulation
*/


//  collection of object = class
/*
class phone{
	
phone_color;	//  properties of class	, memeber of class
	
}


a;  // global variable

class tablet{
	tt;    // instance variable
	a;  // instance vraiable
}

*/


/*class B{
	x;
}


class A{
	
	x;
}

var a1=new A();
a1.x=20;
console.log(a1.x);

*/



class Abc{
	a:number;
	b:number[];
	c:any;
	f:boolean;
	d:string[];
}

//var xyz=new Abc();
//xyz.b=[10,20,78,50,60];

//console.log(xyz.b[3]);

var a1=new Abc();
a1.a=56;
console.log(a1.a);  //56
var a2=new Abc();
a2.a=80;
console.log(a1.a);   //56
a1=a2;
console.log(a2.a);   //  80
console.log(a1.a);    // 80































