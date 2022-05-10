import {
  getJsonCrmCitas,
  tranformJsonToDBModel,
  writeJsonPreDB,
} from "./helpers/fileManipulation";

import { STAGE } from "./enviroment/variables";
const rootFile = `./data/${STAGE}/citascrm.json`;

const outputLink = `./data/${STAGE}/calendarDBModel.json`;

const arrayCitasCrm = getJsonCrmCitas(rootFile);

//console.log(arrayCitasCrm);

const calendarsGmailDBModel = tranformJsonToDBModel(arrayCitasCrm);

writeJsonPreDB(calendarsGmailDBModel, outputLink);
