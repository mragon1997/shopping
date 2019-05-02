const Service = require('egg').Service

class OrderService extends Service {
  
  async index() {
    const list = await this.ctx.model.Order.findAll()
    return list
  }

  async show(id) {
    const order = await this.ctx.model.Order.findById(id)
    return order
  }

  async create({userId, productId, productNum, colorId, address}) {
    const order = await this.ctx.model.Order.create({userId, productId, productNum, colorId, address})
    return order
  }

  async update(id, {userId, productId, productNum, colorId, address}) {
    const order = await this.ctx.model.Order.update({userId, productId, productNum, colorId, address}, {where: {id: id}})
    return order
  }

  async destroy(id) {
    const result = await this.ctx.model.Order.destroy({where:{id: id}})
    return result
  }


}

module.exports = OrderService
