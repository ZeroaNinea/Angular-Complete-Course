import { generate } from "rxjs";

export function generateSpec1() {
  generate(
    2,
    (x) => x <= 8,
    (x) => x + 3,
  ).subscribe(console.log);
}

/*
1. The `generate` function generates an Observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out Observer messages. The function is very similar to `for` loop. The first argument of the `generate` is a beginning value; the second argument is a function that accepts this value and tests if some condition still holds. If it does, then the loop continues, if not, it stops; the third argument is a function which takes the previously dfined value and modifies it in some way on each iteration.
*/

/* Output:
2
5
8
*/

export function generateSpec2() {
  generate(
    2,
    (x) => x <= 38,
    (x) => x + 3,
    (x) => ".".repeat(x),
  ).subscribe(console.log);
}

/*
..
.....
........
...........
..............
.................
....................
.......................
..........................
.............................
................................
...................................
......................................
*/
