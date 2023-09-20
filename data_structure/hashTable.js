let user = {
  age: 23,
  name: "Lyndon",
  saying: () => {
    console.log("I believe in myself!");
  },
};

user.age; // O(1)

// Collision issue is O(n/k) k = RAM size

// Map cho phép lưu key ở bất kì dạng dữ liệu
// Map có thứ tự
const a = new Map();
