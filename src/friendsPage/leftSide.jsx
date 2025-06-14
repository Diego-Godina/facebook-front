import React from 'react';

class LeftSide extends React.Component {
    render() {
        return (
            <div className="friends-sidebar ">
                <div style={{display: "flex", alignItems: "center"}}>
                    <span className="friends-sidebar-title">
                       Amigos</span>
                    <span className="friends-sidebar-title">
                        <i className="bi bi-gear-fill friends-sidebar-definições"></i>
                    </span>
                </div>
                <div className="btn-group-vertical friends-sidebar-text ">
                    <button className="btn btn-sidebar-profile-first">
                        <i className="bi bi-people-fill friends-sidebar-first-icons "></i>
                        <span className="friends-sidebar-text">
                            <a href={'/home.html'}>inicial</a>
                        </span>

                    </button>
                    <button className="btn btn-sidebar-profile">
                        <i className="bi bi-person-dash-fill friends-sidebar-icons"></i>
                        <span className="friends-sidebar-text">Pedidos de amizade</span>
                        <i className="bi bi-chevron-right friends-chevron-right"></i>
                    </button>
                    <button className="btn btn-sidebar-profile">
                        <i className="bi bi-person-plus-fill friends-sidebar-icons"></i>
                        <span className="friends-sidebar-text">Sugestões</span>
                        <i className="bi bi-chevron-right friends-chevron-right"></i>
                    </button>
                    <button className="btn btn-sidebar-profile">
                        <i className="bi bi-person-lines-fill friends-sidebar-icons"></i>
                        <span className="friends-sidebar-text">Todos os amigos</span>
                        <i className="bi bi-chevron-right friends-chevron-right"></i>
                    </button>
                    <button className="btn btn-sidebar-profile">
                        <i className="bi bi-gift-fill friends-sidebar-icons"></i>
                        <span className="friends-sidebar-text">Aniversários</span>

                    </button>
                    <button className="btn btn-sidebar-profile ">
                        <i className="bi bi-person-lines-fill friends-sidebar-icons"></i>
                        <span className="friends-sidebar-text">Listas personalizadas</span>
                        <i className="bi bi-chevron-right friends-chevron-right"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default LeftSide