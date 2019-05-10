const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class DetailpicController extends Controller {
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const detailpicList = await ctx.service.detailpic.index()
    if(detailpicList) {
      ctx.body = {
        ...so,
        data: detailpicList
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
    const detailpic = await ctx.service.detailpic.show(ctx.params.id)
    if(detailpic) {
      ctx.body = {
        ...so,
        data: detailpic
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
    const result = await ctx.service.detailpic.create(ctx.request.body)
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
    const detailpic = await ctx.service.detailpic.show(id)
    if(!detailpic) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.detailpic.update(id, ctx.request.body)
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
    const detailpic = await ctx.service.detailpic.show(id)
    if(!detailpic) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.detailpic.destroy(id)
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

  // 根据商品id查找详情图
  async findDetailPicByProductId() {
    const ctx = this.ctx
    const productId = ctx.params.productId
    const detailpicList = await ctx.service.detailpic.listById(productId)
    ctx.body = detailpicList ? {
      ...so,
      data: detailpicList
    } : {
      ...fo
    }

    ctx.status = 200

  }
}

module.exports = DetailpicController
