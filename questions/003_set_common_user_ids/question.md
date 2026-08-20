# 共通ユーザーIDの抽出

## 問題文

2つのユーザーID配列 `left` と `right` が与えられます。

両方の配列に含まれるユーザーIDを、重複なしで返す `findCommonUserIds` を実装してください。

出力順は、`left` に最初に登場した順とします。

`Array.includes` を入れ子で使うような `O(n * m)` の実装ではなく、`Set` を利用して `O(n + m)` を目標にしてください。

## 制約

- `0 <= left.length, right.length <= 100000`
- 同じ配列内に同じユーザーIDが複数回現れる場合がある
- ユーザーIDは空文字ではない
- 入力配列を破壊しないこと

## 入力例

```ts
findCommonUserIds(
  ["alice", "bob", "alice", "charlie", "dave"],
  ["dave", "alice", "eve", "charlie"],
);
```

## 出力例

```ts
["alice", "charlie", "dave"]
```
