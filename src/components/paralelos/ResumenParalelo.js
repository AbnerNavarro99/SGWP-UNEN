import React from 'react';
import { connect } from 'react-redux';
import { InscribirParalelo } from '../../store/actions/AccionesParalelo';
import { EliminarInscripcion } from '../../store/actions/AccionesParalelo';
import { Link } from 'react-router-dom';
import './ResumenParalelo.css'
import ModalInscripciones from '../layout/ModalInscripciones'
import { Button } from 'react-materialize';
import moment from 'moment';
import 'moment/locale/es';

class ResumenParalelo extends React.Component {

    onInscribir = (idParalelo) => {
        this.props.InscribirParalelo(idParalelo);
    }

    onEliminar = (idParalelo) => {
        this.props.EliminarInscripcion(idParalelo);
    }

    render() {
        const { paralelo, paralelosInscritos } = this.props;
        let yaInscrito = false;
        paralelosInscritos &&
            paralelosInscritos.forEach(p => {
                if (p === paralelo.id) {
                    yaInscrito = true;
                }
            });

        const ButtonParalelo = yaInscrito ?
            <Button node="button" className="btn red ligthen-1 z-depth-0 boton-Inscribir">
                Eliminar Verano
            </Button> :
            <Button node="button" className="btn green ligthen-1 z-depth-0 boton-Inscribir">
                Inscribir Verano
            </Button>

        const datePublicacion = paralelo.publicacion.toDate();
        moment.locale('es');
        return (
            <div className="container">
                <div className="card z-depth-0 resumen-paralelo">
                    <Link to={"/paralelos/" + paralelo.id} >
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">{paralelo.nombreParalelo}</span>
                            <p>Publicado por UNEN ANECYS</p>
                            <p className="grey-text">{moment(datePublicacion).format('LL')}</p>
                        </div>
                    </Link>
                    <ModalInscripciones paralelo={paralelo} yaInscrito={yaInscrito} trigger={ButtonParalelo} onAceptar={yaInscrito ? this.onEliminar : this.onInscribir} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        InscribirParalelo: (idParalelo) => dispatch(InscribirParalelo(idParalelo)),
        EliminarInscripcion: (idParalelo) => dispatch(EliminarInscripcion(idParalelo))
    }
}


export default connect(null, mapDispatchToProps)
    (ResumenParalelo)