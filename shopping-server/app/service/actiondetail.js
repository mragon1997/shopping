const Service = require('egg').Service
const sequelize = require('sequelize')

class ActionDetailService extends Service {

  async index() {
    const list = await this.ctx.model.Actiondetail.findAll()
    return list
  }

  async show(id) {
    const actiondetail = await this.ctx.model.Actiondetail.findById(id)
    return actiondetail
  }

  async create({ actionId, actionDate, actionHour, logId }) {
    const actiondetail = await this.ctx.model.Actiondetail.create({ actionId, actionDate, actionHour, logId })
    return actiondetail
  }

  async update(id, { actionId, actionDate, actionHour, logId }) {
    const actiondetail = await this.ctx.model.Actiondetail.update({ actionId, actionDate, actionHour, logId }, { where: { id: id } })
    return actiondetail
  }

  async destroy(id) {
    const result = await this.ctx.model.Actiondetail.destroy({ where: { id: id } })
    return result
  }

  async  conuntLoginDate() {
    const list = await this.ctx.model.Actiondetail.findAll({
      attributes: ['actionDate', [sequelize.fn('COUNT', sequelize.col('actionDate')), 'count']],
      group: 'actionDate',
      raw: true,
      order: [['actionDate', 'DESC']],
      where: {actionId: 1}
    })
    return list
  }

  async countBrowseProduct() {
    const list = await this.ctx.model.Actiondetail.findAll({
      attributes: ['logId', [sequelize.fn('COUNT', sequelize.col('logId')), 'count']],
      group: 'logId',
      raw: true,
      where: {actionId: 2}
    })
    return list
  }


}

module.exports = ActionDetailService
