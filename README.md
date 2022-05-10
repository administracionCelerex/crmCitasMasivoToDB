# crmCitasMAsivoToDb


## Acerca de

Este programa lo que consigue es con un json exportado del CRM de tipo de citas transformarlo y subirlo a la base de datos a la tabla calendars-gmail.

## Pre Requisitos

- Nodejs
- Typscript compilador > 4.X


## Como usarlo

1. Descargar  o clonar el repositorio 

2. crear las carpetas **data** y  **enviroment** a la misma altura que las carpetas **helpers** e **interfaces**.

3. crear el archivo variables.ts dentro de la carpeta **enviroment**

```
project
│   README.md
│   app.ts   
│
└───data
│   │   file011.txt
│   │   file012.txt
│   │
│   └───dev
│   |    │ file111.txt
│   |    │ file112.txt
│   |    │   ...
│   └───prod
|        |
         | citascrm(es el archivo del crm renombrado)
         | calendarDBModel.json(este archivo es generado por el sistema)
    
└───folder2
    │   file021.txt
    │   file022.txt
```

## Como funciona 

la estructura que nos brinda el Crm es algo como :


```
{
    "Admin_Mini_Tipo_Cita": [
        {
            "Nombre": "Cita Inicial",
            "Numero_de_Cita": "1",
            "Tipo_Evento": "Ventas",
            "ID": "3741693000020523038",
            "Time_Zone": "America/Mexico_City",
            "Create_User_Login": "yanela_garcia@....",
            "Tipo_de_Cita": "De Primera",
            "Calendar_ID": "m0us54pn6d7qlh1ev3r3o...@group.calendar.google.com"
        },
        {
            "Nombre": "Cita de Propuesta",
            "Numero_de_Cita": "2",
            "Tipo_Evento": "Ventas",
            "ID": "3741693000020523042",
            "Time_Zone": "America/Mexico_City",
            "Create_User_Login": "yanela_garcia@....",
            "Tipo_de_Cita": "Cierre",
            "Calendar_ID": "3ae7k6e0uroqs2dkutpa...@group.calendar.google.com"
        },
    ]
}
```



