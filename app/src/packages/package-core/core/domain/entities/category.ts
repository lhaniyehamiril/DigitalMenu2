import { CategoryProps } from "@/packages/package-core/types";


// Categoey
export class Category {
  private props: CategoryProps;

  constructor(props: CategoryProps) {
    this.props = props;
  }

  get id() { return this.props.id; }
  get title() { return this.props.title; }
  get createdAt() { return this.props.createdAt; }
  get updatedAt() { return this.props.updatedAt; }
  get updatedBy() { return this.props.updatedBy; }
  get createdBy() { return this.props.createdBy; }
}