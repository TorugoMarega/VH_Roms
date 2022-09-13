<br>
<p align="center">
  <a href="https://torugomarega.github.io/VH_Roms/" ><img align="center" width="70%" src="https://github.com/TorugoMarega/VH_Roms/blob/master/assets/img/raiz/logo.png"></a>
</p>
<br>
<p align="center"> 
  <img src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465">
<img src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465">
    
<img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145">

  <img src="https://camo.githubusercontent.com/b768ae6e4f89b74512e6de02a8367fd71465bc3d88ef1cf2f1622e2017c32bea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465">
  

  <img src="https://camo.githubusercontent.com/5b148e7e2d5fdb541ea3cae400ea95884b75202ebe9846d996a20971602a8f01/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46697265626173652d3033394245353f7374796c653d666f722d7468652d6261646765266c6f676f3d4669726562617365266c6f676f436f6c6f723d7768697465">
  

    
  <img src="https://img.shields.io/badge/-Font%20Awesome-1C8BE7?logo=fontAwesome&logoColor=white&style=for-the-badge">
  
  <img src="https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge">
  
  <img src="https://img.shields.io/badge/-NeptunJS-3169AD?logo=nintendo3ds&logoColor=white&style=for-the-badge">
</p>

# VH_Roms
## Site sobre jogos antigos e emulação. 

<br>

# Indice

<!--ts-->
   * [Tecnologias](#-tecnologias)
   * [Home](#home)
   * [Roms](#roms)
   * [Jogar](#jogar)
<!--te-->

# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Css](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Bootstrap](https://getbootstrap.com)
- [Font Awesome](https://fontawesome.com)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Google Firebase](https://firebase.google.com/?hl=pt-br&gclid=CjwKCAjw1ICZBhAzEiwAFfvFhN-letDzPzlDKfI1GVuunknTfKf-D3rKSJuVwBfKxyutDPEjo4BspRoClDUQAvD_BwE&gclsrc=aw.ds) 
- [NeptunJS](https://neptunjs.xyz)
- [News API](https://newsapi.org)


# Home

### A página inicial é composta por uma seção de pequenos artigos e outra com alguns videos e podcasts sobre o tema.
<br>
<p>
  <img src="https://github.com/TorugoMarega/VH_Roms/blob/master/assets/img/print.png">
</p>
<br>

# Roms

### A página de roms é composta por "cards" que são adicionados dinamicamente de acordo com a database. A database está armazenada nos serviços do Firebase, que está no guarda-chuva do Google Cloud, o Firebase é uma solução de backend as a service, ou seja, entrega um backend bem construído e de fácil utilização para frontenders que precisam de uma aplicação completa funcionando. Estou utilizando o Realtime Database, e armazenando os dados como objetos JSON, e para mostrar os cards na tela estou usando JavaScript, percorrendo um array enquanto crio os cards de acordo com a posição do array, incrementando uma variável que armazena todos os cards e a imprimindo no HTML o resultado do incremento.

<br>

<p>
  <img src="https://github.com/TorugoMarega/VH_Roms/blob/master/assets/img/print_roms.png">
</p>

<br>

# Jogar

### Há uma página chamada de Jogar.html, essa página é montada dinamicamente, ao clicar no botão "jogar" em alguma rom, todos os dados referentes ao jogo são carregados do Google Firebase e salvos no Session Storage do Browser. Após o redirecionamento para a página "jogar.html", o JavaScript recupera os dados salvos no Session Storage e injeta na página, montando uma página nova automaticamente para cada jogo. Nessa página há uma api de emulação de jogos chamada NeptunJS, que suporta emulação de diversos consoles antigos, o emulador também permite que sejam utilizados controles. A api foi consumida utilizando o Axios.
<br>
<p>
  <img src="https://github.com/TorugoMarega/VH_Roms/blob/master/assets/img/print_jogar.png">
</p>
