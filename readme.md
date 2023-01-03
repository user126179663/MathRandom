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
　要素に指定された属性値に基づき、[Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す値を[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)に設定します。カスタムプロパティは``--dice-*`` （``*`` は属性 *[number](#number)* に基づく任意の数）として設定されますが、グローバル属性 [id](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/id) や属性 [prefix](#prefix) によって任意の名前を指定することもできます。

　カスタムプロパティは *[\<math-random\>](#math-random-乱数埋め込み要素)* が文書に接続されたり、対応する属性が変化した際に更新されます。一度設定されたカスタムプロパティは任意に個別で削除しない限り残留します。

## 属性
### exclusive
　論理属性で、指定されていると、属性 *[int](#int)* が指定されている時に、設定される整数の乱数の範囲を、属性 *[max](#max)* に指定された整数化された値を含まないものにします。例えば ``int="1" min="0" max="5"`` の時、既定であれば設定される整数のカスタムプロパティの取り得る範囲は ``0`` から ``5`` ですが、この属性を指定していると ``0`` から ``4`` になります。既定の動作は人間にとって直感的で、この属性を指定した時の動作は [Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す乱数をそのまま使うためプログラミング的です。

　この属性は属性 *[number](#number)* に基づいて設定されるカスタムプロパティには影響しません。
### int
　指定した自然数(0 を含む)の数だけ、属性 *[max](#max)*, *[min](#min)* の指定に基づく範囲の乱数を**整数化**して[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)に設定します。既定値は、この属性の指定と、属性 *[number](#number)* の指定に依存します。この属性が未指定の時は、``0`` が用いられます。つまり整数化された乱数のカスタムプロパティは設定されません。属性名が指定されていて値が未指定相当（空文字や属性名だけの指定）の時は、属性 *[number](#number)* が指定されていれば、それと同じ値が用いられます。同じ条件で *[number](#number)* が未指定の時は ``1`` が用いられます。無効な値が指定された時も同様に ``1`` が用いられます。

　カスタムプロパティの名前には、接頭辞と、カスタムプロパティの番号を示す接尾辞の間に ``i`` が挿入されます。例えば、既定の指定で一番最初のカスタムプロパティは ``--dice-i-0`` になります。

　``--dice-i-0`` のエイリアスとして ``--dice-i`` が設定されます。
### max
　乱数の範囲の最大値を任意の数値で指定します。属性 *[min](#min)* より小さい値が指定された場合は *[min](#min)* と同じ値になります。既定値は ``1`` です。
### min
　乱数の範囲の最小値を任意の数値で指定します。属性 *[max](#max)* より大きい値が指定された場合は *[max](#max)* の値がこの属性と同じ値に変更されます。既定値は ``0`` です。
### number
　指定した自然数(0 を含む)の数だけ [Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す乱数を値とする[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)を設定します。既定値は ``1`` です。自然数と認識できない値を指定した場合、既定値が使われます。

　``--dice-i-0`` のエイリアスとして ``--dice-i`` が設定されます。
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