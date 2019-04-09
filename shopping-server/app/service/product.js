const Service = require('egg').Service

class ProductService extends Service {
  async index() {
    const todolist = await this.ctx.model.Product.findAll()
    return todolist
  }
}

module.exports = ProductService
