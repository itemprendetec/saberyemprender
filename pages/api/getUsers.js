// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongo"

export default async function getUsers(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("saberyemprender");
    const getusers = await db
      .collection("cocina_profesional")
      .find({})
      .toArray();

    return res.json(getusers);
  } catch (error) {
    console.error(error);
  }
}
