import fs from "fs";
import { CitasCrm, CrmJson } from "../interfaces/datatypes";

export const getJsonCrmCitas = (root: string): CitasCrm[] => {
  let rawdata = fs.readFileSync(root);
  const crmCitasJson: CrmJson = JSON.parse(rawdata.toString());
  //console.log(crmCitasJson.Admin_Mini_Tipo_Cita);
  return crmCitasJson.Admin_Mini_Tipo_Cita;
};
