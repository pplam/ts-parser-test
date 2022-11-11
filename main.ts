class Example {
 foo(a: number, b: number) : Record<string, number> 
 {
  let sum: number = a;
  sum += b;
  return {sum};
 }

 bar(a: number, b: number) : {sub: number} {
  let sub: number = a;
  sub -= b
  return {sub};
 }

 baz(a: number, b: number) : any {
  let mul: number = a;
  mul *= b
  return {mul};
 }

 zoo(a: number, b: number) {
  let div: number = a;
  div /= b
  return {div};
 }
}
