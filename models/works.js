const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");
const Artist = require("./artist");

const sequelizeInstance = dbConnect.Sequelize;

class Works extends Model{ }

Works.init({
    id:{
        type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true,
    },
    type:{
        type: DataTypes.STRING, allowNull:false, required: true
    },
    artistId:{
        type: DataTypes.INTEGER, references:{model:Artist, key: 'id'}

    }},


    {sequelize: sequelizeInstance, modelName: "works",
    timestamps: true, freezeTableName: true
}

)

Works.belongsTo(Artist);
module.exports = Works;
