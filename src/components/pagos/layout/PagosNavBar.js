import React from 'react';
import { Link } from 'react-router-dom';
import './PagosNavBar.css'
import M from 'materialize-css/dist/js/materialize.min.js';

class PagosNavBar extends React.Component {

    componentDidMount = () => {
        M.AutoInit();
    }

    state = {
        paraleloFiltrado : ''
    }

    cambiarParalelo = (nombreParalelo) => {
        this.props.OnFiltrarPorParalelo(nombreParalelo);
        this.setState({
            paraleloFiltrado: nombreParalelo
        })
    }

    render() {
        const { paralelos } = this.props;
        const { paraleloFiltrado } = this.state;

        return (
            <div className="listaPagosNavBar">
                <ul id="dropdown1" className="dropdown-content">
                    <li>
                        <Link to="#" onClick={() => this.cambiarParalelo(null)}>Todos</Link>
                    </li>
                    {
                        paralelos &&
                        paralelos.map(par => {
                            return (
                                <li key={par.id}>
                                    <Link to="#" onClick={() => this.cambiarParalelo(par.nombreParalelo)}>{par.nombreParalelo}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <nav className="nav-wrapper blue darken-1 PagosNavBar">
                    <ul className="left">
                        <li>
                            <a className="dropdown-trigger" href="" data-target="dropdown1">
                                {paraleloFiltrado?
                                <span>{paraleloFiltrado}</span>
                                :
                                <span>Filtrar por Todos</span>
                                }
                                <i className="material-icons right">arrow_drop_down</i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}


export default PagosNavBar;