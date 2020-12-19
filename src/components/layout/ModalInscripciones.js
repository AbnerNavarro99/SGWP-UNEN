import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize';


class ModalInscripciones extends Component {

    render() {
        return (
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Cancelar</Button>,
                    <Button flat modal="close" node="button" waves="green"
                        onClick={this.props.id?
                            () => this.props.onAceptar(this.props.id)
                            :() => this.props.onAceptar(this.props.paralelo.id)}
                    >Aceptar</Button>
                ]}
                // bottomSheet
                fixedFooter={false}
                header="¿Continuar?"
                id="Modal-Inscripciones"
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
                <p>A continuación {this.props.yaInscrito ?
                    <span>será eliminado de este verano</span>
                    :
                    <span>será enlistado en este paralelo</span>
                                    }  - {this.props.paralelo.nombreParalelo}. ¿Desea continuar?</p>
            </Modal>
        );
    }
}

export default ModalInscripciones;
