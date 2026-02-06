import { CreateCommonUsecase, UpdateCommonUsecase } from '../in-use/common';
import { BaseEntity, AuthorSignature } from '../in-use/shared';

export interface ProductBasicProps {
    title: string;
    description: string;
    categories: string[];
    menuId: string;
    price: number;
    media: string;
}

export interface ProductProps extends Partial<ProductBasicProps>, BaseEntity, AuthorSignature { }
