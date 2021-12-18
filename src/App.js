import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import AdminNavBar from './components/layout/Admin/AdminNavBar';
import DashBoard from './components/dashboard/Dashboard';
import AdminDashBoard from './components/dashboard/Admin/AdminDashboard';
import DetallesParalelo from './components/paralelos/DetallesParalelo';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import MisParalelos from './components/paralelos/MisParalelos';
import { connect } from 'react-redux';
import NotFound from './components/dashboard/NotFound';
import InfoxParalelo from './components/paralelos/Admin/InfoxParalelo';
import NuevoParalelo from './components/paralelos/NuevoParalelo';
import GestionCursos from './components/cursos/GestionCursos';
import ListaCursos from './components/cursos/ListaCursos';
import ModifyCurso from './components/cursos/ModifyCurso';
import AddCurso from './components/cursos/AddCurso';
import PayoutForm from './components/OnlinePayments/PayoutForm';

function App(props) {
  const { isAdmin } = props;
  return (
    <BrowserRouter>
      {isAdmin ?

        <div className="App">
          <AdminNavBar />
          <Switch>
            <Route exact path="/admin/:id" component={AdminDashBoard} />
            <Route path="/admin/infoparalelos/:id" component={InfoxParalelo} />
            <Route path="/entrar" component={SignIn} />
            <Route path="/registrarse" component={SignUp} />
            <Route path="/nuevo-paralelo" component={NuevoParalelo} />
            <Route exact path="/admin/home/gestion-cursos/modf/:id" component={ModifyCurso} />
            <Route path="/admin/home/gestion-cursos/nuevo-curso" component={AddCurso} />
            <Route path="/admin/home/gestion-cursos/lista-cursos" component={ListaCursos} />
            <Route path="/admin/home/gestion-cursos/" component={GestionCursos} />
          </Switch>
        </div>
        :
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/paralelos/:id" component={DetallesParalelo} />
            <Route path="/entrar" component={SignIn} />
            <Route path="/registrarse" component={SignUp} />
            <Route path="/mis-paralelos" component={MisParalelos} />
            <Route path="/pay" component={PayoutForm} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      }

    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  perfilIsLoaded: state.firebase.profile && state.firebase.profile.isLoaded,
  perfil : state.firebase.profile
});
const WaitTillProfile = connect(mapStateToProps)(({ perfilIsLoaded, perfil }) => {
  if (!perfilIsLoaded) return <div className="padreSpinner"> <div className="lds-hourglass"></div> </div>;
  return (
    <App isAdmin={perfil.admin} />
  );
});

export default WaitTillProfile;
