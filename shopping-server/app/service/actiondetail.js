const Service = require('egg').Service

class ActionDetailService extends Service {
  
  async index() {
    const list = await this.ctx.model.Actiondetail.findAll()
    return list
  }

  async show(id) {
    const actiondetail = await this.ctx.model.Actiondetail.findById(id)
    return actiondetail
  }

  async create({actionId, actionDate, actionHour, logId}) {
    const actiondetail = await this.ctx.model.Actiondetail.create({actionId, actionDate, actionHour, logId})
    return actiondetail
  }

  async update(id, {actionId, actionDate, actionHour, logId}) {
    const actiondetail = await this.ctx.model.Actiondetail.update({actionId, actionDate, actionHour, logId}, {where: {id: id}})
    return actiondetail
  }

  async destroy(id) {
    const result = await this.ctx.model.Actiondetail.destroy({where:{id: id}})
    return result
  }


}

module.exports = ActionDetailService
