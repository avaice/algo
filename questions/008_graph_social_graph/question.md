# ソーシャルグラフ探索

## 問題文

ユーザー同士の友達関係を管理する `SocialGraph` を実装してください。

友達関係は双方向です。

以下の3つの操作を実装します。

- `addFriend(userA, userB)`
  - 2人を友達として登録する
  - 同じ友達関係が複数回追加されても、重複して保持する必要はない
- `canReach(fromUser, toUser)`
  - 友達関係を0回以上たどって `toUser` に到達できるか返す
  - このメソッドではDFS（深さ優先探索）を使うことを想定する
- `getDistance(fromUser, toUser)`
  - `fromUser` から `toUser` までの最短の友達関係数を返す
  - 同一人物なら `0`
  - 到達不能なら `null`
  - このメソッドではBFS（幅優先探索）を使うことを想定する

循環する友達関係が存在しても無限ループしないよう、一度訪れたユーザーを管理してください。

## 制約

- ユーザー数は最大1000000人
- 友達関係は最大5000000件
- ユーザーIDは空文字ではない
- 自分自身への友達追加は与えられない
- 期待時間計算量は1回の探索につき `O(V + E)` 以下

## 入力例

```ts
const graph = new SocialGraph();

graph.addFriend("alice", "bob");
graph.addFriend("bob", "charlie");
graph.addFriend("bob", "dave");

graph.canReach("alice", "dave");
graph.getDistance("alice", "charlie");
graph.getDistance("alice", "unknown");
```

## 出力例

```text
true
2
null
```
