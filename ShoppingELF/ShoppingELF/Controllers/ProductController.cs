using ShoppingELF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
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

        [HttpGet]
        [Route("api/Product/GetProductBySuitableID/{sid}")]
        public IHttpActionResult GetProductsBySuitableID(int sid)
        {
            //var y = new ProductRepository().GetCategory(sid);
            var x = new ProductRepository().GetProductsBySuitableID(sid);
            return Ok(x);
        }

        [HttpPost]
        [Route("api/Product/AddProduct/{subid}/{sid}/{Suitid}")]
        public IHttpActionResult AddProduct(int subid, int sid, int suitid, ProductModel model)
        {
            int x = new ProductRepository().AddProduct(subid, sid, suitid, model);
            return Ok("Product Added successfully");
        }

        [HttpPost]
        [Route("api/Product/AddSize/{pid}")]
        public IHttpActionResult AddProductSize(int pid, SizeModel model)
        {
            bool x = new ProductRepository().AddProductSize(pid, model);
            if (x)
                return Ok("Product Size Added");
            else
                return Ok("Their is some problem adding the product size");
        }

        [HttpPost]
        [Route("api/Product/EditProduct/{pid}")]
        public IHttpActionResult EditProduct(int pid, SizeModel model)
        {
            bool x = new ProductRepository().EditProduct(pid, model);
            if (x)
                return Ok("Product Details Updated successfully");
            else
                return Ok("Something Went Wrong , please try again later");
        }

        [HttpPost]
        [Route("api/Product/Delete/{pid}")]
        public

        [HttpPost]
        [Route("api/UploadImage/{sid}/{picid}")]
        public HttpResponseMessage PostUserImage(int sid)
        {
            Dictionary<string, object> dict = new Dictionary<string, object>();
            try
            {

                var httpRequest = HttpContext.Current.Request;

                foreach (string file in httpRequest.Files)
                {
                    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);

                    var postedFile = httpRequest.Files[file];
                    if (postedFile != null && postedFile.ContentLength > 0)
                    {

                        //int MaxContentLength = 1024 * 1024 * 1; //Size = 1 MB  

                        IList<string> AllowedFileExtensions = new List<string> { ".jpg", ".gif", ".png" };
                        var ext = postedFile.FileName.Substring(postedFile.FileName.LastIndexOf('.'));
                        var extension = ext.ToLower();
                        if (!AllowedFileExtensions.Contains(extension))
                        {

                            var message = string.Format("Please Upload image of type .jpg,.gif,.png.");

                            dict.Add("error", message);
                            return Request.CreateResponse(HttpStatusCode.BadRequest, dict);
                        }
                        //else if (postedFile.ContentLength > MaxContentLength)
                        //{

                        //    var message = string.Format("Please Upload a file upto 1 mb.");

                        //    dict.Add("error", message);
                        //    return Request.CreateResponse(HttpStatusCode.BadRequest, dict);
                        //}
                        else
                        {



                            var filePath = HttpContext.Current.Server.MapPath("~/ProductImage/" + postedFile.FileName + extension);

                            postedFile.SaveAs(filePath);


                        }
                    }

                    var message1 = string.Format("Image Updated Successfully.");
                    return Request.CreateErrorResponse(HttpStatusCode.Created, message1); ;
                }
                var res = string.Format("Please Upload a image.");
                dict.Add("error", res);
                return Request.CreateResponse(HttpStatusCode.NotFound, dict);
            }
            catch (Exception ex)
            {
                var res = string.Format("some Message");
                dict.Add("error", res);
                return Request.CreateResponse(HttpStatusCode.NotFound, dict);
            }
        }
    }
}
