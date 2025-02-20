import mongoose, { Schema } from "mongoose";

export type IComment = {
	user: string;
	content: string;
	time: Date;
}
const commentSchema = new Schema<IComment>({
    user: {type: String, required: true},
    content: {type: String, required: true},
    time: { type: Date, required: true, default: new Date()}
})


export type Blog = {
		title: string;
		slug: string; 
		date: Date;
		description: string;
		image: string; //web url if public if not put in public folder
		image_alt: string;
		comments: IComment[];
};


const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		image: { type: String, required: true },
	  image_alt: { type: String, required: true },
		comments: [commentSchema],
})


const BlogModel = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default BlogModel;