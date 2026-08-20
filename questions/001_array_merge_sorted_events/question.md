# ソート済みイベント列のマージ

## 問題文

2つのイベント配列 `left` と `right` が与えられます。各配列は `timestamp` の昇順にソート済みです。

2つの配列をマージし、`timestamp` の昇順に並んだ1つの配列を返す `mergeSortedEvents` を実装してください。

同じ `timestamp` のイベントが両方の配列に存在する場合は、`left` 側のイベントを先に並べてください。

この問題では、入力を結合してから `sort` するのではなく、ソート済みであることを利用して `O(n + m)` で処理してください。

## 制約

- `0 <= left.length, right.length <= 100000`
- 各配列は `timestamp` の昇順にソート済み
- `timestamp` は整数
- `id` は配列内で一意
- 入力配列を破壊しないこと

## 入力例

```ts
mergeSortedEvents(
  [
    { id: "a", timestamp: 100 },
    { id: "c", timestamp: 300 },
  ],
  [
    { id: "b", timestamp: 200 },
    { id: "d", timestamp: 300 },
  ],
);
```

## 出力例

```ts
[
  { id: "a", timestamp: 100 },
  { id: "b", timestamp: 200 },
  { id: "c", timestamp: 300 },
  { id: "d", timestamp: 300 },
]
```
