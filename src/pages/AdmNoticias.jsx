import React from 'react';
import './AdmNoticias.css'; // Importa o CSS corrigido

const AdmNoticias = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <img src="WhatsApp Image 2024-09-04 at 19.27.47.jpeg" alt="Profile" className="profile-pic" />
        </div>
        <div className="menu">
          <div className="menu-item active">
            <span className="icon">🏠</span>
            <p>Home</p>
          </div>
          <div className="menu-item">
            <span className="icon">🔔</span>
            <p>Notícias</p>
          </div>
          <div className="menu-item">
            <span className="icon">🚨</span>
            <p>Ocorrências</p>
          </div>
        </div>
      </div>

      <div className="main-content">
        <h1 className="title">Adm Notícias</h1>

        <div className="noticias-list">
          {Array(7).fill(0).map((_, index) => (
            <div className="noticia" key={index}>
              <div className="data">
                <p className="data-numero">28</p>
                <p className="data-mes">Mar</p>
              </div>
              <div className="descricao">
                <p><strong>Notícia:</strong></p>
                <p>No dia 28 a FIESC irá organizar uma campanha de menor aprendiz.</p>
              </div>
              <div className="acoes">
                <button className="editar-btn">Editar</button>
                <button className="excluir-btn">Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="editar-form">
        <h2>Editar Notícia</h2>
        <form>
          <div className="form-group">
            <label>Escolher Notícia</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Título</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Data</label>
            <input type="text" />
          </div>
          <button className="salvar-btn">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default AdmNoticias;
