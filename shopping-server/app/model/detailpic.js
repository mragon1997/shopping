'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const DetailPic = app.model.define('detailpic', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    productId: INTEGER,
    picAddress: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return DetailPic;
};