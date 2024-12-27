## **Previsão do Tempo 🌦️**

Um aplicativo de previsão do tempo desenvolvido em **React**, que busca informações climáticas em tempo real usando a API **OpenWeatherMap**. O projeto exibe temperatura, umidade e condição climática com ícones e design responsivo.

---

### **🚀 Funcionalidades**
- Consulta de **previsão do tempo** em tempo real para qualquer cidade.
- Visualização de:
  - Temperatura em **Celsius**.
  - Umidade.
  - Condição climática com ícones visuais.
- Tradução automática das condições climáticas para **português**.
- Design **responsivo** com imagem de fundo dinâmica.

---

### **🛠️ Tecnologias utilizadas**
- **React**: Biblioteca principal para construção da interface.
- **Axios**: Requisições HTTP para a API.
- **React-Icons**: Ícones visuais para representar o clima.
- **CSS3**: Estilização e responsividade.

---

### **⚙️ Instalação e Configuração**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/weather-app.git](https://github.com/R4ffz/previsaodotempo)
   cd weather-app
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Adicione sua chave da API** do OpenWeatherMap:
   - Acesse [OpenWeatherMap](https://openweathermap.org/api) e crie uma conta.
   - Obtenha sua **API Key**.
   - Substitua `"SUA_API_KEY"` no arquivo **`Weather.js`**:

     ```javascript
     const apiKey = "SUA_API_KEY";
     ```

4. **Inicie o projeto**:
   ```bash
   npm start
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

### **📂 Estrutura do Projeto**

```plaintext
weather-app/
|-- public/                  # Arquivos públicos
|-- src/
|   |-- assets/              # Imagens e arquivos estáticos
|   |   |-- imagemfundo.jpg
|   |-- components/          # Componentes React
|   |   |-- Weather.js
|   |-- App.js               # Componente principal
|   |-- index.js             # Ponto de entrada
|   |-- styles.css           # Estilização global
|-- package.json             # Configuração do projeto
|-- README.md                # Documentação
```

---

### **🔗 API Utilizada**

- **OpenWeatherMap API**: [Documentação](https://openweathermap.org/api).

---

### **💻 Melhorias Futuras**
- Adicionar previsão para os próximos dias.
- Suporte a geolocalização automática.
- Troca dinâmica de imagens de fundo com base no clima.

---

### **👤 Autor**

- **Nome**: Rafael Barros Cabral   

---

### **📃 Licença**
Este projeto é licenciado sob a licença **MIT**.

---
