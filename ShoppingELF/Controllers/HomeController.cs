using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ShoppingELF.Models;

namespace ShoppingELF.Controllers
{
    public class HomeController : Controller
    {
        DataContext Db = new DataContext();
        public ActionResult Index()
        {
            var data = Db.users.ToList();
            return View(data);
        }
    }
}