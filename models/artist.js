const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Artist extends Model{ }

Artist.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey:true
    },
    userName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    name: {
        type: DataTypes.STRING, allowNull:false, required: true
    },
    emailId:{
        type: DataTypes.STRING, allowNull: false , required: true, unique: true
    },
    password:{
        type: DataTypes.STRING, allowNull: false, required: true
    },
    pricingTier:{ 
        type: DataTypes.INTEGER, allowNull: false, required: true
    }},

    {sequelize: sequelizeInstance, modelName: "artists",
        timestamps: true, freezeTableName: true
    }

)

module.exports = Artist;
