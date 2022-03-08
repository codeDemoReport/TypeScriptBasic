//JS
//Primative: number, string, boolean, null, undifined, symbol
//Reference: object, array, function
//TS
//any, unknow, void, never,...

//example:
//Basic type
//any
let count: any = 5;
count = '5';

//string, number, boolean
let str: string = 'This is string';
let num: number = 5;
let isShow: boolean = true;

//co the bo phan khai bao du lieu cho 3 kieu tren
let str1 = 'This is string';
let num1 = 5;
let isShow1 = true;

//literal type: chỉ định 1 giá trị cu thể làm kiểu dữ liệu
let literal1: 1;
let literal2: 'Dog';

//khi dùng const để khai báo thì sẽ trở thành literal type
const num2 = 1;

//Khi khai báo 1 object bằng const, thuộc tính bên trong object vẫn có thể thay đổi được
const Cat = {
  name: 'Tom',
  age: 5,
};

Cat.age = 7;
console.log(Cat);
//Nếu muốn object ko thay đổi đc thuộc tính
const Dog = {
  name: 'Pug',
  age: 5,
} as const;

//type Alias: đặt cho kiểu dữ liệu 1 cái tên khác
type studentName = string;
type age = number;
type isTop = boolean;
//định nghĩa 1 object
type student = {
  readonly id: number; //readonly, giá trị của id không thể bị thay đổi sau quá trình tạo
  name: string;
  age?: number; //optional, kiểu dữ liệu có thể có hoặc không trong quá trình tạo
};

//Union type: tạo ra 1 kiểu dữ liệu mới, kiểu dữ liệu mới đó có thể là 1 hay nhiều kiểu dữ liệu khác nhau
type status = 'Active' | 'isActive';
type phone = number | string;
let strPhone: phone = '0123123';
let numPhone: phone = 1231312;

//Intersetion type: gộp thuộc tính của interface
interface Iidentity {
  name: string;
  age: number;
}
interface Icontact {
  phone: number;
  email: string;
}

type Employee = Iidentity & Icontact;

let a: Employee = {
  name: 'Luc',
  age: 22,
  phone: 1231231,
  email: 'dasda',
};
//hoặc có thể dùng extends
