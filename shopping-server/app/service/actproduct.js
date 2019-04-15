const Service = require('egg').Service

class ActProductService extends Service {
  
  async index() {
    const list = await this.ctx.model.Actproduct.findAll()
    return list
  }

  async show(id) {
    const ActProduct = await this.ctx.model.Actproduct.findById(id)
    return ActProduct
  }

  async create({actId, productId}) {
    const ActProduct = await this.ctx.model.Actproduct.create({actId, productId})
    return ActProduct
  }

  async update(id, {actId, productId}) {
    const ActProduct = await this.ctx.model.Actproduct.update({actId, productId}, {where:{id: id}})
    return ActProduct
  }

  async destroy(id) {
    const result = await this.ctx.model.Actproduct.destroy({where:{id: id}})
    return result
  }


}

module.exports = ActProductService
