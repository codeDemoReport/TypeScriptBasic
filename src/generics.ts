// Kiểu dữ liệu mà nó nhận tham số và kiểu trả về tương ứng
//Giống template trong C++

interface List<Type> {
  length: number;
  [index: number]: Type;
}

const numberList: List<number> = [1, 2, 3];
const nameList: List<string> = [
  'Luc',
  'Tin',
  'Thin',
  'Sang',
];

console.log(numberList[2]);
