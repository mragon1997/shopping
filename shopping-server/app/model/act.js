'use strict'
// module.exports = (sequelize, DataTypes) => {
//   const Act = sequelize.model.define(
//     'Act',
//     {
//       actName: DataTypes.STRING,
//       beginTime: DataTypes.DATE,
//       endTime: DataTypes.DATE
//     },
//     {}
//   )
//   Act.associate = function(models) {
//     // associations can be defined here
//   }
//   return Act
// }

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Act = app.model.define('Act', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    actName: STRING(30),
    beginTime: DATE,
    endTime: DATE
  })

  return Act
}
