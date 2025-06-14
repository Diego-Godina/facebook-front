import React from 'react';

class leftSide extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="btn-group-vertical">
                    <button className="btn btn-light">
                        <img src="imagens2/benfica.jpg" alt="Foto de perfil" className="sidebar-pics"/>
                            Benfica
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-people-fill sidebar-icons " ></i>
                        Amigos
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-clock sidebar-icons"></i>
                        Memórias
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-bookmark-fill sidebar-icons"></i>
                        Guardados
                    </button>
                    <button className="btn btn-light" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" sidebar-pics grupos-svg" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z "  />
                        </svg>Grupos
                    </button>
                    <button className="btn btn-light ">
                        <i className="bi bi-youtube sidebar-icons"></i>
                        Video
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-shop sidebar-icons"></i>
                        Marketplace
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-newspaper sidebar-icons"></i>
                        Feeds
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-calendar4-event sidebar-icons"></i>
                        Eventos
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-bar-chart-fill sidebar-icons"></i>
                        Gestor de Anúncios
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-heart-fill sidebar-icons"></i>
                        Angariação de fundos
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-arrow-down-circle sidebar-icons"></i>
                        Ver mais
                    </button>
                </div>
            </div>
        )
    }
}

export default leftSide