using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class ProductRepository
    {
        public List<SuitableForModel> GetSuitableFor()
        {
            using(var context = new ShoppingELFEntities())
            {
                var result = context.SuitableForTable
                    .Select(x => new SuitableForModel()
                    {
                        SuitableID = x.SuitableID,
                        SuitableName = x.SuitableName
                    }).ToList();
                return result;
            }
        }

        public List<CategoryModel> GetCategory(int SuitableID)
        {
            using(var context = new ShoppingELFEntities())
            {
                var result = context.CategoryTable
                    .Where(x => x.SuitableID == SuitableID)
                    .Select(x => new CategoryModel()
                    {
                        CategoryID = x.CategoryID,
                        SuitableID = x.SuitableID,
                        CategoryName = x.CategoryName
                    }).ToList();
                return result;
            }
        }

        public List<SubCategoryModel> GetSubCategory(int CategoryID)
        {
            using(var context = new ShoppingELFEntities())
            {
                var result = context.SubCategoryTable
                    .Where(x => x.CategoryID == CategoryID)
                    .Select(x => new SubCategoryModel()
                    {
                        SubCategoryID = x.SubCategoryID,
                        SubCategoryName = x.SubCategoryName,
                        CategoryID = x.CategoryID
                    }).ToList();
                return result;
            }
        }
    }
}