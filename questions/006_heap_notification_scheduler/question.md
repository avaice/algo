# 通知スケジューラ

## 問題文

指定時刻に実行する通知を管理する `NotificationScheduler` を実装してください。

`schedule` では通知を登録し、`popNext(currentTime)` では `executeAt <= currentTime` を満たす通知のうち、最も `executeAt` が小さいものを1件取り出して削除します。

同じ `executeAt` の通知が複数ある場合は、先に `schedule` された通知を優先してください。

`schedule` される `executeAt` は時系列順ではありません。登録済み通知を毎回全件ソートするのではなく、最小値を高速に取り出せるデータ構造を利用してください。

## 制約

- `notificationId` は一意
- 登録通知数は最大1000000件
- `executeAt` は整数
- `schedule` と `popNext` はどちらも多数回呼ばれる
- 期待時間計算量は `schedule` / 削除を伴う `popNext` ともに `O(log n)`

## 入力例

```ts
const scheduler = new NotificationScheduler();

scheduler.schedule("a", 300, "A");
scheduler.schedule("b", 100, "B");
scheduler.schedule("c", 200, "C");

scheduler.popNext(150);
scheduler.popNext(150);
scheduler.popNext(500);
```

## 出力例

```ts
{ notificationId: "b", message: "B" }
null
{ notificationId: "c", message: "C" }
```
