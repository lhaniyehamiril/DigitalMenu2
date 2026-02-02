import { ProductProps } from "@/packages/package-core/types";

// Product
export class Product {
  private props: Partial<ProductProps>;

  constructor(props: Partial<ProductProps>) {
    this.props = props;
  }

  get id() { return this.props.id; }
  get menuId() { return this.props.menuId }
  get categories() { return this.props.categories; }
  get media() { return this.props.media }
  get title() { return this.props.title; }
  get description() { return this.props.description; }
  get price() { return this.props.price; }
}