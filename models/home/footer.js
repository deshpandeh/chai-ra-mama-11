import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
    {

        footerHeading: {
            type: String,

        },
        footerBanner: {
            type: String,

        },
        phone: {
            type: String,

        },
        email: {
            type: String,

        },
        facebook: {
            type: String,

        },
        instagram: {
            type: String,

        },
        twitter: {
            type: String,

        },
        youtube: {
            type: String,

        },

    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)

const footer = mongoose.models.footer || mongoose.model('footer', footerSchema)

export default footer;



