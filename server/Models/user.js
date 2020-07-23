import { Model } from "sequelize"

export class User extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    // options
    {
      // need to pass the connection instance
      sequelize,
  
      // model name
      modelName: "User",
  
      // define the table name
      tableName: 'users',
  
      // if true, add timestamps to table (updatedAt, createdAt)
      timestamps: true,
  
      // if true, doesn't delete rows, instead adds a deletedAt column, if timestamps is true
      paranoid: false,
  
      // if true, uses snake_case instead of camelCase to generated attributes
      // ex: created_at instead of createdAt
      underscored: true,
  
      // hooks
      hooks: {
        // beforeCreate: (user, options) => user.id = uuid()
  
      }
    })
  }

  static associate(models) {
    
  }
}

export default User
