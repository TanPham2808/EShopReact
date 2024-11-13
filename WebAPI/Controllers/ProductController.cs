using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Entites;

namespace WebAPI.Controllers
{
    public class ProductController : BaseAPIController
    {
        private readonly StoreContext _storeContext;
        public ProductController(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetProduct()
        {
            var response = await _storeContext.Products.ToListAsync();
            return Ok(response);
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            Product product = await _storeContext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (product == null) return NotFound();
            return Ok(product);
        }

        [HttpGet("TestError")]
        public Task<IActionResult> TestErr()
        {
            throw new Exception("Test Error");
        }
    }
}
