import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import AdminResumenParalelo from './AdminResumenParalelo';
import './AdminListaParalelos.css'

const ResumenParalelos = ({ paralelos }) => {
    return (
        <div className="col s12 lista-admin-paralelos">
            <div className="row ResumenTitle">
                <div style={{ textAlign:'center'}}>
                    <h3>Resumen</h3>
                </div>
            </div>
            <div className="row align-center lista">
                {paralelos &&
                    paralelos.map(par => {
                        return (
                            <AdminResumenParalelo key={par.id} paralelo={par} />
                        )
                    })
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        paralelos: state.firestore.ordered.paralelosConvocados
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([{
        collection: 'paralelosConvocados'
    }])
)(ResumenParalelos)