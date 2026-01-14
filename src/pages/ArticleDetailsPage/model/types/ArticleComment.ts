export default interface ArticleComment {
  id?: string;
  articleId: string;
  userId: string;
  text: string;
}