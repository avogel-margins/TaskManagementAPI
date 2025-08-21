import { BaseParams } from '../../../common/dto/base.params.dto';
export class UserParams extends BaseParams {
  get userId(): string {
    return this.id;
  }
}
