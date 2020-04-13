'use strict';

module.exports = (sequelize, DataTypes) => {
  var Enhancement = sequelize.define('request', {
    requestID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stakeholders: {
      type: DataTypes.STRING(4096),
      allowNull: true,
    },
    engagements: {
      type: DataTypes.STRING(4096),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(4096),
      allowNull: false,
    },
    usageNumbers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // TODO add field for attachments
  });

  return Enhancement;
};
