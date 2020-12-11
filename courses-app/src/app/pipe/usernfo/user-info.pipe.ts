import { Pipe, PipeTransform } from '@angular/core';
import {UserEntity} from '../../shared/user-entity';

@Pipe({
  	name: 'userInfo',
})
export class UserInfoPipe implements PipeTransform {

  public transform(user: UserEntity): unknown {
  	return `${user.firstName} ${user.lastName}`;
  }

}
