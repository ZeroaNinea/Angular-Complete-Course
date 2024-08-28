import { of } from "rxjs";

export function ofSpec1() {
  const source$ = of(1, 2, 3, 4, 5);

  source$.subscribe((val) => console.log(val));
}

/* Output:
1
2
3
4
5
*/

export function ofSpec2() {
  const source$ = of({ name: "Brian" }, [1, 2, 3], function hello() {
    return "Hello";
  });

  source$.subscribe((val) => console.log(val));
}

/* Output:
{name: 'Brian'}
[1,2,3]
[Function: hello]
*/
