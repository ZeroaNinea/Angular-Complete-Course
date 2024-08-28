import { from, pluck } from "rxjs";

export function pluckSpec1() {
  const source$ = from([
    { name: "Joe", age: 30 },
    { name: "Sarah", age: 35 },
  ]);

  const example$ = source$.pipe(pluck("name")).subscribe(console.log);
}

/*
1. The `pluck` function selects property to emit.
*/

/* Output:
'Joe'
'Sarah'
*/

export function pluckSpec2() {
  const source$ = from([
    {
      name: "Joe",
      age: 30,
      job: { title: "Developer", language: "JavaScript" },
    },
    { name: "Sarah", age: 35 },
  ]);

  const example$ = source$.pipe(pluck("job", "title")).subscribe(console.log);
}

/* Output:
'Developer'
undefined
*/
