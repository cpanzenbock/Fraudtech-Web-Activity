'use strict';

module.exports = (sequelize, DataTypes) => {
  var Enhancement = sequelize.define('Enhancement', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    // TODO add extra fields as appropriate to match the enhancement form.
  });

  return Enhancement;
};
