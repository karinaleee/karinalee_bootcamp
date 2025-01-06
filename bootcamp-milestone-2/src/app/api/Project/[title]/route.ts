
// import { NextRequest, NextResponse } from 'next/server'
// import connectDB from "@/database/db"
// import projectSchema from "@/database/projectSchema"

// type IParams = {
// 		params: {
// 			title: string
// 		}
// }


// export async function GET(req: NextRequest, { params }: IParams) {
//     await connectDB() // function from db.ts before
// 	const title = (await params).title;

// 	   try {
// 	        const project = await projectSchema.findOne({ title }).orFail()
		
// 	        return NextResponse.json(project)
// 	    } catch (err) {
// 			console.log(err);
// 	        return NextResponse.json('project not found.', { status: 404 })
// 	    }
// }

// export async function POST(req: NextRequest, { params }: IParams) {
// 	//console.log('params', req, params);
// 	await connectDB()
// 	const resparams  = await params;

// 	try {
// 		console.log('entering post request')
// 		const body = await req.json();
// 		const {user, content}=body;
	
// 		const project= await projectSchema.findOne({title: resparams.title}).orFail();
		
// 		const newcomment={
// 			user,
// 			content,
// 			time:new Date(),
// 		};

// 		project.comments.push(newcomment);
		
// 		await project.save();
		
// 		return NextResponse.json(newcomment);

// 	} catch (error) {

// 		return NextResponse.json(
			
// 			{error:"Failed to add comment"},
// 			{status:440}
// 		)
// 	}
// }

import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
// import blogSchema from "@/database/projectSchema"
import projectSchema from '@/database/projectSchema'

type IParams = {
		params: Promise<{
			title: string
		}>
}


export async function GET(req: NextRequest, { params }: IParams) {
    console.log("Incoming");
    await connectDB() // function from db.ts before
		const title=(await params).title;
		
		try {
			const project = await projectSchema.findOne({ title }).orFail();
			return NextResponse.json(project);
		} catch (err) {
			console.error('Error fetching project:', err);
			return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
		}
	}


export async function POST(req: NextRequest, { params }: IParams) {
		console.log('params', req, params);
		await connectDB()
		const resparams  = await params;
	
		try {
		
			const body = await req.json();// awaits the json request
			const {user, content}=body;// extracts user and comment from the body
		
			const title= await projectSchema.findOne({title: resparams.title}).orFail();
		
			const newcomment={
				user,
				content,
				time:new Date(),
			};
			
			title.comments.push(newcomment);
			
			await title.save();
		
			return NextResponse.json(newcomment);
	
		} catch (error) {

			return NextResponse.json(
				
				{error:"Failed to add comment"},
				{status:440}
			)
		}
	
}

