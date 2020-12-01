import { UserEntity } from './user-entity';

describe('UserEntity', (): void => {
  	it('should create an instance', (): void => {
		expect(new UserEntity(1, 'name', 'lastname', 'login', 'pass')).toBeTruthy();
  	});
});
