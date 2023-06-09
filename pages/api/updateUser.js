// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongo";
import { ObjectId } from "mongodb";

export default async function updateUser(req, res) {
  const user = JSON.parse(req.body);
 

   try {
    
      const client = await clientPromise;
     const db = client.db("saberyemprender");
     // const updateuser = await db.collection("users").updateOne({ "_id": new ObjectId(user._id) }, { $set: { ...user } })
      //const updatemany= await db.collection("general").updateMany( {}, { $rename: { "BORRADO": "PROBLEMA" } } )
      const updateuser = await db.collection("general").updateOne({ "_id": new ObjectId(user._id) }, { $set: {
       NOMBRE_APELLIDO : user.NOMBRE_APELLIDO,
        CEDULA : user.CEDULA,
        ASSIGN : user.ASSIGN,
        CORREO : user.CORREO,
        HORARIO :{
          turno: user.HORARIO.turno,
          dias: user.HORARIO.dias,
        },
        OBSERVACIONES : user.OBSERVACIONES,
        ROUND : user.ROUND,
        SECCION : user.SECCION, 
        TELEFONO : user.TELEFONO,
        ASISTENCIA_1 : user.ASISTENCIA_1,
        ASISTENCIA_2 : user.ASISTENCIA_2,
        ASISTENCIA_3 : user.ASISTENCIA_3,
        ASISTENCIA_4 : user.ASISTENCIA_4,
        ASISTENCIA_5 : user.ASISTENCIA_5,
        ASISTENCIA_6 : user.ASISTENCIA_6,
        ASISTENCIA_7 : user.ASISTENCIA_7,
        ASISTENCIA_8 : user.ASISTENCIA_8,
        ESPERA: user.ESPERA,
        LIMBO: user.LIMBO,  
        } }) 
     //const updateuser = await db.collection("general").replaceOne({ "_id": new ObjectId(user._id) }, { NOMBRE_APELLIDO : user.NOMBRE_APELLIDO, CEDULA : user.CEDULA }, { upsert: true });

    /* if (updateuser) {
       console.log(">>>>>>.", updateuser)
     }
       const getoneuser = await db.collection("general").replaceOne({ "_id": new ObjectId(user._id) }, { ...user }, { upsert: true });
      console.log(getoneuser)
     return res.json({
       ...user,

     }); */
   } catch (error) {
     return res.status(402).json({
       error: error,
     })
   }
  return res.json({
    json: user,
    ldp: req.body,
  })
}
