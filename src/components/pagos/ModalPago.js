import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { LiquidarPago } from '../../store/actions/AccionesPagos';

class ModalPago extends Component {

    onLiquidar = (idPago) => {
        const InfoPago = this.props.pago;
        const { deuda, reembolso } = this.props;
        let montoPagadoNuevo = deuda ? parseInt(InfoPago.montoPagado) + parseInt(deuda): parseInt(InfoPago.montoPagado);
        montoPagadoNuevo = reembolso ? parseInt(montoPagadoNuevo) - parseInt(reembolso) : parseInt(montoPagadoNuevo);
        this.props.LiquidarPago(idPago, montoPagadoNuevo);
    }

    render() {

        const InfoPago = this.props.pago;

        return (
            <Modal
                actions={[
                    <Button modal="close" node="button" waves="red"
                        onClick={() => this.onLiquidar(this.props.idPago)}
                    >Liquidar</Button>,
                    <Button flat modal="close" node="button" waves="grey">Cancelar</Button>
                ]}
                fixedFooter={false}
                header="Modificar Información de Pago"
                id="Modal-Pago"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                // root={[object HTMLBodyElement]}
                // trigger={<Button node="button">MODAL BUTTOM SHEET STYLE</Button>}
                trigger={this.props.trigger}
            >

                <table>
                    <thead>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Número de factura</td>
                            <td>{InfoPago.No}</td>
                        </tr>
                        <tr>
                            <td>Estudiante</td>
                            <td>{InfoPago.usuario}</td>
                        </tr>
                        <tr>
                            <td>Último monto pagado</td>
                            <td>{InfoPago.montoPagado}</td>
                        </tr>
                        <tr>
                            <td>Deuda</td>
                            {
                                this.props.deuda ?
                                    <td className="red-text">C$ {this.props.deuda}.00</td>
                                    :
                                    <td></td>
                            }
                        </tr>
                        <tr>
                            <td>Reembolso</td>
                            {
                                this.props.reembolso ?
                                    <td className="green-text">C$ {this.props.reembolso}.00</td>
                                    :
                                    <td></td>
                            }
                        </tr>
                    </tbody>
                </table>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LiquidarPago: (idPago, montotoPagado) => dispatch(LiquidarPago(idPago, montotoPagado))
    }
}

export default connect(null, mapDispatchToProps)(ModalPago);
