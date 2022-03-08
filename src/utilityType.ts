interface Animal {
  name: string;
  age: number;
  talk: string;
}

//Partial: biến thuộc tính trong interface thành optinal (có thể có hoặc không)
const cat: Partial<Animal> = { name: 'Tom', age: 5 };

console.log(cat);

//required: Các thuộc tính đều phải nhập đầ đủ
const dog: Required<Animal> = {
  name: 'Pug',
  age: 5,
  talk: 'Gau Gau',
};

console.log(dog);

//record: tạo 1 object trong đó chứ nhiều object có key sẵn

type petName = 'Cat' | 'Dog' | 'Mouse';
const pets: Record<petName, Animal> = {
  Cat: { name: 'Tom', age: 5, talk: 'Meo Meo' },
  Dog: { name: 'Pug', age: 6, talk: 'Gau Gau' },
  Mouse: { name: 'Jerry', age: 3, talk: 'Chit Chit' },
};

console.log(pets);

//Pick: tạo 1 kiểu dữ liệu mới từ cách chọn 1 vài key từ kiểu dữ liệu cũ
type person = Pick<Animal, 'name' | 'age'>;
//Omit : Lấy tất cả nhwung trừ ra ....
type person2 = Omit<Animal, 'name'>;
const Luc: person2 = { age: 22, talk: 'Hello' };
