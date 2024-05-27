import { connectToDB } from "@/db/database";
import Post from "@/db/models/post";

// get all posts
export const GET = async (req, res) => {
  try {
    await connectToDB();
    const pipeline = [
      { $sort: { date: -1 } },
      { $limit: 6 },
      {
        $lookup: {
          from: "creators", // Name of the creator collection
          localField: "creator", // Field in post referencing creator
          foreignField: "_id", // Field in creator identifying document
          as: "creator", // Name for the populated creator data
        },
      },
    ];
    const response = await Post.find({})
      .populate("creator")
      .sort({ date: -1 })
      .limit(2)
      .exec();

    // const response = await Post.find({}).aggregate(pipeline);
    console.log("fetched all posts", response);
    // res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the Posts", { status: 500 });
  }
};
