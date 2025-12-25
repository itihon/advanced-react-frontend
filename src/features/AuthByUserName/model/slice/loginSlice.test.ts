import { describe, test, expect, beforeAll } from '@jest/globals';
import { loginReducer, setPassword, setUserName, clearError } from 'features/AuthByUserName';
import LoginSchema from '../types/LoginSchema';

describe('loginSlice', () => {
  let state: LoginSchema = { username: '', password: '', isLoading: false };

  beforeAll(() => {
    state = { username: '', password: '', isLoading: false };
  });

  test('set username', () => {
    expect(loginReducer(state, setUserName('user1')).username).toBe('user1');
  });
  
  test('set password', () => {
    expect(loginReducer(state, setPassword('123')).password).toBe('123');
  });

  test('clear error', () => {
    state.error = 'Error';
    expect(loginReducer(state, clearError()).error).toBe(undefined);
  });
});