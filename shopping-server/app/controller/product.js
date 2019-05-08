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
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const productList = await ctx.service.product.index()

    await Promise.all(productList.map(async product => {
      product.dataValues.detail = await ctx.service.product.show(product.dataValues.id)
    }))


    ctx.body = {
      ...so,
      data: productList
    }
    ctx.status = 200
  }

  // 查询单个商品
  async show() {
    const ctx = this.ctx
    const product = await ctx.service.product.show(ctx.params.id)
    const picList = await ctx.service.detailpic.listById(ctx.params.id)
    product.dataValues.picList = picList
    ctx.body = {
      ...so,
      data: product
    }
    ctx.status = 200
  }

  // 创建一个商品
  async create() {
    const ctx = this.ctx
    const result = await ctx.service.product.create(ctx.request.body)
    if(result) {
      ctx.body = {
        ...so,
        data: result
      }
    }else {
      ctx.body = {
        ...fo
      }
    }

    ctx.status = 200
  }

  // 更新商品状态
  async update() {
    const ctx = this.ctx
    const id = ctx.params.id
    const product = await ctx.service.product.show(id)
    if(!product) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.product.update(id, ctx.request.body)
      if(result){
        ctx.body = {
          ...so
        }
      }else {
        ctx.body = {
          ...fo
        }
      }
    }
    ctx.status = 200
  }

  // 删除一条商品
  async destroy() {
    const ctx = this.ctx
    const id = ctx.params.id
    const product = await ctx.service.product.show(id)
    if(!product) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.product.destroy(id)
      if(result) {
        ctx.body = {
          ...so
        }
      }else {
        ctx.body = {
          ...fo
        }
      }
    }
    ctx.status = 200
  }
}

module.exports = ProductController
