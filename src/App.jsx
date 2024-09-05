import React from 'react';
import './App.css';

const AdmNoticias = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <img src="WhatsApp Image 2024-09-04 at 19.27.47.jpeg" alt="Profile" className="profile-pic" />
        </div>
        <div className="menu">
          <button className="menu-item">
            <i className="fas fa-home"></i> Home
          </button>
          <button className="menu-item">
            <i className="fas fa-bell"></i> Notícias
          </button>
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
                <p>No dia 28 a fiesc ira organizar uma campanha de menor aprendiz</p>
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
