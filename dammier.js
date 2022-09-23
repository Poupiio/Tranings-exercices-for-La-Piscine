let size = 10;
let character = "X";

for (let j = 0; j < size; j++) {
    let line = "";
    for (let i = 0; i < size; i++) {
        if ((j + i) % 2 == 0) {
            line += character;
        } else {
            line += " ";
        }
    }
    console.log(line);
};




