const { Model, DataTypes } = require("sequelize");

class Addresses extends Model {
  static init(connection) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(model) {
    this.belongsTo(model.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Addresses;
