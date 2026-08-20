# algo

うろ覚えのデータ構造・アルゴリズム系知識を思い出すためのリポジトリ

## 問題作成ルール（もしあなたがAIだったら読んでね）

```
questions/
└── {ID}_{NAME}/
    ├── ans.ts
    ├── ans.test.ts
    └── question.md
```

- 問題ごとにquestionsの中に{ID}\_{NAME}ディレクトリを作る
- question.mdには問題文・制約・入力例・出力例を記述する(question.example.md参照)
- ans.tsには関数のインターフェースを用意して、ユーザーは関数の中身だけ書けば良い形にする
- ans.test.tsがすべて通ったら正解となるようにテストケースを作成する
