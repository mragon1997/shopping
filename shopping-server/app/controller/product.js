const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class ProductController extends Controller {
  async index() {
    const ctx = this.ctx

    // const productList = await ctx.service.product.index()

    console.log('对象模型数组：', this.ctx.model.Act)
    const productList = await this.ctx.model.Act.findAll()

    ctx.body = {
      ...so,
      data: productList
    }

    ctx.status = 200
  }
}

module.exports = ProductController
