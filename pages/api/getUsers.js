// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongo"

export default async function getUsers(req, res) {

  try {
    const client = await clientPromise;
    const db = client.db("saberyemprender");

    const getusers = await db.collection("general").find({}).toArray();

    // const getUsersCocinaProfesional = await db
    //   .collection("cocina_profesional")
    //   .find({})
    //   .toArray();

    // getUsersCocinaProfesional.forEach((usr) => {
    //   usr.ASSIGN = "cocina_profesional"
    //   getusers.push(usr)
    // })

    return res.json(getusers);
  } catch (error) {
    console.error(error);
  }
}
