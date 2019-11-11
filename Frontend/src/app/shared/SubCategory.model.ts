export class SubCategory
{
    SubCategoryID:number;
    SubCategoryName:string;
    CategoryID:number;


constructor( SubCategoryID:number,SubCategoryName:string,CategoryID:number)
{
    this.CategoryID=CategoryID;
    this.SubCategoryName=SubCategoryName;
    this.SubCategoryID=SubCategoryID;
}
}