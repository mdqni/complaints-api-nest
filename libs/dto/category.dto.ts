import {IsString} from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    name!: string;

    @IsString()
    description!: string;
}

export class CategoryResponseDto {
    category!: CategoryDto;
}

export class CategoryDto {
    id!: string;
    name!: string;
    description!: string;
    createdAt!: string;
    updatedAt!: string;
}