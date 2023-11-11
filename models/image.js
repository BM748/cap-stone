const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");
const Artist = require("./artist");

const sequelizeInstance = dbConnect.Sequelize;

class Image extends Model{ }

Image.init({
    title: {
        type: DataTypes.STRING, allowNull:false, require: true
    },
    image:{
        type: DataTypes.STRING, allowNull: false, require:true
    },
    artistId:{
        type: DataTypes.INTEGER, references:{model:Artist, key: 'id'}

    }},


    {sequelize: sequelizeInstance, modelName: "images",
        timestamps: true, freezeTableName: true
    }

    )

    Image.belongsTo(Artist);
    module.exports = Image;