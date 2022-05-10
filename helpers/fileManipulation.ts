import fs from "fs";
import { CitasCrm, CrmJson } from "../interfaces/datatypes";
import { Calendar, CalendarInfo } from "../models/Calendars";

export const getJsonCrmCitas = (root: string): CitasCrm[] => {
  let rawdata = fs.readFileSync(root);
  const crmCitasJson: CrmJson = JSON.parse(rawdata.toString());
  //console.log(crmCitasJson.Admin_Mini_Tipo_Cita);
  return crmCitasJson.Admin_Mini_Tipo_Cita;
};

export const tranformJsonToDBModel = (citascrm: CitasCrm[]) => {
  const calendarsGmailDBModel: Calendar[] = [];

  citascrm.forEach((citaCrm) => {
    const userLoginCrm = citaCrm.Create_User_Login;

    const isExistEmail = calendarsGmailDBModel.some(
      (caleGmailDBModel) => caleGmailDBModel.email === userLoginCrm
    );
    //console.log(isExistEmail);

    if (!isExistEmail) {
      //crear el usuario en el arreglo
      const calendarInfo: CalendarInfo[] = [];
      calendarInfo.push({
        calendarId: citaCrm.Calendar_ID,
        channelId: "",
        description: citaCrm.Tipo_de_Cita,
        dueDate: "",
        idZoho: citaCrm.ID,
        isActive: true,
        name: citaCrm.Nombre,
        syncToken: "",
        watchedResourceId: "",
      });
      const calendarItem: Calendar = {
        email: userLoginCrm,
        isActiveAll: false,
        loginUserUsuario: "NOT_SET",
        token: "",
        calendarsInfo: calendarInfo,
      };

      calendarsGmailDBModel.push(calendarItem);

      console.log(calendarsGmailDBModel);
    }
  });
};
