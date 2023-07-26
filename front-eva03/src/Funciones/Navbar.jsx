import '../App.css'
import logopython from './Python-logo.svg';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
          <div className="container">
            <a className="navbar-brand" href="/"><img src={logopython} width="50px"/> Ez-PyZ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      );
}

export default Navbar;