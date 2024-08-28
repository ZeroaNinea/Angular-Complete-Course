import { of, distinct, from } from "rxjs";

export function distinctSpec1() {
  of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5).pipe(distinct()).subscribe(console.log);
}

/*
1. The `distinct` function does not emit elements of the same value.
*/

/* Output:
1
2
3
4
5
*/

export function distinctSpec2() {
  const obj1 = { id: 3, name: "name 1" };
  const obj2 = { id: 4, name: "name 2" };
  const obj3 = { id: 3, name: "name 3" };
  const vals = [obj1, obj2, obj3];

  from(vals)
    .pipe(distinct((e) => e.id))
    .subscribe(console.log);
}

/* Output:
{id: 3, name: 'name 1'}
{id: 4, name: 'name 2'}
*/
