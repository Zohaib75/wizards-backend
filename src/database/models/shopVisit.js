import sequelize from 'sequelize';
import connection from '../connection';

const shopVisit = connection.define('shopVisit', {
  date: sequelize.DATEONLY,
  startTime: sequelize.STRING,
  endTime: sequelize.STRING,
  image: sequelize.STRING,
  status: sequelize.STRING
},{
    timestamps: false
});

export default shopVisit;