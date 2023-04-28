// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongo";
import { ObjectId } from "mongodb";

export default async function getOneUser(req, res) {
  const { userid, c } = req.query;

  try {

    const client = await clientPromise;
    const db = client.db("saberyemprender");

    const getoneuser = await db.collection("general").findOne({ "_id": new ObjectId(userid) });


    return res.json(getoneuser);
  } catch (error) {
    console.error(error);
  }
}
