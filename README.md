# VH_Roms

## Site sobre jogos antigos e emulação. 
## A página inicial é composta por uma seção de pequenos artigos e outra com alguns videos e podcasts sobre o tema. A página de roms é composta por "cards" que são adicionados dinamicamente de acordo com a database. A database está armazenada nos serviços do Firebase, que está no guarda-chuva do Google Cloud, o Firebase é uma solução de backend as a service, ou seja, entrega um backend bem construído e de fácil utilização para frontenders que precisam de uma aplicação completa funcionando. Estou utilizando o Realtime Database, e armazenando os dados como objetos JSON, e para mostrar os cards na tela estou usando JavaScript, percorrendo um array enquanto crio os cards de acordo com a posição do array, incrementando uma variável que armazena todos os cards e a imprimindo no HTML o resultado do incremento.
