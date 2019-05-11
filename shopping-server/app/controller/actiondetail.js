const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class ActionDetailController extends Controller {
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const actiondetailList = await ctx.service.actiondetail.index()
    if(actiondetailList) {
      ctx.body = {
        ...so,
        data: actiondetailList
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
    const actiondetail = await ctx.service.actiondetail.show(ctx.params.id)
    if(actiondetail) {
      ctx.body = {
        ...so,
        data: actiondetail
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
    const result = await ctx.service.actiondetail.create(ctx.request.body)
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
    const actiondetail = await ctx.service.actiondetail.show(id)
    if(!actiondetail) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.actiondetail.update(id, ctx.request.body)
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
    const actiondetail = await ctx.service.actiondetail.show(id)
    if(!actiondetail) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.actiondetail.destroy(id)
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

  async conuntLoginDate() {
    const ctx = this.ctx
    const countList = await ctx.service.actiondetail.conuntLoginDate()
    if(countList) {
      ctx.body = {
        ...so,
        data: countList
      }
    }else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
    
  }

  async countBrowseProduct() {
    const ctx = this.ctx
    const countList = await ctx.service.actiondetail.countBrowseProduct()

    await Promise.all(countList.map(async product => {
      let detail = await ctx.service.product.show(product.logId)
      product.name = detail.name
    }))
    if(countList) {
      ctx.body = {
        ...so,
        data: countList
      }
    }else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
    
  }
}

module.exports = ActionDetailController
