const Service = require('egg').Service

class DetailpicService extends Service {
  
  async index() {
    const list = await this.ctx.model.Detailpic.findAll()
    return list
  }
  async listById(productId) {
    const list = await this.ctx.model.Detailpic.findAll({where:{productId: productId}})
    return list
  }

  async show(id) {
    const detailpic = await this.ctx.model.Detailpic.findById(id)
    return detailpic
  }

  async create({productId, picAddress}) {
    const detailpic = await this.ctx.model.Detailpic.create({productId, picAddress})
    return detailpic
  }

  async update(id, {productId, picAddress}) {
    const detailpic = await this.ctx.model.Detailpic.update({productId, picAddress}, {where: {id: id}})
    return detailpic
  }

  async destroy(id) {
    const result = await this.ctx.model.Detailpic.destroy({where:{id: id}})
    return result
  }


}

module.exports = DetailpicService
