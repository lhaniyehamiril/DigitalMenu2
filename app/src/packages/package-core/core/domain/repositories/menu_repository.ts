import { Menu } from "../entities/menu";

export interface MenuRepository {
  findById(id: string): Promise<Menu | null>;
  findByDisplayId(userId: string): Promise<Menu[]>;
  create(menu: Menu): Promise<Menu>;
  update(id: string, menu: Partial<Menu>): Promise<Menu>;
  delete(id: string): Promise<boolean>;
}