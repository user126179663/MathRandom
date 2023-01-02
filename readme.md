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
		
		<math-random><div></div></math-random>
		
	</body>
</html>
```
　要素に指定された属性値に基づき、内包するすべての子孫要素に個別に [Math.random()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) が返す値を[カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)に ``--dice-*`` （``*`` は属性 *[number](#number)* に基づく任意の数）として設定します。属性 [id](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/id) が指定されている子孫要素に作成されたカスタムプロパティの値は、``--dice-[id]-*`` として *[\<math-random\>](#math-random-乱数埋め込み要素)* 自身にも設定されます。

　乱数を値とするカスタムプロパティは *[\<math-random\>](#math-random-乱数埋め込み要素)* が文書に接続される度に更新されます。 *[\<math-random\>](#math-random-乱数埋め込み要素)* やその子孫要素の対応する属性が変化した場合、または子孫要素が追加された場合も同様です。一方で、一度作成されたカスタムプロパティは削除されません。例えば、子孫要素のひとつが *[\<math-random\>](#math-random-乱数埋め込み要素)* から削除されても、その子孫要素や、その子孫要素の指定に基づいて設定された *[\<math-random\>](#math-random-乱数埋め込み要素)* のカスタムプロパティは任意に削除しない限り残留します。

## 属性
### number
　指定した自然数(0 を含む)の数だけ乱数を設定します。既定値は ``1`` です。自然数と認識できない値を指定した場合、既定値が使われます。
### prefix
　カスタムプロパティ名の接頭辞を指定します。既定値は ``dice`` です。

## 対応する子孫要素のカスタムデータ属性
　各[カスタムデータ属性](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/data-*)は、指定した子孫要素に対してのみ作用します。
### data-dice-disable
　論理属性で、このカスタムデータ属性が指定された要素には乱数を値とするカスタムプロパティを設定しません。

　値に任意の[セレクター](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Selectors)を指定すると、その子孫要素が内包する要素で、セレクターに一致する要素も同様に *[\<math-random\>](#math-random-乱数埋め込み要素)* の処理の対象外とします。
### data-dice-number
　*[\<math-random\>](#math-random-乱数埋め込み要素)* の属性 *[number](#number)* を上書きします。
### data-dice-prefix
　*[\<math-random\>](#math-random-乱数埋め込み要素)* の属性 *[prefix](#prefix)* を上書きします。