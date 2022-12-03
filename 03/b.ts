import * as p from "https://deno.land/std@0.165.0/path/mod.ts";


const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt")),
);

let total = 0;

let inputList = input.split('\n');

let finalList = [];

for(let i = 0; i < inputList.length; i+=3) {
    const line = inputList[i].trim();
    const line2 = inputList[i + 1].trim();
    const line3 = inputList[i + 2].trim();

    finalList[Math.floor(i/3)] = [line, line2, line3];
}

finalList.forEach((line) => {
    const [a, b, c] = line;
    a.split('').every((char) => {
        if (b.split('').includes(char)) {
          if(c.split('').includes(char)) {
              const code = char.charCodeAt(0);
              if (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) {
                  total += code - "A".charCodeAt(0) + 27;
              } else {
                  total += code - "a".charCodeAt(0) + 1;
              }
              return false;
            }
        }
        return true;
    });
});

console.log(total);