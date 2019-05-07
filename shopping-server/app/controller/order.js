const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class OrderController extends Controller {
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const orderList = await ctx.service.order.index()
    if(orderList) {
      ctx.body = {
        ...so,
        data: orderList
      }
    }else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
  }

    // 根据userId查询订单
    async findOrderByUserId() {
      const ctx = this.ctx
      const orderList = await ctx.service.order.listByUserId(ctx.params.userId)
      await Promise.all(orderList.map(async product => {
        let detail = await ctx.service.product.show(product.dataValues.productId)
        product.dataValues.detail = detail
      }))
  
      ctx.body = {
        ...so,
        data: orderList
      }
      ctx.status = 200
  
    }

  // 查询单个商品
  async show() {
    const ctx = this.ctx
    const order = await ctx.service.order.show(ctx.params.id)
    if(order) {
      ctx.body = {
        ...so,
        data: order
      }
    }else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
  }



  // 创建一个商品
  async create() {
    const ctx = this.ctx
    const result = await ctx.service.order.create(ctx.request.body)
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
    const order = await ctx.service.order.show(id)
    if(!order) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.order.update(id, ctx.request.body)
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
    const order = await ctx.service.order.show(id)
    if(!order) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.order.destroy(id)
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

module.exports = OrderController
