const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class ActProductController extends Controller {
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const actproductList = await ctx.service.actproduct.index()
    if(actproductList) {
      ctx.body = {
        ...so,
        data: actproductList
      }
    }else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
  }

  // 查询单个商品
  async show() {
    const ctx = this.ctx
    const actproduct = await ctx.service.actproduct.show(ctx.params.id)
    if(actproduct) {
      ctx.body = {
        ...so,
        data: actproduct
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
    const result = await ctx.service.actproduct.create(ctx.request.body)
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
    const actproduct = await ctx.service.actproduct.show(id)
    if(!actproduct) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.actproduct.update(id, ctx.request.body)
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
    const actproduct = await ctx.service.actproduct.show(id)
    if(!actproduct) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.actproduct.destroy(id)
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

module.exports = ActProductController
