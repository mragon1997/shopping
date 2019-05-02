'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  router.resources('products', '/api/product', app.controller.product)
  router.resources('detailpics', '/api/detailpic', app.controller.detailpic)
  router.resources('acts', '/api/act', app.controller.act)
  router.resources('actproducts', '/api/actproduct', app.controller.actproduct)
  router.resources('users', '/api/user', app.controller.user)
  router.resources('brands', '/api/brand', app.controller.brand)
  router.resources('carts', '/api/cart', app.controller.cart)
  router.resources('colors', '/api/color', app.controller.color)
  router.resources('orders', '/api/order', app.controller.order)
  router.resources('roles', '/api/role', app.controller.role)
}
