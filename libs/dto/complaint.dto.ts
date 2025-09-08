import {IsString, IsNotEmpty} from 'class-validator';
import {ComplaintStatus} from "@libs/prisma/generated/client";
import {Category} from "@prisma/client";

class CreateComplaintDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsString()
    @IsNotEmpty()
    categoryId!: string;

    @IsString()
    @IsNotEmpty()
    barcode!: string;
}

class ComplaintDto {
    id!: string;
    title!: string;
    description!: string;
    categoryId!: string;
    barcode!: string;
    category?: Category;
    status!: ComplaintStatus;
    createdAt!: string;
    updatedAt?: string;
}

class ComplaintResponseDto {
    complaint!: ComplaintDto;
}

export {CreateComplaintDto, ComplaintResponseDto};
