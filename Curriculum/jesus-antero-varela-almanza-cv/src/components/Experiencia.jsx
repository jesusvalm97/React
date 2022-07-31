import React from 'react'

export const Experiencia = () => {
  return (
    <div id='containerExperiencia'>
        <h2>Experiencia</h2>

        <div>
            <h5>OK HOSTING</h5>
            <h7>ACTUALMENTE</h7>
            <p>
                Proyecto OKHOSTING.UI.HTML. Se implementaron los controles de la librería OKHOSTING.UI (controles generales como botón, textbox, checkbox, label, etc.) para poder realizar código HTML de dichos controles en base a código C# mediante el uso del nuget AngleSharp. El objetivo es que el usuario pueda realizar toda una aplicación web en base a código C# en dónde la comunicación del cliente al servidor se realizará mediante websockets para así evitar el “submit” de la aplicación a la hora de enviar datos.
            </p>
        </div>

        <div>
            <h5>OK HOSTING</h5>
            <h7>02/05/2022 - 30/05/2022</h7>
            <p>
                Proyecto OKHOSTING.Files.UI.FileSystemBrowser. Se le implementaron las herramientas faltantes para completar el sistema. Dichas funciones fuerón el renombrar archivos y carpetas, crear carpetas, cambiar la ruta de los archivos y carpetas mediante “drag n drop” ya sea uno a la vez o en conjunto, eliminar uno o varios archivos o carpetas, agregar nuevos archivos o carpetas desde el file system browser de la máquina local hacía la aplicación mediante “drag n drop”, seleccionar archivos y carpetas mediante un click y abrirlos mediante doble click. Todas estas funciones mencionadas fueron aplicadas para funcionar en aplicaciones WinForms y WPF.
            </p>
        </div>

        <div>
            <h5>OK HOSTING</h5>
            <h7>01/11/2021 - 29/04/2022</h7>
            <p>
                Proyecto Locki. Se le dió mantenimiento a la aplicación web para clientes solucionando bugs encontrados en pruebas de campo. Se realizaron web services para modificar algunas funcionalidades que dependen de un “submit” al formulario para que realizaran sus funciones sin la necesidad de realizar el submit, esto se llevó a cabo mediante el consumo de dichos web service mediante javascript. Se realizaron pruebas de estrés a la aplicación web principal.
            </p>
        </div>

        <div>
            <h5>OK HOSTING</h5>
            <h7>20/11/2020 - 29/10/2021</h7>
            <p>
                Proyecto Locki. Dicho proyecto consistió en desarrollar dos aplicaciones web.Una para el administrador para administrar la base de datos, realizada con la librería interna de la empresa OKHOSTING.ORM.UI y una aplicación web para el usuario final en donde puede firmar con la firma electrónica avanzada o firma autógrafa y mandar a firmar documentos. Se trabajó el back end, el front end y la base de datos, se utilizaron los lenguajes C#, Java,Javascript, CSS, el framework .NET 4, los nugets Twilio para validación de teléfono, Newtonsoft para trabajar Jsons, Restsharp Para realizar peticiones Rest para el consumo de una api de la empresa Seguridata para firmar los documentos, iText para crear archivos PDF, las librerías pdf.js para manipular un pdf con javascript, Konva.js para la manipulación de objetos mediante drag and drop con javascript.
            </p>
        </div>

        <div>
            <h5>OK HOSTING</h5>
            <h7>12/05/2020 - 15/11/2020</h7>
            <p>
                Proyecto Real Wellness. Dicho proyecto consistió en realizar dos aplicaciones web y una aplicación multiplataforma para dispositivos móviles. Una aplicación web para el administrador para administrar la base de datos, realizada con la librería interna de la empresa OKHOSTING.ORM.UI. Una aplicación web para asociados en dónde pueden publicar cupones de descuentos de sus productos y servicios y registrar sus datos de contacto y de su local. Y una aplicación móvil multiplataforma para usuarios finales para conseguir el cupón publicado por los asociados, dónde puede personalizar por el rubro del negocio los cupones que quiere le aparezcan. Se trabajó el back end,front end y la base de datos, se utilizaron los lenguajes C#,Javascript, CSS, el framework .NET 4, el nuget Twilio para validación de teléfono, la librería InstaScan de javascript para escanear códigos QR.
            </p>
        </div>

        <div>
            <h5>OK HOSTING</h5>
            <h7>31/01/2020 - 02/03/2020</h7>
            <p>
                Proyecto OKHOSTING.UI.CSS. Se implementó las reglas de estilo relacionadas con css grid a el control grid de la librería OKHOSTING.UI para poder personalizar más dicho control desde C#. 
            </p>
        </div>

        <div>
            <h5>OK HOSTING</h5>
            <h7>15/01/2020 - 29/01/2020</h7>
            <p>
                Proyecto OKHOSTING.Inside. Cambio de estilo general a la aplicación .NET4 WebForms de empleados de la empresa OK HOSTING.
            </p>
        </div>

        <div>
            <h5>OK HOSTING</h5>
            <h7>09/12/2019 - 14/01/2020</h7>
            <p>
                Capacitación para el desarrollo en C#, desarrollo de aplicaciones WebForms, WinForms, Xamarin y WPF y para el uso de las librerías internas de la empresa.
            </p>
        </div>

    </div>
  )
}
