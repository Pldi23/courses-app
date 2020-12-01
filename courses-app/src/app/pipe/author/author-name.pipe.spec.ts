import { AuthorNamePipe } from './author-name.pipe';

describe('AuthorNamePipe', (): void => {
	it('create an instance', (): void => {
		const pipe: AuthorNamePipe = new AuthorNamePipe();
		expect(pipe).toBeTruthy();
  });
});
