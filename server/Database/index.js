import Sequelize from "sequelize"
import dbConfig from "./config"

import EmailModel from "./models/Email"

const connection = new Sequelize(dbConfig)

EmailModel.init(connection)
EmailModel.associate(connection.models)

export default connection
