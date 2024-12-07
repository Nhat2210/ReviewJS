// Bai tap duyet mang 1

// 1.Viết hàm countGreaterThan nhận vào một mảng số và một số value,
// hàm trả về số lượng phần tử trong mảng lớn hơn value.
const counGreaterThan = (arr, value) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      count++;
    }
  }
  return count;
};

// 2.Viết hàm alternateSum để tính “tổng xen kẽ” từ một mảng số.
//  Trong “tổng xen kẽ”, bạn sẽ cộng số ở vị trí chẵn và trừ số ở vị trí lẻ trong mảng.
const alternateSum = (arr) => {
  let sum = 0;
  let minus = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      sum += arr[i];
    } else {
      minus += arr[i];
    }
  }
  return sum - minus;
};

// 3.Viết hàm sumOfSquares nhận vào một mảng số nguyên và trả về tổng bình phương của mỗi số trong mảng.
const sumOfSquares = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2);
  }
  return sum;
};

// 4.Viết hàm filterEvensAndSum để lọc ra các số chẵn từ một mảng số nguyên đầu vào và tính tổng của chúng.
const filterEvensAndSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};

// 5.Viết hàm findLongestWord nhận vào một mảng các chuỗi và trả về chuỗi dài nhất trong mảng đó.
//  Nếu có nhiều chuỗi có độ dài giống nhau và là dài nhất, trả về chuỗi xuất hiện đầu tiên.

const findLongestWord = (arr) => {
  let longestString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
};

//Bai tap duyet mang 2

// Viết hàm countPositiveNumbers nhận vào một mảng số và trả về số lượng số dương trong mảng đó.

const countPositiveNumbers = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  return count;
};
console.log(countPositiveNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

//Viết hàm sumArray nhận vào một mảng số và trả về tổng của tất cả các số trong mảng đó.

const sumArray = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
};

//Viết hàm calculateAverage nhận vào một mảng số và trả về trung bình cộng của các số trong mảng đó,
//  trả về 0 nếu mảng trống.

const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length == 0) {
      return;
    } else {
      sum += arr[i];
    }
  }
  return sum / arr.length;
};

// Bai tap for lap 3

//Viết hàm isAscending nhận vào một mảng số và kiểm tra xem mảng đó có phải là dãy số tăng dần không. Trường hợp mảng chỉ có một phần tử hoặc mảng rỗng không được coi là mảng tăng dần.
const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
};

// Viết hàm isPrime nhận vào một số nguyên n và trả về true nếu n là số nguyên tố, ngược lại trả về false.
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

// Viết hàm sumPrimes nhận vào hai số nguyên start và end, sau đó tính và trả về tổng của tất cả các số nguyên tố trong khoảng từ start đến end.
const sumPrimes = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
};

//Viết một hàm repeatChar nhận vào hai tham số: character và n. Hàm này sẽ trả về một chuỗi gồm kí tự character được lặp lại n lần.
const repeatChar = (character, n) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += character;
  }
  return string;
};

// console.log(repeatChar("hi", 5));

//Viết một hàm arrayToHTMLList nhận vào một mảng các chuỗi và trả về một chuỗi HTML. Chuỗi HTML này sẽ thể hiện một danh sách không sắp xếp (<ul>) với mỗi phần tử của mảng được biểu diễn bằng một mục danh sách (<li>).

const arrayToHTMLList = (arr) => {
  let string = "<ul>";
  for (let i = 0; i < arr.length; i++) {
    string += "<li>" + arr[i] + "</li>";
  }
  string += "</ul>";
  return string;
};
console.log(arrayToHTMLList(["a", "b", "c", "d", "e"]));

//Viết một hàm linearSearch nhận vào hai tham số: một mảng số nguyên arr và một giá trị target cần tìm. Hàm này sẽ thực hiện tìm kiếm trong mảng: nếu tìm thấy target, trả về vị trí (index) của target trong mảng; nếu không tìm thấy, trả về -1.

const linearSearch = (arr, target) => {
  if (arr.length < 0) return -1;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
  }
  return -1;
};

// Viết hàm compressString để rút gọn một chuỗi bằng cách thay thế các nhóm ký tự liên tiếp giống nhau bằng một ký tự đó kèm theo số lần xuất hiện liên tiếp của ký tự đó.

const compressString = (str) => {
  let compress = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compress += str[i] + count;
      count = 1;
    }
  }
  return compress;
};
// console.log(compressString("hiiihaaaahhe"));

// Viết hàm calculateGrade để tính điểm trung bình từ một mảng điểm số và trả về xếp loại dựa trên điểm trung bình đó. Xếp loại được định nghĩa như sau:
// A: Điểm trung bình từ 90 trở lên
// B: Điểm trung bình từ 80 đến dưới 90
// C: Điểm trung bình từ 70 đến dưới 80
// D: Điểm trung bình từ 60 đến dưới 70
// F: Điểm trung bình dưới 60

const calculateGrade = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let avarage = sum / scores.length;
  if (avarage >= 90) {
    return "A";
  } else if (avarage < 90 && avarage >= 80) {
    return "B";
  } else if (avarage < 80 && avarage >= 70) {
    return "C";
  } else if (avarage < 70 && avarage >= 60) {
    return "D";
  } else if (avarage < 60) {
    return "F";
  }
};
// console.log(calculateGrade([80, 90, 100, 70, 50, 44, 32]));

// Viết hàm isPalindrome để kiểm tra một chuỗi có phải là chuỗi đối xứng hay không. Một chuỗi được coi là đối xứng nếu việc đọc nó từ trái qua phải hoặc từ phải qua trái đều giống nhau.

//cach 1;
const isPalindrome = (str) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("hello world"));
