//định nghĩa 1 object data, khi cần thì lấy ra dùng
//2 loại: number enum và string enum

//number enum
enum Status {
  PENDING, //0
  IN_PROGRESS, //1
  DONE, //2
  CANCELLED, //3
}

enum Status1 {
  PENDING = 3, //3
  IN_PROGRESS, //4
  DONE, //5
  CANCELLED, //6
}

console.log(Status[0]);
console.log(Status['DONE']);

//string enum
enum Str {
  NAME = 'TOM',
  TALK = 'Meo Meo',
}
console.log(Str['NAME']);


//Khi nào sử dụng enum: Khi nào cần sử dụng 1 loại dữ liệu ở nhiều nơi và sử dụng nó 1 chiều 