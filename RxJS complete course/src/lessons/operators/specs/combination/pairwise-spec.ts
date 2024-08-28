import { pairwise, take } from "rxjs/operators";
import { interval } from "rxjs";

export function pairwiseSpec() {
  interval(1000).pipe(pairwise(), take(5)).subscribe(console.log);
}

/*
1. The `pairwise` function combines the previous and current emitted values into arrays.
*/

/* Output:
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
*/
