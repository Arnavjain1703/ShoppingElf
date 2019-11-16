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
        [Route("api/Product/AddProduct/{subid}/{Suitid}")]
        public IHttpActionResult AddProduct(int subid, int suitid, ProductModel model, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(x => x.email == username);

                if(seller != null && seller.Role == "Seller")
                {
                    int x = new ProductRepository().AddProduct(subid, seller.SellerID, suitid, model);
                    return Ok(x);
                }
                else
                    return Unauthorized();
            }
        }

        [HttpPost]
        [Route("api/Product/AddSize/{pid}")]
        public IHttpActionResult AddProductSize(int pid, SizeModel model, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(x => x.email == username);

                if (seller != null && seller.Role == "Seller")
                {
                    bool x = new ProductRepository().AddProductSize(pid, model);
                    if (x)
                        return Ok("Product Size Added");
                    else
                        return Ok("Their is some problem adding the product size");
                }
                else
                    return Unauthorized();
            }
        }

        [HttpPost]
        [Route("api/Product/EditProduct/{pid}")]
        public IHttpActionResult EditProduct(int pid, SizeModel model, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(x => x.email == username);
                
                if (seller != null && seller.Role == "Seller")
                {
                    bool x = new ProductRepository().EditProduct(pid, model);
                    if (x)
                        return Ok("Product Details Updated successfully");
                    else
                        return BadRequest("Something Went Wrong , please try again later");
                }
                else
                    return Unauthorized();
            }
        }

        [HttpPost]
        [Route("api/Product/Delete/Size/{pid}")]
        public IHttpActionResult DeleteProductSize(int pid, string token)
        {
            using (ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(x => x.email == username);
                
                if (seller != null && seller.Role == "Seller")
                {
                    bool x = new ProductRepository().DeleteSize(pid);
                    if (x)
                        return Ok("Size Removed successfully");
                    else
                        return BadRequest("Unable to proccess request");
                }
                else
                    return Unauthorized();
            }
        }

        [HttpPost]
        [Route("api/Product/Delete/{pid}")]
        public IHttpActionResult DeleteProduct(int pid, string token)
        {
            using (ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(x => x.email == username);
                
                if (seller != null && seller.Role == "Seller")
                {
                    bool x = new ProductRepository().DeleteProduct(pid);
                    if (x)
                        return Ok("Product deleted successfully");
                    else
                        return BadRequest("Unable to delete product");
                }
                else
                    return Unauthorized(); 
            }
        }

        [HttpGet]
        [Route("api/Product/Seller/Show")]
        public IHttpActionResult ShowSellerProduct(string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(x => x.email == username);
                
                if (seller != null && seller.Role == "Seller")
                {
                    var x = new ProductRepository().ShowSellerProduct(seller.SellerID);
                    return Ok(x);
                }
                else
                    return Unauthorized();
            }
        }

        [HttpGet]
        [Route("api/Product/Seller/Show/Size/{pid}")]
        public IHttpActionResult ShowSellerProductSize(int pid, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(x => x.email == username);
                
                if (seller != null && seller.Role == "Seller")
                {
                    var x = new ProductRepository().ShowSellerProductSize(pid);
                    return Ok(x);
                }
                else
                    return Unauthorized();
            }
        }

        [HttpPost]
        [Route("api/UploadImage/{pid}/{picimg}")]
        public HttpResponseMessage PostUserImage(int pid, int picimg, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                string username = TokenManager.ValidateToken(token);
                seller = context.SellerTable.FirstOrDefault(m => m.email == username);
                if (seller != null && seller.Role == "Seller")
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
                                IList<string> AllowedFileExtensions = new List<string> { ".jpg", ".gif", ".png" };
                                var ext = postedFile.FileName.Substring(postedFile.FileName.LastIndexOf('.'));
                                var extension = ext.ToLower();
                                if (!AllowedFileExtensions.Contains(extension))
                                {
                                    var message = string.Format("Please Upload image of type .jpg,.gif,.png.");
                                    dict.Add("error", message);
                                    return Request.CreateResponse(HttpStatusCode.BadRequest, dict);
                                }
                                else
                                {
                                    var filePath = HttpContext.Current.Server.MapPath("~/ProductImage/" + postedFile.FileName);
                                    postedFile.SaveAs(filePath);
                                    string imagepath = "/ProductImage/" + postedFile.FileName;
                                    int image = new ProductRepository().ImageUpload(pid, picimg, imagepath);
                                    if (image == 2)
                                        return Request.CreateResponse(HttpStatusCode.NotFound, "Product Not found");
                                    if (image == 0)
                                        return Request.CreateResponse(HttpStatusCode.BadRequest, "Your image might be greater than the 1mb ,please upload a valid image");

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
                        var res = string.Format("please check your internet connection");
                        dict.Add("error", res);
                        return Request.CreateResponse(HttpStatusCode.NotFound, dict);
                    }
                }
                else
                    return Request.CreateResponse(HttpStatusCode.Forbidden, "Access to this page is denied");
            }
        }

    }
}
