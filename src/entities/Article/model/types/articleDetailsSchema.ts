import Article from "./article";

export default interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}