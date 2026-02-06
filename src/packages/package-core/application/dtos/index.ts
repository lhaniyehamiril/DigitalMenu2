// All dto's lives here
// Request types ends with Request
// Response types ends with Response

import { BaseEntity, CategoryBasicProps, CategoryProps, MenuProps, ProductBasicProps, ProductProps, UserProps } from "@/packages/package-core/types";

// user Login and Sign Up
// ---- Sign Up Request
export interface SignUpRequest {
    email: string;
    password: string;
    name?: string;
};
// Sign Up Response
export interface SignUpResponse {
    user: Required<Pick<UserProps, 'id' | 'email'>> & Partial<Omit<UserProps, 'password'>>;
    token: string;
};
// Sign in Request
export interface SignInRequest {
    email: string;
    password: string;
};
// Sign in Response
export type SignInResponse = {
    user: Required<Pick<UserProps, 'id' | 'email'>> & Partial<Omit<UserProps, 'password'>>;
    token: string
} | { message: string; status: number };

// ---- Category
// Create category request
export interface CreateCategoryRequest extends CategoryBasicProps { };
// Create category response
export interface CreateCategoryResponse extends CategoryBasicProps { id: string };
// LIst all categories by menu id Response
export interface ListCategoriesByMenuIdResponse extends Array<CategoryProps> { };
// LIst all categories Response
export interface ListCategoriesResponse extends Array<CategoryProps> { };
// Update category reques
export interface UpdateCategoryRequest {
    id: string;
    updates: Partial<CategoryProps>
};
// Update category response
export interface UpdatedCategoryResponse extends CategoryProps { };

// ---- Menu
// Create Menu Request
export interface CreateMenuRquest extends MenuProps { };
// Create Menu Response
export interface CreateMenuResponse extends MenuProps, BaseEntity { };
// Find menu By Id Response
export interface FindMenuByIdResponse extends MenuProps, BaseEntity { };
// Find menu by userId Response
export interface FindMenuByUserIdResponse extends MenuProps, BaseEntity { };
// List menu's Response
export interface ListMenusResponse extends Array<MenuProps & BaseEntity> { };
// Update menu Request
export interface UpdateMenuRequest extends BaseEntity {
    data: Partial<MenuProps>
};
// Update menu Response
export interface UpdateMenuResponse extends MenuProps, BaseEntity { };

// ---- Product
// Add Product Request
export interface AddProductRequest extends ProductBasicProps { };
// Add Product Response
export interface AddProductResponse extends ProductBasicProps, BaseEntity { };
// Find many Product by category Response
export interface FindManyProductByCategoryResponse extends Array<ProductProps> { };
// Find Product by id Response
export interface FindProductByIdResponse extends ProductProps { };
// Update product Request
export interface UpdateProductRequest extends BaseEntity {
    updates: Partial<ProductBasicProps>
};
// Update product Response
export interface UpdateProductResponse extends ProductProps { };

// ---- User
// Find User by id Response
export default interface FindUserByIdResponse extends BaseEntity {
    email: string;
    name?: string;
    avatar?: string;
};