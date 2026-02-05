- [x] db.json and types in article.ts remove subtitle as it should be kept in the content, remove no more necessary fields: blocks etc.
- [x] remove no more necessary ArticleView.tsx
- [x] HTML sanitizer, parser with the replace method to replace img tags with AppImg components
- [x] create a reusable useArticleContent hook in entities/Article to use in ArticleCard.tsx and ArticleDetails.tsx
- [ ] remove no more necessary ArticleImageBlockComponent.tsx, ArticleCodeBlockComponent.tsx, ArticleTextBlockComponent.tsx

# Bugs
- [ ] sing in/sign out on ArticlesPage.tsx and ArticleDetails.tsx
- [ ] scroll restoration doesn't work with grid on ArticlesPage, [virtuoso issue #1114](https://github.com/petyosi/react-virtuoso/issues/1114)