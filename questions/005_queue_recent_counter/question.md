# 直近60秒のリクエスト数

## 問題文

APIへのリクエスト時刻を順番に受け取り、現在時刻を含む直近60秒間のリクエスト数を返す `RecentCounter` を実装してください。

`ping(timestampSec)` が呼ばれたとき、`timestampSec - 59` 以上 `timestampSec` 以下の時刻に行われた `ping` の件数を返します。

`timestampSec` は単調非減少で与えられます。古くなった時刻は今後二度と有効にならないため、不要な履歴を永遠に保持しない実装を考えてください。

## 制約

- `1 <= ping` の呼び出し回数 `<= 100000`
- `timestampSec` は0以上の整数
- `timestampSec` は前回の呼び出し以上の値
- 期待される償却時間計算量は1回あたり `O(1)`

## 入力例

```ts
const counter = new RecentCounter();
counter.ping(1);
counter.ping(30);
counter.ping(60);
counter.ping(61);
```

## 出力例

```text
1
2
3
3
```

`61` の時点では対象範囲は `2` から `61` なので、時刻 `1` のリクエストは対象外です。
