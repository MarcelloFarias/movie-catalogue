# Movie Catalogue 

https://github.com/MarcelloFarias/movie-catalogue/assets/90793123/11c4eba9-157b-4355-9fd1-8d5b0a627066

The movie catalogue is a front-end application that list movies to the user by different categories and show details about a movie. It was built using [The Movie Database API](https://www.themoviedb.org).

Você pode conferí-lo clicando [Aqui](https://the-moviecatalogue.netlify.app)

# Tecnologias utilizadas
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

⚠️ É imprescindível obter uma API key ou Access Token da API do [TMDB](https://www.themoviedb.org) ! Você pode obtê-los criando sua conta e logo em seguida, suas credenciais de acesso

# Acesso ao projeto

Sinta-se à vontade para baixar o projeto ou cloná-lo:
```
git clone https://github.com/MarcelloFarias/movie-catalogue.git
```

# Rodando o Projeto

Após realizar download ou clone do projeto você deve criar sua variável de ambiente em um arquivo ```.env```:
```
VITE_TMDB_ACCESS_TOKEN = Seu Access Token ou  VITE_TMDB_API_KEY = Sua API Key
```
Neste projeto utilizei meu Access token, portanto, se preferir utilizar sua API key substitua o atributo ```Authorization``` no arquivo ```src/services/tmdb.movies.js```

Instale todas as dependências:
```
npm install
```

E divirta-se :)
```
npm run dev
```

# Sinta-se à vontade para contribuir

1. Bifurque este repositório.
2. Crie um branch: git checkout -b <nome_branch>.
3. Faça suas alterações e confirme-as: git commit -m '<mensagem_commit>'
4. Envie para o branch original: git push origin <nome_do_projeto> / <local>
5. Crie a solicitação de pull.

# Licença

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE) <br>
Distribuído sob a licença MIT. Consulte `LICENSE` para obter mais informações.

# Contato
Marcello Farias - [Linkedin](https://linkedin.com/in/marcello-rocha-381572231/) - [Instagram](https://instagram.com/cello.farias)
