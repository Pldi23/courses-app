import { IUser } from './i-user';

export class UserEntity implements IUser {
  	public firstName: string;
  	public id: number;
  	public lastName: string;
}
