import React from 'react'
import './AdminResumenParalelo.css';
import { Link } from 'react-router-dom'
const AdminResumenParalelo = ({ paralelo }) => {

    return (
        <div className="col s12 l6">
            <Link to={"/admin/infoparalelos/" + paralelo.id}>
                <div className="card z-depth-4 resumenAdminParalelo">
                    <div className="card-content black-text">
                        <span className="card-title">{paralelo.nombreParalelo}</span>
                        <p className="valign-wrapper p-info"><i className="material-icons">account_circle</i> Estudiantes inscritos: {paralelo.cantidadInscritos}</p>
                        <p className="valign-wrapper p-info"><i className="material-icons">add_to_queue</i>Publicado por UNEN ANECYS</p>
                        <p className="valign-wrapper p-info"><i className="material-icons">attach_money</i>Costo Actual del Paralelo: <span className="blue-text">C$ {paralelo.costoxEstudiante}.00</span></p>
                        <br />
                        <p className="grey-text">15 de julio, 3 p.m.</p>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default AdminResumenParalelo;