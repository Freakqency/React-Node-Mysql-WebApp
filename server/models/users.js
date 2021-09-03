module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //   Users.associate = (models) => {
  //     Users.hasMany(models.Projects, {
  //       onDelete: "cascade",
  //     });
  //   };

  return Users;
};
