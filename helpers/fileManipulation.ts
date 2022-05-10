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

    const calendarAlive = calendarsGmailDBModel.find(
      (caleGmailDBModel) => caleGmailDBModel.email === userLoginCrm
    );
    //console.log(isExistEmail);

    const caledarInfoItem: CalendarInfo = {
      calendarId: citaCrm.Calendar_ID,
      channelId: "",
      description: citaCrm.Tipo_de_Cita,
      dueDate: "",
      idZoho: citaCrm.ID,
      isActive: true,
      name: citaCrm.Nombre,
      syncToken: "",
      watchedResourceId: "",
    };

    if (!calendarAlive) {
      //crear el usuario en el arreglo
      const calendarInfo: CalendarInfo[] = [];
      calendarInfo.push(caledarInfoItem);
      const calendarItem: Calendar = {
        email: userLoginCrm,
        isActiveAll: false,
        loginUserUsuario: "NOT_SET",
        token: "",
        calendarsInfo: calendarInfo,
      };

      calendarsGmailDBModel.push(calendarItem);

      return;
    }

    //console.log("Ya hay un correo existente");

    calendarAlive.calendarsInfo?.push(caledarInfoItem);
  });
  //console.log(calendarsGmailDBModel);
  return calendarsGmailDBModel;
};

export const writeJsonPreDB = (
  calendarsGmailDBModel: Calendar[],
  outputLink: string
) => {
  let data = JSON.stringify(calendarsGmailDBModel);
  fs.writeFileSync(`${outputLink}`, data);
};
