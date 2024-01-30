import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todolist_ts", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
