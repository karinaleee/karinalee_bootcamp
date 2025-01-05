
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"

type IParams = {
		params: Promise<{
			slug: string
		}>
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
    console.log("Incoming");
    await connectDB() // function from db.ts before
		const slug=(await params).slug;
		//const { slug } = params // another destructure
        console.log("Querying", slug);

	   try {
	        const blog = await blogSchema.findOne({ slug }).orFail()
            console.log("Blog Found", blog);
	        return NextResponse.json(blog)
            
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }

    
}
