export default interface AddCommentSchema {
  text?: string;
  error?: string;
}

export interface CommentToAdd<T> {
  apiUrl: string;
  commentBody: T;
}