const Service = require('egg').Service

class CartService extends Service {
  
  async index() {
    const list = await this.ctx.model.Cart.findAll()
    return list
  }

  async show(id) {
    const cart = await this.ctx.model.Cart.findById(id)
    return cart
  }

  async listByUserId(userId) {
    const list = await this.ctx.model.Cart.findAll({ where: { userId }})
    return list
  }

  async create({userId, productId, productNum, colorId}) {
    const cart = await this.ctx.model.Cart.create({userId, productId, productNum, colorId})
    return cart
  }

  async update(id, {userId, productId, productNum, colorId}) {
    const cart = await this.ctx.model.Cart.update({userId, productId, productNum, colorId}, {where: {id: id}})
    return cart
  }

  async destroy(id) {
    const result = await this.ctx.model.Cart.destroy({where:{id: id}})
    return result
  }


}

module.exports = CartService
