interface Identity {
  name: string;
  age: number;
}

let person: Identity = {
  name: 'Luc',
  age: 4,
};

//mergin trong interface
interface Student {
  name: string;
}
interface Student {
  age: number;
}

let person1: Student = {
  name: 'Luc',
  age: 22,
};
console.log(person1);
