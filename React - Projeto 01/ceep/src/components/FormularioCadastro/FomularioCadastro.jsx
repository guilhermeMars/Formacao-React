import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem categoria';
  }
  
  _handleMudancaTitulo(event){
    //this.titulo = evento.target.value;
    // Não funciona sem o bind pois o onChange guarda apenas a referência do método 
    // (let p = new Pessoa, p.falar()) Funciona
    // (let onChange = p.falar) Referência do método  

    // this é dimâmico e dependo do contexto que é utilizado
    event.stopPropagation(); // Para a propagação na árvore DOM do HTML
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event){
    event.stopPropagation();
    this.texto = event.target.value;
  }
  
  _handleMudancaCategoria(event){
    event.stopPropagation();
    this.categoria = event.target.value
  }

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria); // Acessa a função que foi passada nas props
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._criarNota.bind(this)}
      >
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
          <option>Sem Categoria</option>

          {this.props.categorias.map(categoria=>{
            return <option>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
