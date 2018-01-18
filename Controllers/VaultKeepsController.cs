using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class VaultKeepsController : Controller
    {
        private readonly VaultKeepRepository db;
        public VaultKeepsController(VaultKeepRepository vaultKeepRepo)
        {
            db = vaultKeepRepo;
        }


        [HttpGet("{id}")]
        public IEnumerable<Keep> GetAll(int id)
        {
            return db.GetAll(id);
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public VaultKeep Post([FromBody]VaultKeep vaultKeep)
        {
            var user = HttpContext.User;
            var id = Int32.Parse(user.Identity.Name);
            vaultKeep.UserId = id;
            return db.Add(vaultKeep);
        }

    

        // DELETE api/values/5
        [Authorize]
        [HttpDelete("{id}")]
        public string Delete(int vaultId, int id)
        {
            return db.FindByIdAndRemove(vaultId, id);
        }
    }
}