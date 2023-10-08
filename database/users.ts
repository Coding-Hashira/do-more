import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }
})

const users = mongoose.models.user || mongoose.model('user', userSchema)

export default users