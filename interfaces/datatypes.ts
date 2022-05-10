export interface CitasCrm {
  Nombre: string;
  Numero_de_Cita: string;
  Tipo_Evento: string;
  ID: string;
  Time_Zone: string;
  Create_User_Login: string;
  Tipo_de_Cita: string;
  Calendar_ID: string;
}

export interface CrmJson {
  Admin_Mini_Tipo_Cita: CitasCrm[];
}
