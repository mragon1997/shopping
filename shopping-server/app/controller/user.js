const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class UserController extends Controller {
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const userList = await ctx.service.user.index()
    if (userList) {
      ctx.body = {
        ...so,
        data: userList
      }
    } else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
  }

  // 查询单个商品
  async show() {
    const ctx = this.ctx
    const user = await ctx.service.user.show(ctx.params.id)
    if (user) {
      ctx.body = {
        ...so,
        data: user
      }
    } else {
      ctx.body = {
        ...fo
      }
    }
    ctx.status = 200
  }

  async login() {
    const ctx = this.ctx
    const { tel, password } = ctx.request.body
    const user = await ctx.service.user.findByTel(tel)
    if (user[0] && user[0].dataValues.password == password) {
      ctx.body = {
        ...so,
        data: user
      }
    } else {
      ctx.body = {
        ...fo,
        message: '账号和密码不匹配'
      }
    }

    ctx.status = 200
  }



  // 创建一个商品
  async create() {
    const ctx = this.ctx
    let { tel } = ctx.request.body
    const user = await ctx.service.user.findByTel(tel)
    if (user[0]) {
      ctx.body = {
        ...fo,
        message: '用户已存在！'
      }
    } else {
      const result = await ctx.service.user.create({ ...ctx.request.body, roleId: 3 })
      if (result) {
        ctx.body = {
          ...so,
          data: result
        }
      } else {
        ctx.body = {
          ...fo
        }
      }
    }



    ctx.status = 200
  }

  // 更新商品状态
  async update() {
    const ctx = this.ctx
    const id = ctx.params.id
    const user = await ctx.service.user.show(id)
    if (!user) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    } else {
      const result = await ctx.service.user.update(id, ctx.request.body)
      if (result) {
        ctx.body = {
          ...so
        }
      } else {
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
    const user = await ctx.service.user.show(id)
    if (!user) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    } else {
      const result = await ctx.service.user.destroy(id)
      if (result) {
        ctx.body = {
          ...so
        }
      } else {
        ctx.body = {
          ...fo
        }
      }
    }
    ctx.status = 200
  }
}

module.exports = UserController
