import { BaseParams } from '../../../common/dto/base.params.dto';

export class CategoryParams extends BaseParams {
  get categoryId(): string {
    return this.id;
  }
}
