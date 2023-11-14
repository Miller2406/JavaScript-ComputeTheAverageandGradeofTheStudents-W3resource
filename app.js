const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let sum = 0
let n = 0
let avg = 0

for (let i = 0; i < students.length; i++) {
    sum += students[i][1]
    n += 1
}

avg = sum / n

if (avg >= 80) {
    console.log(`Average grade is ${avg}, Grade:A`);
} else if (avg >= 70) {
    console.log(`Average grade is ${avg}, Grade:B`);
} else if (avg >= 60) {
    console.log(`Average grade is ${avg}, Grade:C`);
} else if (avg >= 50) {
    console.log(`Average grade is ${avg}, Grade:D`);
} else {
    console.log(`Average grade is ${avg}, Grade:F`);
}