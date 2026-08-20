# APIアクセス集計

## 問題文

APIアクセスログの配列が与えられます。

各ユーザーが各エンドポイントへ何回アクセスしたかを集計する `countRequests` を実装してください。

戻り値は `Map<userId, Map<endpoint, count>>` としてください。

ログをユーザー数やエンドポイント数ごとに何度も走査するのではなく、入力を1回走査して集計することを目標にしてください。

## 制約

- `0 <= logs.length <= 100000`
- `userId` と `endpoint` は空文字ではない
- 入力順に意味はない
- 期待時間計算量は `O(n)`

## 入力例

```ts
countRequests([
  { userId: "alice", endpoint: "/users" },
  { userId: "bob", endpoint: "/users" },
  { userId: "alice", endpoint: "/users" },
  { userId: "alice", endpoint: "/posts" },
]);
```

## 出力例

```ts
Map([
  [
    "alice",
    Map([
      ["/users", 2],
      ["/posts", 1],
    ]),
  ],
  ["bob", Map([["/users", 1]])],
]);
```
