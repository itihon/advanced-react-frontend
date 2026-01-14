export default interface LoginSchema {
  username: string;
  password: string;
  avatar?: string;
  isLoading: boolean;
  error?: string;
}