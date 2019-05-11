const Service = require('egg').Service

class ActionService extends Service {
  
  async index() {
    const list = await this.ctx.model.Action.findAll()
    return list
  }

  async show(id) {
    const action = await this.ctx.model.Action.findById(id)
    return action
  }

  async create({actionName}) {
    const action = await this.ctx.model.Action.create({actionName})
    return action
  }

  async update(id, {actionName}) {
    const action = await this.ctx.model.Action.update({actionName}, {where: {id: id}})
    return action
  }

  async destroy(id) {
    const result = await this.ctx.model.Action.destroy({where:{id: id}})
    return result
  }


}

module.exports = ActionService
