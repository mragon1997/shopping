const Service = require('egg').Service

class RoleService extends Service {
  
  async index() {
    const list = await this.ctx.model.Role.findAll()
    return list
  }

  async show(id) {
    const role = await this.ctx.model.Role.findById(id)
    return role
  }

  async create({roleName}) {
    const role = await this.ctx.model.Role.create({roleName})
    return role
  }

  async update(id, {roleName}) {
    const role = await this.ctx.model.Role.update({roleName}, {where: {id: id}})
    return role
  }

  async destroy(id) {
    const result = await this.ctx.model.Role.destroy({where:{id: id}})
    return result
  }


}

module.exports = RoleService
