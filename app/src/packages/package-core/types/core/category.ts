// Category
import { UpdateCommonUsecase } from '../in-use/common';
import { Timestamps, BaseEntity, AuthorSignature } from '../in-use/shared';

export interface CategoryBasicProps {
    title: string;
    picture: string;
}

export interface CategoryProps extends CategoryBasicProps, BaseEntity, Timestamps, AuthorSignature { }

export interface CategoryCreateInput extends CategoryProps, UpdateCommonUsecase, BaseEntity { }

export interface CategoryUpdateInput {
    id: string;
    updates: Partial<CategoryBasicProps> & UpdateCommonUsecase;
}
