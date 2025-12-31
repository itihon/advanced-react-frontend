import { describe, test, expect, jest } from '@jest/globals';
import fetchUserById from './loginByUserName'; 
import api from 'shared/api/api';
import { setUser } from 'entities/User';
import { beforeEach } from 'node:test';

jest.mock('shared/api/api');

const mockedAxios = jest.mocked(api, { shallow: false });

let dispatch = jest.fn();
let getState = jest.fn();

describe('loginByUserName', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('should be fulfilled with user data', async () => {
    const userData = { id: '1', username: 'user1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    const action = fetchUserById({ username: 'user1', password: 'pass1' });
    const result = await action(dispatch, getState, { api });

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(setUser(userData));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
  });

  test('should be rejected', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject({ status: 403 }));
    const action = fetchUserById({ username: 'user1', password: 'pass1' });
    const result = await action(dispatch, getState, { api });

    expect(result.meta.requestStatus).toBe('rejected');
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toBe(undefined);
  });
});