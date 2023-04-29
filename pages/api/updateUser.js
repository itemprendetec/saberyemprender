// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongo";
import { ObjectId } from "mongodb";

export default async function getOneUser(req, res) {
  const user = JSON.parse(req.body);

  // try {

  //   const client = await clientPromise;
  //   const db = client.db("saberyemprender");
  //   // const updateuser = await db.collection("users").updateOne({ "_id": new ObjectId(user._id) }, { $set: { ...user } })

  //   const updateuser = await db.collection("general").updateOne({ "_id": new ObjectId(user._id) }, { $set: { "prueba": "asd" } })

  //   if (updateuser) {
  //     console.log(">>>>>>.", updateuser)
  //   }
  //   // // const getoneuser = await db.collection("general").replaceOne({ "_id": new ObjectId(user._id) }, { ...user }, { upsert: true });
  //   // console.log(getoneuser)
  //   return res.json({
  //     ...user,

  //   });
  // } catch (error) {
  //   return res.status(402).json({
  //     error: error,
  //   })
  // }
  return res.json({
    json: user,
    ldp: req.body,
  })
}
