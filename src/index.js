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
// const var5 = ["dog", "cat"];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の書き方
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を使った書き方
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(3, 57));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1)

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(message2)

const myProfile = ["じゃけぇ", 28];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3)

const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
