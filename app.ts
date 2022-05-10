import {
  getJsonCrmCitas,
  tranformJsonToDBModel,
  writeJsonPreDB,
} from "./helpers/fileManipulation";

import { STAGE, MONGODB_NAME, MONGO_SERVER } from "./enviroment/variables";
import { getRecordsToInsert, insertCalendars } from "./helpers/database";
const mongoose = require("mongoose");

const rootFile = `./data/${STAGE}/citascrm.json`;

const outputLink = `./data/${STAGE}/calendarDBModel.json`;

const arrayCitasCrm = getJsonCrmCitas(rootFile);

//console.log(arrayCitasCrm);

const calendarsGmailDBModel = tranformJsonToDBModel(arrayCitasCrm);

writeJsonPreDB(calendarsGmailDBModel, outputLink);

try {
  mongoose
    .connect(`mongodb+srv://${MONGO_SERVER}/${MONGODB_NAME}`)
    .then(async () => {
      console.log("connected to the Database");
      mongoose.connect(`mongodb+srv://${MONGO_SERVER}/${MONGODB_NAME}`);
      const calendarsToInsert = await getRecordsToInsert(calendarsGmailDBModel);
      await insertCalendars(calendarsToInsert);
    });
} catch (err) {
  console.log("Error al conectarse a la base de datos");
}
