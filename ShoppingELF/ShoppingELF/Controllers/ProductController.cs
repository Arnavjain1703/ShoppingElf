using ShoppingELF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShoppingELF.Controllers
{
    public class ProductController : ApiController
    {
        [HttpGet]
        [Route("api/Product/Home")]
        public IHttpActionResult GetSuitableFor()
        {
            var x = new ProductRepository().GetSuitableFor();
            return Ok(x);
        }

        [HttpGet]
        [Route("api/Product/Category/{Suitableid}")]
        public IHttpActionResult GetCategory(int Suitableid)
        {
            var x = new ProductRepository().GetCategory(Suitableid);
            return Ok(x);
        }

        [HttpGet]
        [Route("api/Product/SubCategory/{Categoryid}")]
        public IHttpActionResult GetSubCategory(int Categoryid)
        {
            var x = new ProductRepository().GetSubCategory(Categoryid);
            return Ok(x);
        }

        [HttpGet]
        [Route("api/Product/GetProduct/{SubCategoryid}")]
        public IHttpActionResult GetProducts(int SubCategoryid)
        {
            var x = new ProductRepository().GetAllProduct(SubCategoryid);
            return Ok(x);
        }

        [HttpGet]
        [Route("api/Product/ProductDetails/{Productid}")]
        public IHttpActionResult GetProductDetails(int Productid)
        {
            var x = new ProductRepository().GetProductDetails(Productid);
            return Ok(x);
        }
    }
}
