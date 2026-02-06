// Category
import { UpdateCommonUsecase } from '../in-use/common';
import { BaseEntity } from '../in-use/shared';

export interface CategoryBasicProps {
    name: string;
    image: string;
    menuId: string
}

export interface CategoryProps extends CategoryBasicProps, BaseEntity{ }
