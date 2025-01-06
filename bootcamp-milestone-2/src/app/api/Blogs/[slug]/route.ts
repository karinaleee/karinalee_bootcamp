
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"

type IParams = {
		params: Promise<{
			slug: string
		}>
}


export async function GET(req: NextRequest, { params }: IParams) {
    console.log("Incoming");
    await connectDB() 
		const slug=(await params).slug;
		
        console.log("Querying", slug);

	   try {
	        const blog = await blogSchema.findOne({ slug }).orFail()
            console.log("Blog Found", blog);
	        return NextResponse.json(blog)
            
	    } catch (err) {
			console.log(err)
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}

export async function POST(req: NextRequest, { params }: IParams) {
	console.log('params', req, params);
	await connectDB()
	const resparams  = await params;

	try {
		console.log('entering post request')
		const body = await req.json();// awaits the json request
		const {user, content}=body;// extracts user and comment from the body
		
		const blog= await blogSchema.findOne({slug: resparams.slug}).orFail();
		
		const newcomment={
			user,
			content,
			time:new Date(),
		};
		
		blog.comments.push(newcomment);
	
		await blog.save();
		console.log("saved", blog);
		
		return NextResponse.json(newcomment);

	} catch (error) {
		
		console.log("error           ", error)
		return NextResponse.json(
			
			{error:"Failed to add comment"},
			{status:440}
		)
	}
}