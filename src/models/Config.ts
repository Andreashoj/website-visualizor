import { v4 as uuid } from 'uuid';

export default class Config implements IRow {
  id: string;
  layout: ILayout[] = [];

  constructor() {
    this.id = uuid();
  }
}
