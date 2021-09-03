module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define("Tasks", {
    TaskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AssignedTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Tasks;
};
