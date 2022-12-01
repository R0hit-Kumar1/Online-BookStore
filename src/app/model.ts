export interface Book {
    title:string;
    description: string;
    author: string;
    price :number;
    buyLink: string;
    imageUrl: string;
}

export interface BookCategory{
    title:string;
    categoryId:string;
}