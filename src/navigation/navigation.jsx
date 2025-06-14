import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-white">
                <div className="container-fluid">
                    <div className="navbar-left d-flex align-items-center">
                        <a href="Home.html">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <form className="search-form d-flex align-items-center position-relative">
                            <i className="bi bi-search search-icon"></i>
                            <input type="search" className="form-control rounded-pill search-input"
                                   placeholder="Pesquisar no Facebook"/>
                        </form>
                    </div>

                    <div className="navbar-center d-flex align-items-center justify-content-center">
                        <button className="btn"><i className="bi bi-house navbar-icon"></i></button>
                        <button className="btn"><i className="bi bi-play-btn"></i></button>
                        <button className="btn"><i className="bi bi-shop"></i></button>
                        <button className="btn"><i className="bi bi-person-circle"></i></button>
                        <button className="btn"><i className="bi bi-controller"></i></button>
                    </div>

                    <div className="navbar-right d-flex align-items-center">
                        <button className="btn-back"><i className="bi bi-list"></i></button>
                        <button className="btn-back"><i className="bi bi-messenger"></i></button>
                        <button className="btn-back"><i className="bi bi-bell-fill"></i></button>
                        <button className="btn">
                            <img src="/imagens/profile-pic-benfica.jpg" alt="profile-pic-mini"
                                 className="profile-pic-mini"/>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;