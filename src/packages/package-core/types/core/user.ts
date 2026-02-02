// user
import { BaseEntity } from '../in-use/shared';

export interface UserProps extends BaseEntity {
  email: string;
  password: string;
  name: string;
  avatar: string;
}