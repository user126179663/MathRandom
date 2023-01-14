# \<math-random\>: 乱数設定要素
```html
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>MathRandom</title>
		<script src="math-random.js"></script>
	</head>
	<body>
		
		<math-random></math-random>
		
	</body>
</html>
```
　要素に指定された属性値に基づき、[Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す値を[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)に設定します。カスタムプロパティは``--dice-*`` （``*`` は属性 *[number](#number)* に基づく任意の数）として設定されますが、グローバル属性 [id](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/id) やローカル属性 [prefix](#prefix) によって任意の名前を指定することもできます。

　カスタムプロパティは *[\<math-random\>](#math-random-乱数設定要素)* が文書に接続されたり、対応する属性が変化した際に更新されます。一度設定されたカスタムプロパティは任意に個別で削除しない限り残留します。

## 属性
### exclusive
　論理属性で、指定されていると、属性 *[int](#int)* が指定されている時に、設定される整数の乱数の範囲を、属性 *[max](#max)* に指定された整数化された値を含まないものにします。例えば ``int min="0" max="5"`` の時、既定であれば設定される整数の[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)の取り得る範囲は ``0`` から ``5`` ですが、この属性を指定していると ``0`` から ``4`` になります。既定の動作は人間にとって直感的で、この属性を指定した時の動作は [Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す乱数をそのまま使うためプログラミング的です。

　この属性は *[number](#number)* に基づいて設定されるカスタムプロパティには影響しません。
### gt
　乱数がこの属性に指定された値と等しいか、それより大きい場合、設定される[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)の値をローカル属性 *[gv](#gv)* に指定された値にします。既定値は ``1`` です。未指定の場合、 *[ls](#ls)* と *[gv](#gv)* が指定されていれば、乱数が *[gt](#gt)* より大きい時にカスタムプロパティの値を *[gv](#gv)* にします。それらが指定されていない時は比較は行なわれません。

　*[ls](#ls)* と同じ値を指定した場合、 *[ls](#ls)* の値の比較が優先されます。また *[ls](#ls)* より小さい値を指定すると、 *[ls](#ls)* と同じ値になります。
### gv
　乱数がローカル属性 *[gt](#gt)* に指定された値より大きい時に、この属性に指定された値を[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)に設定します。未指定の場合、乱数がそのまま使われます。
### int
　論理属性で、指定すると設定される[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)の値を整数化します。
### ls
　乱数がこの属性に指定された値と等しいか、それより小さい場合、設定される[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)の値をローカル属性 *[lv](#lv)* に指定された値にします。既定値は ``0`` です。未指定の場合、 *[gt](#gt)* と *[lv](#lv)* が指定されていれば、乱数が *[gt](#gt)* より小さい時にカスタムプロパティの値を *[lv](#lv)* にします。それらが指定されていない時は比較は行なわれません。

　*[gt](#gt)* と同じ値を指定した場合、この属性の値の比較が優先されます。
### lv
　乱数がローカル属性 *[ls](#ls)* に指定された値より小さい時に、この属性に指定された値を[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)に設定します。未指定の場合、乱数がそのまま使われます。
### max
　乱数の範囲の最大値を任意の数値で指定します。属性 *[min](#min)* より小さい値が指定された場合は *[min](#min)* と同じ値になります。既定値は ``1`` です。
### min
　乱数の範囲の最小値を任意の数値で指定します。属性 *[max](#max)* より大きい値が指定された場合は *[max](#max)* の値がこの属性と同じ値に変更されます。既定値は ``0`` です。
### number
　指定した自然数(0 を含む)の数だけ [Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す乱数を値とする[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)を設定します。既定値は ``1`` です。自然数と認識できない値を指定した場合、既定値が使われます。

　``--dice-0`` のエイリアスとして ``--dice`` が設定されます。
### prefix
　[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)の接頭辞を指定します。既定値は ``dice`` です。未指定かつグローバル属性 [id](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/id) が設定されている時は、接頭辞として id が示す値が用いられます。空文字ないし論理属性として指定すると、id が指定されていても既定値を接頭辞に強制します。
```html
<!-- カスタムプロパティの命名規則例 -->

<!-- --sample, --sample-0 が設定される -->
<math-random id="sample"></math-random>

<!-- --dice, --dice-0 が設定される -->
<math-random></math-random>
<math-random prefix></math-random>
<math-random id="sample-0" prefix></math-random>

<!-- --my-dice, --my-dice-0 が設定される -->
<math-random prefix="my-dice"></math-random>
<math-random id="sample-1" prefix="my-dice"></math-random>
```