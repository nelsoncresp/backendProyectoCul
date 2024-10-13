import { Sequelize} from "sequelize";

const sequelize = new Sequelize( {
    database: 'ferreteria',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql'
});
export default sequelize; 