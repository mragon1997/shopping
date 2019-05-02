const Service = require('egg').Service

class BrandService extends Service {
  
  async index() {
    const list = await this.ctx.model.Brand.findAll()
    return list
  }

  async show(id) {
    const brand = await this.ctx.model.Brand.findById(id)
    return brand
  }

  async create({brandName}) {
    const brand = await this.ctx.model.Brand.create({brandName})
    return brand
  }

  async update(id, {brandName}) {
    const brand = await this.ctx.model.Brand.update({brandName}, {where: {id: id}})
    return brand
  }

  async destroy(id) {
    const result = await this.ctx.model.Brand.destroy({where:{id: id}})
    return result
  }


}

module.exports = BrandService
