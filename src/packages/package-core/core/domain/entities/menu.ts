import { BaseEntity, MenuProps } from "@/packages/package-core/types";

// Menu
export class Menu {
    private props: Partial<MenuProps & BaseEntity>;

    constructor(props: Partial<MenuProps & BaseEntity>) {
        this.props = props;
    }

    get id() { return this.props.id; }
    get userId() { return this.props.userId }
    get name() { return this.props.name; }
    get subname() { return this.props.subname; }
    get avatar() { return this.props.avatar; }
    get bio() { return this.props.bio; }
    get connections() { return this.props.connections; }
    get displayId() { return this.props.displayId; }
}