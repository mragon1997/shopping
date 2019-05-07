const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class CartController extends Controller {
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const cartList = await ctx.service.cart.index()
    if(cartList) {
      ctx.body = {
        ...so,
        data: cartList
      }
    }else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
  }

  // 根据userId查询购物车
  async findCartByUserId() {
    const ctx = this.ctx
    const cartList = await ctx.service.cart.listByUserId(ctx.params.userId)
    await Promise.all(cartList.map(async product => {
      let detail = await ctx.service.product.show(product.dataValues.productId)
      product.dataValues.detail = detail
      product.dataValues.sumPrice = product.dataValues.productNum * detail.price
    }))

    ctx.body = {
      ...so,
      data: cartList
    }
    ctx.status = 200

  }

  // 查询单个商品
  async show() {
    const ctx = this.ctx
    const cart = await ctx.service.cart.show(ctx.params.id)
    if(cart) {
      ctx.body = {
        ...so,
        data: cart
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
    const result = await ctx.service.cart.create(ctx.request.body)
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
    const cart = await ctx.service.cart.show(id)
    if(!cart) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.cart.update(id, ctx.request.body)
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
    const cart = await ctx.service.cart.show(id)
    if(!cart) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.cart.destroy(id)
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
// 用户结算购物车
async settlement() {
  const ctx = this.ctx
  const userId = ctx.params.userId
  const cartList = await ctx.service.cart.listByUserId(userId)
  const { address } = ctx.request.body

 
  await Promise.all(cartList.map(async product => {
    let body = {
      userId,
      address,
      productId: product.productId,
      productNum: product.productNum
    }
    await ctx.service.order.create(body)
  }))
  await ctx.service.cart.destroyByUserId(userId)

  ctx.body = {
    ...so
  }
  ctx.status = 200
}
}

module.exports = CartController
