const Service = require('egg').Service

class ColorService extends Service {
  
  async index() {
    const list = await this.ctx.model.Color.findAll()
    return list
  }

  async show(id) {
    const color = await this.ctx.model.Color.findById(id)
    return color
  }

  async create({colorName}) {
    const color = await this.ctx.model.Color.create({colorName})
    return color
  }

  async update(id, {colorName}) {
    const color = await this.ctx.model.Color.update({colorName}, {where: {id: id}})
    return color
  }

  async destroy(id) {
    const result = await this.ctx.model.Color.destroy({where:{id: id}})
    return result
  }


}

module.exports = ColorService
