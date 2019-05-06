const Service = require('egg').Service

class UserService extends Service {
  
  async index() {
    const list = await this.ctx.model.User.findAll()
    return list
  }

  async findByTel(tel) {
    const user = await this.ctx.model.User.findAll({where: {tel: tel}})
    return user
  }

  async show(id) {
    const user = await this.ctx.model.User.findById(id)
    return user
  }

  async create({tel, password, roleId}) {
    const user = await this.ctx.model.User.create({tel, password, roleId})
    return user
  }

  async update(id, {tel, password, roleId}) {
    const user = await this.ctx.model.User.update({tel, password, roleId}, {where: {id: id}})
    return user
  }

  async destroy(id) {
    const result = await this.ctx.model.User.destroy({where:{id: id}})
    return result
  }


}

module.exports = UserService
