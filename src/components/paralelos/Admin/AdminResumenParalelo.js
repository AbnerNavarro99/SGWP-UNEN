import React from 'react'
import './AdminResumenParalelo.css';
import { Link } from 'react-router-dom'
const AdminResumenParalelo = ({ paralelo }) => {
    let pub = timeConverter(paralelo.publicacion);
    return (
        <div className="col s12 m8 offset-m2">
            <Link to={"/admin/infoparalelos/" + paralelo.id}>
                <div className="card z-depth-4 resumenAdminParalelo">
                    <div className="card-content black-text">
                        <span className="card-title" style={{}}><h3 className="tituloParalelo">{paralelo.nombreParalelo}</h3></span>
                        <p className="valign-wrapper p-info"><i className="material-icons" style={{ paddingRight: "15px" }}>account_circle</i> Estudiantes inscritos: {paralelo.cantidadInscritos}</p>
                        <p className="valign-wrapper p-info"><i className="material-icons" style={{ paddingRight: "15px" }}>add_to_queue</i>Publicado por UNEN ANECYS</p>
                        <p className="valign-wrapper p-info"><i className="material-icons" style={{ paddingRight: "15px" }}>attach_money</i>Costo Actual del Paralelo: 
                        {/* <span className="blue-text" style={{ fontWeight: "bold" }}>C$ {paralelo.costoxEstudiante}.00</span> */}
                        </p>
                        <br />
                        <p className="grey-text">{pub.slice(0, 6)} 2020</p>
                    </div>
                </div>
            </Link>
        </div>
    )

}

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}
console.log(timeConverter(0));

export default AdminResumenParalelo;