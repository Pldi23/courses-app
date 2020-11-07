import { UserEntity } from './user-entity';

describe('UserEntity', (): void => {
  	it('should create an instance', (): void => {
		expect(new UserEntity()).toBeTruthy();
  	});
});
