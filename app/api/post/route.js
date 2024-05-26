import { connectToDB } from "@/db/database";
import Post from "@/db/models/post";

// get all posts
export const GET = async (req, res) => {
  try {
    await connectToDB();
    const response = await Post.find({}).populate("creator");
    console.log("Fetch all posts successfully!");
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the Posts", { status: 500 });
  }
};
