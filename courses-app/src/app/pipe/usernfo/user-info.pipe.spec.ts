import { UserInfoPipe } from './user-info.pipe';

describe('UserInfoPipe', (): void => {
  	it('create an instance', (): void => {
  		const pipe: UserInfoPipe = new UserInfoPipe();
  		expect(pipe).toBeTruthy();
  });
});
