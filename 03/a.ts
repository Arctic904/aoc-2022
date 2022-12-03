import * as p from "https://deno.land/std@0.165.0/path/mod.ts";


const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt")),
);

console.log("A".charCodeAt(0), "Z".charCodeAt(0));

let total = 0;

input.split('\n').forEach((line) => {
    const a = line.substring(0, line.length / 2);
    const b = line.substring(line.length / 2);
    console.log(a, b);
    a.split('').every((char) => {
        if (b.split('').includes(char)) {
            const code = char.charCodeAt(0);
            if (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) {
                total += code - "A".charCodeAt(0) + 27;
                console.log(total, code - "A".charCodeAt(0) + 27)
            } else {
                total += code - "a".charCodeAt(0) + 1;
                console.log(total, code - "a".charCodeAt(0) + 1)
            }
            return false;
        }
        return true;
    });
});

console.log(total);