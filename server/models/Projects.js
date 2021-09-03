module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define("Projects", {
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Projects.associate = (models) => {
    Projects.hasMany(models.Tasks, {
      onDelete: "cascade",
    });
  };

  return Projects;
};
