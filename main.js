let myset = new Set([10]);
myset.add(20).add(myset.size);
console.log(myset);
let iterable = myset.keys();
iterable.next().value;
iterable.next().value;
console.log(iterable.next().value);
/////////////////////////
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let myset_two = new Set(myFriends.sort());
console.log(myset_two);
////////////////////////
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
let mymap = new Map([
    ["username","osama"],
    ["role","Admin"],
    ["country","Egypt"]
])
console.log(mymap);
console.log(mymap.size);
console.log(mymap.has("role"));
////////////////////////////
let theNumber = 100020003000;
let result = +theNumber.toString().match(/[1-3]/ig).join("");
console.log(result);
/////////////////////
let theName = "Elzero";
console.log([...theName]);   // first
console.log(Array.from(theName));  // second
console.log([...new Set(theName)]);
console.log(theName.split(""));
console.log(new Map([[theName]]).keys().next().value.split(""));
console.log(Object.assign([],theName));
/////////////////
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne,...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);
//////////////////////
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n2) * [...n1,...n2].length);
/////////////////////////////////////
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let count = 0;
let mypart = [];
let chara = [];
for(let i=0;i<chars.length;i++){
    if(typeof chars[i] == "number"){
        mypart.push(chars[i]);
        count++;
    }else{
        chara.push(chars[i]);
    }
}
let myres = [...mypart,...chara];
myres.copyWithin(0,count,count*2)
console.log(myres);
console.log(count);
/////////////////////////////////////
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ip_reg = /\d+:\w+:\d+:\d+:\d+:\d+:\d+:\d+/ig;
console.log(ip.match(ip_reg));
/////////////////////////////////////////////
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg_spe = /Os(\d+)?O/g;
console.log(specialNames.match(reg_spe));
////////////////////////////
let phone = "+(995)-123 (4567)";
let phone_reg = /\+\(\d+\)-\d+ \(\d+\)/ig;
console.log(phone.match(phone_reg));
/////////////////////////////
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
https?:\/\/ => mean s if found it is ok if not will find http only + //
(?:[-\w]+\.)? => mean ?:- one or more . and this is all zero or one -one or more word . one or more ? : . one or more and this is zero or one /
?/*
*/
/////////////////
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /(\d+\/\d+\/\d+)?(\d+ - \d+ - \d+)?(\d+ \d+ \d+)?/ig;

console.log(date1.match(re).join("")); // "25/10/1982"
console.log(date2.match(re).join("")); // "25 - 10 - 1982"
console.log(date3.match(re).join("")); // "25 10 1982"
console.log(date4.match(re).join("")); // "25 10 82"
///////////////////////
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// reg
let reg = /(https?:\/\/)?\w+.\w+(.\w+)?(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/ig;
console.log(url1.match(reg));
console.log(url2.match(reg));
console.log(url3.match(reg));
console.log(url4.match(reg));
console.log(url5.match(reg));
////////////////////
class Car{
    constructor(name,model,price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    Run(){
        return `Car Is Running Now`;
    }
    Stop(){
        return `Car Is Stopped`;
    }
}
let first_car = new Car("PMW",2023,1000000);
let second_car = new Car("MG",2022,420000);
let thrid_car = new Car("FIAT",1990,3000);
console.log(`Car one Name is ${first_car.n} and model is ${first_car.m} and price is ${first_car.p}`);
console.log(second_car.Run());
////////////////////
class Phone{
    constructor(name,serial,price){
        this.nn = name;
        this.ss = serial;
        this.pp = price;
    }
}
class Tablet extends Phone{
    constructor(name,serial,price,size){
        super(name,serial,price);
        this.size_p = size || "Unknown";
    }
    fullDetails(){
       return `${this.nn} serial is ${this.ss} and size is ${this.size_p}`;
    }
} 
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);
console.log(TabletOne.fullDetails());
console.log(TabletTwo.fullDetails());
console.log(TabletThree.fullDetails());
//////////////////////////
class User{
    #c;
    constructor(username,card){
        this.u = username;
        this.#c = card;
    }
    get final_res(){
        let res = this.#c.toString().match(/\d{4}/ig);
        return `${res.join("-") }`;
    }
}
  
let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);
  
console.log(userOne.final_res);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.final_res);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.final_res);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here undefined
///////////////////////////
Object.prototype.addlove = function(value){
    return `I Love ${this} Web School`;
}
let myStr = "Elzero";
console.log(myStr.addlove()); // I Love Elzero Web School
//////////////////
const myobj = {
    username : "kareem",
    id : 100,
    score : 1000,
    country : "Egypt",
};
Object.defineProperty(myobj,"score",{
   writable : false, 
})
Object.defineProperty(myobj,"id",{
    enumerable : false,
})
Object.defineProperty(myobj,"country",{
    enumerable : false,                           // not important as delete
})
delete myobj.country;
myobj.score = 500;
for(let prop in myobj){
    console.log(`${prop} => ${myobj[prop]}`);
}
console.log(myobj);