/**
 * const、let等の変数宣言
 */
// var var1 = "var関数";
// console.log(var1);

// //var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// // var変数は際宣言可能
// var var1 = "var変数は際宣言可能"
// console.log(var1);

// let var2 = "let変数"
// console.log(var2)

// // letは上書きが可能
// var2 = "let関数は上書きが可能"
// console.log(var2)

// // let再宣言が不可能
// let var2 = "let変数は上書きが不可能"

// const var3 = "const変数";
// console.log(var3);

// // const変数は上書きが不可
// // var3 = "const変数は上書きが不可能"

// const var3 = "const変数を際宣言"

// constで定義したオブジェクトは変更が可能
// const var4 = {
//   name: "じゃけぇ",
//   age: 28
// }
// var4.name = "jak"
// var4.address = "Hiroshima"
// console.log(var4)

// constで定義した配列は変更が可能
const var5 = ["dog", "cat"];
var5[0] = "bird";
var5.push("monkey");
console.log(var5);
