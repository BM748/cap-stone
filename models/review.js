const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");
const Artist = require("./artist");
const User = require("./user");

const sequelizeInstance = dbConnect.Sequelize;

class Review extends Model{ }

Review.init({
    comment:{
        type: DataTypes.STRING, allowNull: false, required: true
    },
    createdAt:{
        type:DataTypes.DATE, allowNull: false, required: true
    },
    artistId:{
        type:DataTypes.INTEGER,references: {model: Artist, key: 'id'}
    },
    userId:{
        type:DataTypes.INTEGER,references: {model: User, key: 'id'}
    }},
    
    {sequelize: sequelizeInstance, modelName: "review",
    timestamps: true, freezeTableName: true
}
    
    )

    Review.belongsTo(Artist);
    Review.belongsTo(User);
    module.exports = Review;
