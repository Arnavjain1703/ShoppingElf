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

        public List<ProductModel> GetAllProduct(int id)
        {
            using(var context = new ShoppingELFEntities())
            {
                var result = context.ProductTable
                    .Where(x => x.SubCategoryID == id)
                    .Select(x => new ProductModel()
                    {
                        ProductID = x.ProductID,
                        productName = x.productName,
                        productBrand = x.productBrand,
                        productDetails = x.productDetails,
                        picture1 = x.picture1,
                        picture2 = x.picture2,
                        picture3 = x.picture3,
                        picture4 = x.picture4,
                        SellerID = x.SellerID,
                        SubCategoryID = x.SubCategoryID
                    }).ToList();
                return result;
            }
        }

        public List<SizeModel> GetProductDetails(int id)
        {
            using(var context = new ShoppingELFEntities())
            {
                var result = context.SizeTable
                    .Where(x => x.ProductID == id)
                    .Select(x => new SizeModel()
                    {
                        PID = x.PID,
                        ProductID = x.ProductID,
                        productSize = x.productSize,
                        productQuantity = x.productQuantity,
                        productPrice = x.productPrice,
                        ProductModel = new ProductModel()
                        {
                            productName = x.ProductTable.productName,
                            productBrand = x.ProductTable.productBrand,
                            productDetails = x.ProductTable.productDetails,
                            ProductID = x.ProductTable.ProductID
                        }
                    }).ToList();
                return result;
            }
        }
    }
}