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
        [Route("api/Product/Category/{id}")]
        public IHttpActionResult GetCategory(int id)
        {
            var x = new ProductRepository().GetCategory(id);
            return Ok(x);
        }

        [HttpGet]
        [Route("api/Product/SubCategory/{id}")]
        public IHttpActionResult GetSubCategory(int id)
        {
            var x = new ProductRepository().GetSubCategory(id);
            return Ok(x);
        }
    }
}
