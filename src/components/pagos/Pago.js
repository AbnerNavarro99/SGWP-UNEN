import React from 'react';
import ModalPago from './ModalPago';
import { Button } from 'react-materialize';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Pago extends React.Component {
    render() {
        const { idPago, costosActualesParalelos } = this.props;
        let deuda, reembolso;
        const { pagos } = this.props;
        let pago;
        if (pagos) {
            pago = pagos[idPago];
            console.log(costosActualesParalelos)
            if (pago) {
                costosActualesParalelos.forEach(cp => {
                    if (cp.paralelo === pago.paralelo) {
                        if (pago.montoPagado < cp.costoActual) {
                            deuda = cp.costoActual - pago.montoPagado;
                            deuda = Math.abs(deuda);
                        }
                        else if (pago.montoPagado > cp.costoActual) {
                            reembolso = cp.costoActual - pago.montoPagado;
                            reembolso = Math.abs(reembolso);
                        }
                        else {
                            deuda = pago.deuda;
                            reembolso = pago.reembolso;
                        }
                    }
                });
                if (!pago.estado) {
                    return null
                }

                const ButtonModificar = <Button node="button" className="btn blue ligthen-1 z-depth-0 boton-ModificarPago">
                    <i className="small material-icons build-icon">build</i>
                </Button>
                return (
                    <tr key={pago.No}>
                        <td>{pago.No}</td>
                        <td>{pago.usuario}</td>
                        <td>{pago.paralelo}</td>
                        <td>C$ {pago.montoPagado}.00</td>
                        {
                            deuda > 0 ?
                                <td className="red-text">C$ {deuda}.00</td>
                                :
                                <td>C$ 0.00</td>
                        }
                        {
                            reembolso > 0 ?
                                <td className="green-text">C$ {reembolso}.00</td>
                                :
                                <td>C$ 0.00</td>
                        }
                        <td>{pago.estado ? "Activo" : "Cancelado"}</td>
                        <td>
                            <ModalPago pago={pago} idPago={idPago} trigger={ButtonModificar} deuda={deuda} reembolso={reembolso} />
                        </td>
                    </tr>
                )
            } else {
                return null;
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        pagos: state.firestore.data.pagos
    }
}
export default
    compose(
        connect(mapStateToProps),
        firestoreConnect([{
            collection: 'pagos',
        }
        ])
    )
        (Pago);
