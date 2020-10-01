import React from 'react'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import './UsuariosxParalelo.css'

class UsuariosxParalelo extends React.Component {

    render() {
        const { usuariosEnParalelo, nombreParalelo, pagos } = this.props;
        let UsuariosPagados = [];
        let UsuariosNoPagados = [];
        let pagado = false;

        for (let i = 0; i < usuariosEnParalelo.length; i++) {
            for (let j = 0; j < pagos.length; j++) {
                if (pagos[j].usuario === usuariosEnParalelo[i].nombres + " " + usuariosEnParalelo[i].apellidos && pagos[j].paralelo === nombreParalelo) {
                    UsuariosPagados = [...UsuariosPagados, usuariosEnParalelo[i]];
                    pagado = true;
                    break;
                } else {
                    pagado = false;
                }
            }
            if (pagado === false) {
                UsuariosNoPagados = [...UsuariosNoPagados, usuariosEnParalelo[i]];
            }
        }
        // usuariosEnParalelo.forEach(u => {
        //     pagos.forEach(p => {
        //         if (p.usuario === u.nombres + " " + u.apellidos && p.paralelo === nombreParalelo) {
        //             UsuariosPagados = [...UsuariosPagados, u];
        //             pagado = true;
        //         } else {
        //             pagado = false;
        //         }
        //     });
        //     if (pagado === false) {
        //         UsuariosNoPagados = [...UsuariosNoPagados, u];
        //     }
        // });
        let tablecounter = 1;
        return (
            <div>

                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="BotonDescargaExcel"
                    table={"tablaInscritos" + nombreParalelo}
                    filename={"Inscritos Paralelo " + nombreParalelo}
                    sheet="tablexls"
                    buttonText="Exportar como archivo Excel"
                />
                <br />
                <table className="responsive-table highlight" style={{ border: '1px solid grey' }} id={"tablaInscritos" + nombreParalelo}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nombre Estudiante</th>
                            <th>No. Carnet</th>
                            <th>No. Telefono</th>
                            <th>Correo</th>
                            <th>Pago</th>
                        </tr>
                    </thead>

                    <tbody>
                        {UsuariosPagados &&
                            UsuariosPagados.map((user) => {
                                return (
                                    <tr key={tablecounter}>
                                        <td>{tablecounter++}</td>
                                        <td>{user.nombres} {user.apellidos}</td>
                                        <td>{user.noCarnet}</td>
                                        <td>{user.noTelefono}</td>
                                        <td>{user.correo}</td>
                                        <td className="green-text">Pago Realizado</td>
                                    </tr>
                                )
                            })
                        }
                        {UsuariosNoPagados &&
                            UsuariosNoPagados.map((user, index) => {
                                return (
                                    <tr key={tablecounter}>
                                        <td>{tablecounter++}</td>
                                        <td>{user.nombres} {user.apellidos}</td>
                                        <td>{user.noCarnet}</td>
                                        <td>{user.noTelefono}</td>
                                        <td>{user.correo}</td>
                                        <td className="red-text">Pago NO Realizado</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UsuariosxParalelo
