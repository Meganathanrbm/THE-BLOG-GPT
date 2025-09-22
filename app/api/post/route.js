import { connectToDB } from "@/db/database";
import Post from "@/db/models/post";

// get all posts
export const GET = async (req, res) => {
  try {
    await connectToDB();
    const skip = req.nextUrl.searchParams.get("skip");
    const skipNum = skip === "all" ? 0 : parseInt(skip || "0");

    if (skip == "all") {
      const response = await Post.find({}).populate("creator");
      return new Response(JSON.stringify(response), { status: 200 });
    }

    const response = await Post.find({})
      .populate("creator")
      .sort({ date: -1 })
      .skip(parseInt(skip))
      .limit(6)
      .exec();
    const postLength = await Post.countDocuments();
    return new Response(
      JSON.stringify({
        data: response,
        page: {
          remaining: postLength.length - skipNum - response.length,
          nextPage: parseInt(skip) + 6,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Failed to fetch the Posts", { status: 500 });
  }
};
