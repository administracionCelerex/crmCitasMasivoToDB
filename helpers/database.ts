import calendarModel, { Calendar } from "../models/Calendars";

export const insertCalendars = async (calendarsRecords: Calendar[]) => {
  try {
    const newRecords = await calendarModel.insertMany(calendarsRecords);
    if (newRecords.length < 1) {
      console.log("No more Recors To Add");
      return;
    }
    console.log("New records added");
    return;
  } catch (err) {
    console.log(err);
  }
};

export const getRecordsToInsert = async (calendarsRecords: Calendar[]) => {
  try {
    const oldRecords = await calendarModel.find().exec();

    if (oldRecords.length < 1) {
      console.log("No hay registros en la base d edatos de calendar gmail");
    }

    const arrayEmails = oldRecords.map((oldRecord) => {
      return oldRecord.email;
    });

    const recordsToInsert = calendarsRecords.filter((caleRec) => {
      return !arrayEmails.some((arrEmail) => arrEmail === caleRec.email);
    });
    //console.log(recordsToInsert);
    return recordsToInsert;
  } catch (err) {
    console.log("Error al buscar registros ");
    return [];
  }
};
