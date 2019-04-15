const Service = require('egg').Service

class ProductService extends Service {
  
  async index() {
    const list = await this.ctx.model.Product.findAll()
    return list
  }

  async show(id) {
    const product = await this.ctx.model.Product.findById(id)
    return product
  }

  async create({name, brandId, colorId, price, actPrice, isAct, mainPic}) {
    const product = await this.ctx.model.Product.create({name, brandId, colorId, price, actPrice, isAct, mainPic})
    return product
  }

  async update(id, {name, brandId, colorId, price, actPrice, isAct, mainPic}) {
    const product = await this.ctx.model.Product.update({name, brandId, colorId, price, actPrice, isAct, mainPic}, {where: {id: id}})
    return product
  }

  async destroy(id) {
    const result = await this.ctx.model.Product.destroy({where:{id: id}})
    return result
  }


}

module.exports = ProductService
