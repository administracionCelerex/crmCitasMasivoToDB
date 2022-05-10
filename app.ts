import { getJsonCrmCitas } from "./helpers/fileManipulation";
const rootFile = "./data/dev/citascrm.json";

const arrayCitasCrm = getJsonCrmCitas(rootFile);

console.log(arrayCitasCrm);
