import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const a = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt")),
);
const b = a.split('\n')
let it = 0;
const arr: number[][] = [[]];
b.forEach((item) => {
    if(item === '\r'){
        it++;
        arr.push([]);
    } else {
        arr[it].push(parseInt(item.trim()));
    }
})

const greatest = new Array(3).fill(0);

arr.forEach((item) => {
    const sum = item.reduce((a, b) => a + b, 0);
    if(sum > greatest[2]){
        greatest[2] = sum;
        greatest.sort((a, b) => b - a);
    }
})

console.log(greatest.reduce((a, b) => a + b, 0));