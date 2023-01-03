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
### number
　指定した自然数(0 を含む)の数だけ [Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す乱数を値とする[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)を設定します。既定値は ``1`` です。自然数と認識できない値を指定した場合、既定値が使われます。

　この属性の値が ``1`` である時のみ、接尾辞に番号を割り振られないカスタムプロパティが追加で設定されます。既定の状態であれば、この時設定される二つのカスタムプロパティ ``--dice`` ``--dice-0`` の値は等価です。
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