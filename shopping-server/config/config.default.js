/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553927173866_291'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  // database
  config.sequelize = {
    dialect: 'mysql',
    database: 'shopping',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '970428'
  }

  config.security =  {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false
    }
  }

  return {
    ...config,
    ...userConfig
  }
}
