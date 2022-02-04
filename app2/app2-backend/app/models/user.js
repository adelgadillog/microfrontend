const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new  mongoose.Schema(
    {
        name: {
            type: String
        },
        avatar: {
            type: String,
            default: 'https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png'
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('user', UserSchema);