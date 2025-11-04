module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define("film", {
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
    tahun_terbit: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
 });

  return film;
}