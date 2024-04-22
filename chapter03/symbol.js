/* 심벌에 대해
자바 스크립트의 객체는 -> 프로퍼티의 순서 없는 집합, 각 프로퍼티는 이름과 값이 있음
프로퍼티의 이름은 대게 문자열, 그러나 ES6부터 Symbol을 통해 프로퍼티 명으로 설정 가능하다
*/

let strname = "string name";
let symname = Symbol("propname");
console.log(typeof strname);
console.log(typeof symname);

let o = {}; //객체
o[strname] = 1;
console.log('o[strname]: ', o[strname]);
o[symname] = 2;
console.log('o[symname]: ', o[symname]);
// 이것도 그냥 되네
o[1] = 2;
console.log('o[1]: ', o[1]);

/*
심벌은 toString()으로 같은 값을 넣어줘도 다른 심벌을 반환한다.
클래스가 자기 자신을 이터러블로 만들기 위한 표준 메서드를 만들고자 했고,
특정 문자열 이름을 표준으로 사용하면 기존 코드가 깨지니, 심벌 이름을 통해 호환되게 했다.

Symbol은 같은 문자열을 넣어도 다른 값을 반환함, .toString의 경우
Symbol.for()은 같은 문자열로 호출하면 같은 값을 반환
*/

let s = Symbol("sym_x");
console.log('s.toString(): ', s.toString());
let t = Symbol("sym_x");
console.log('t.toString(): ', t.toString());
console.log('s === t: ', s === t);

let a = Symbol.for("A");
let b = Symbol.for("A");
console.log('a === b: ', a === b);
console.log('a.toString: ', a.toString);
console.log('b.toString: ', b.toString);

/*
s.toString():  Symbol(sym_x)
t.toString():  Symbol(sym_x)
s === t:  false
a === b:  true
a.toString:  [Function: toString]
b.toString:  [Function: toString]
*/