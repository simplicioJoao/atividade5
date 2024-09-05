import QRCodeGenerator from "../pages/QRCodeGenarator"; // Importa o componente QRCodeGenerator
import IPAddressFinder from "../pages/IPAddressFinder"; // Importa o componente IPAddressFinder
import MovieSearchEngine from "../pages/MovieSearchEngine"; // Importa o componente MovieSearchEngine
import TodoApp from "../pages/TodoApp"; // Importa o componente TodoApp
import QuizApp from "../pages/QuizApp"; // Importa o componente QuizApp
import LanguageTranslator from "../pages/LanguageTranslator"; // Importa o componente LanguageTranslator
import styled from "styled-components"; // Importa a biblioteca styled-components para estilização

// Estilização do botão de retorno
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente ComponentRenderer renderiza diferentes componentes com base em currentComponent
const ComponentRenderer = ({ currentComponent, onReturn }) => (
  <>
    {/* Renderiza o componente correspondente a currentComponent */}
    {currentComponent === 'QRCodeGenerator' && <QRCodeGenerator />}
    {currentComponent === 'IPAddressFinder' && <IPAddressFinder />}
    {currentComponent === 'MovieSearchEngine' && <MovieSearchEngine />}
    {currentComponent === 'TodoApp' && <TodoApp />}
    {currentComponent === 'QuizApp' && <QuizApp />}
    {currentComponent === 'LanguageTranslator' && <LanguageTranslator />}
    {/* Botão de retorno para voltar ao carousel */}
    <ReturnButton onClick={onReturn}>Return</ReturnButton>
  </>
);

export default ComponentRenderer;