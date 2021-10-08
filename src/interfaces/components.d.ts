declare interface ITheme {
  value: string;
  title: string;
  primaryColor: string;
  secondaryColor: string;
  nuanceColor: string;
  nuanceOffColor: string;
}

declare interface IConfiguration {
  rows: IRow[];
  id: string;
}

declare interface IRow {
  layout: ILayout[];
  id: string;
}

declare interface ILayout {
  id: string;
  title: string;
  value: any;
  components: IColumn;
}

declare interface IComponent {
  id: string;
  title: string;
  value: any;
}

declare interface IColumn {
  [key: string]: { components: IComponent[] };
}
