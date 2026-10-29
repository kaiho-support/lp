# 開豊ジャパン 公式LP

株式会社開豊ジャパン（Galleria 李朝）の会社紹介ページ（1ページ）。
Astro の静的出力（SSG）を、GitHub Actions から さくらレンタルサーバへ FTPS でデプロイします。

- 公開URL: https://kaihojpn.com/lp/
- デプロイ先: さくら `~/www/lp/`
- 依存は Astro のみ。実行時 JS はゼロ。

## 編集と公開の流れ

1. このリポジトリを編集し、Pull Request を出す（CIでビルド確認が走ります）
2. `main` にマージすると、自動でビルド→FTPSデプロイされます
3. 手動実行も可能: Actions タブ →「Deploy to Sakura」→ Run workflow

## ローカル開発

```bash
npm ci
npm run dev      # 開発サーバ
npm run build    # dist/ に静的出力
npm run preview  # 出力の確認
```

Node は `.node-version`（24）を使用してください。

## 運用上の注意

- デプロイは `www/lp/` フォルダの中だけを対象にし、危険な全削除（clean slate）は使いません。
  フォルダ外の既存サイトやシステムには触れません。
- サイトは `/lp/` 配下で公開する前提で `astro.config.mjs` の `base: '/lp'` が設定されています。
  ルート直下へ移設する場合は `base` と `index.astro` 内の canonical / og:url を合わせて変更してください。
- お問い合わせフォーム（Googleフォーム）のURLが届いたら、`src/pages/index.astro` の
  Contact セクションの TODO 箇所にボタンを追加してください。
- FTP の接続情報は GitHub Secrets（FTP_SERVER / FTP_USERNAME / FTP_PASSWORD）で管理し、
  コードやこのファイルには書かないでください。

## セキュリティ方針

- GitHub Actions は全てコミットSHAで固定し、`permissions` は最小（contents: read）。
- Dependabot が npm と Actions の更新を週次で提案します。
- 静的サイトのためサーバ側で動くコードはなく、フォームは Google フォーム側で受けます。
