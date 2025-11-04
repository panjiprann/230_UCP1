module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define("Film", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tittle: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    sutradara: {
        type: DataTypes.STRING,
    },
    terbit: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
 });

  return Film;
}