import React from 'react'

class middleSide extends React.Component {
    render() {
        return (
            <div className="middle">
                <div className="post">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex align-items-center ">
                            <img src="imagens2/benfica.jpg" alt="Foto de perfil" className="post-pics"/>
                            <div className="form-control d-flex align-items-center post-publish" role="button" >
                                Em que estás a pensar?
                            </div>
                        </li>

                        <li className="list-group-item d-flex align-items-center">
                            <div className="d-flex w-100 justify-content-between ">
                                <button className="btn btn-white w-100">
                                    <i className="bi bi-camera-video-fill post-icon post-icon-video"></i>Vídeo em direto
                                </button>
                                <button className="btn btn-white w-100">
                                    <i className="bi bi-images post-icon post-icon-foto"></i>Foto/vídeo
                                </button>
                                <button className="btn btn-white w-100">
                                    <i className="bi bi-emoji-smile-fill post-icon post-icon-smile"></i>A sentir-me/Atividade
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="post">
                    <button className="btn btn-story">
                        <i className="bi bi-plus story-icon"></i>
                        <div className="text-content d-flex justify-content-between">
                            <h6>Criar história</h6>
                            <p>Partilha uma foto ou escreve algo</p>
                        </div>

                    </button>
                </div>

                <div className="post">
                    <div className="pub-container">
                        <img src="imagens2/benfica.jpg" className="pub-profile" />

                        <div className="pub-text">
                        <span className="pub-title">
                          Sport Lisboa e Benfica
                          <i className="bi bi-patch-check-fill text-primary custom-icon"></i>
                        </span>
                            <p className="pub-time">1 d •</p>
                        </div>
                    </div>

                    <div className="pub-above-img">
                        <span>🔴⚪ Os 𝟑 𝐩𝐨𝐧𝐭𝐨𝐬 no clássico são 𝐍𝐎𝐒𝐒𝐎𝐒! ❤‍🔥</span>
                        <p className="pub-hashtag">#FCPSLB • #LigaPortugalBetclic • #Emirates</p>
                    </div>

                    <div className="pub-pic">
                        <img src="imagens2/4-1.jpg" />
                    </div>

                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex align-items-center">
                                <span className="pub-comentario2">17 mil</span>
                                <span className="pub-comentario">1,5 mil comentários  3,4 mil partilhas</span>
                            </li>

                            <li className="list-group-item d-flex align-items-center">
                                <div className="d-flex w-100 justify-content-between ">
                                    <button className="btn btn-pub w-100">
                                        <i className="bi bi-hand-thumbs-up post-icon"></i>
                                        Gosto
                                    </button>
                                    <button className="btn btn-pub w-100">
                                        <i className="bi bi-chat post-icon"></i>
                                        Comentar
                                    </button>
                                    <button className="btn btn-pub w-100">
                                        <i className="bi bi-arrow-90deg-right post-icon"></i>
                                        Partilhar
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default middleSide