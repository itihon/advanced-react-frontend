import type { ArticleBlockType, ArticleType } from "../consts/articleConsts";

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export default interface Article {
  id: string;
  authorId: string;
  title: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  content: string;
}

export interface ArticlePreview extends Article {
  excerpt?: string;
}