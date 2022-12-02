import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt")),
);
// const input = `A Y
// B X
// C Z`

let scores: any = {"A X": 3, "A Y": 4, "A Z": 8, "B X": 1, "B Y": 5, "B Z": 9, "C X": 2, "C Y": 6, "C Z": 7}

let b = input.split("\n");

let sum = 0;

b.forEach((item) => {
  let c = item.trim();

  sum += scores[c];
});

console.log(sum, "i");
