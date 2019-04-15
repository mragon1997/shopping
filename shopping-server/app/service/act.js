const Service = require('egg').Service

class ActService extends Service {
  
  async index() {
    const list = await this.ctx.model.Act.findAll()
    return list
  }

  async show(id) {
    const act = await this.ctx.model.Act.findById(id)
    return act
  }

  async create({actName, beginTime, endTime}) {
    const act = await this.ctx.model.Act.create({actName, beginTime, endTime})
    return act
  }

  async update(id, {actName, beginTime, endTime}) {
    const act = await this.ctx.model.Act.update({actName, beginTime, endTime}, {where:{id: id}})
    return act
  }

  async destroy(id) {
    const result = await this.ctx.model.Act.destroy({where:{id: id}})
    return result
  }


}

module.exports = ActService
