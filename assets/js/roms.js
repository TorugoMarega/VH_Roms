/* ------------------objeto-rom--------------
*  Imagem                                    *
*  Titulo                                    *
*  Publisher                                 *
*  Ano de lançamento                         *
----------------------------------------------
 */
//string json

const json = '{"nintendo":['+

    '{"cover":"https://images.nintendolife.com/screenshots/11375/large.jpg" ,"review":"https://www.nintendolife.com/games/snes/actraiser" ,"title":"ActRaiser","publisher":"Square Enix","year":1990},'+
    
    '{"cover":"https://images.nintendolife.com/4e4ac48fbf2e7/legend-of-zelda-a-link-to-the-past-cover.cover_large.jpg","review":"https://www.nintendolife.com/games/snes/legend_of_zelda_a_link_to_the_past","title":"The Legend of Zelda: A Link to the Past","publisher":"Nintendo","year":1992},'+
    
    '{"cover":"https://images.nintendolife.com/4663ab667452c/super-mario-world-cover.cover_large.jpg", "review":"https://www.nintendolife.com/reviews/snes/super_mario_world" ,"title":"Super Mario World","publisher":"Nintendo","year":1991},'+
    
    '{"cover":"https://images.nintendolife.com/734c71f790a53/chrono-trigger-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/chrono_trigger" ,"title":"Chrono Trigger","publisher":"Square Enix","year":1995},'+

    '{"cover":"https://images.nintendolife.com/e3055d4afdc47/super-metroid-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/super_metroid" ,"title":"Super Metroid ","publisher":"Nintendo","year":1994},'+

    '{"cover":"https://images.nintendolife.com/e33024cfb91e3/super-mario-world-2-yoshis-island-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/super_mario_world_2_yoshis_island" ,"title":" Super Mario World 2: Yoshis Island ","publisher":"Nintendo","year":1995},'+

    '{"cover":"https://images.nintendolife.com/edbf2d7e54fbb/mega-man-x-cover.cover_300x.jpg" ,"review":"https://www.nintendolife.com/games/snes/mega_man_x" ,"title":"Mega Man X","publisher":"Capcom","year":1994},'+

    '{"cover":"https://images.nintendolife.com/ec78e25e1da36/donkey-kong-country-2-diddys-kong-quest-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/donkey_kong_country_2_diddys_kong_quest" ,"title":"Donkey Kong Country 2: Diddys Kong Quest","publisher":"Capcom","year":1995},'+

    '{"cover":"https://images.nintendolife.com/94e6caab1fe8c/earthbound-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/earthbound" ,"title":"EarthBound ","publisher":"Nintendo","year":1995},'+

    '{"cover":"https://images.nintendolife.com/15515aacacdda/super-mario-all-stars-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/super_mario_all-stars" ,"title":"Super Mario All-Stars","publisher":"Nintendo","year":1993},'+

    '{"cover":"https://images.nintendolife.com/84048de2b576e/donkey-kong-country-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/donkey_kong_country" ,"title":"Donkey Kong Country","publisher":"Nintendo","year":1994},'+
    
    '{"cover":"https://images.nintendolife.com/4b082ba69a735/super-castlevania-iv-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/super_castlevania_iv" ,"title":"Super Castlevania IV","publisher":"Konami","year":1991},'+

    '{"cover":"https://images.nintendolife.com/c53da2422aa1d/street-fighter-ii-turbo-hyper-fighting-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/street_fighter_ii_turbo_hyper_fighting" ,"title":"Street Fighter II Turbo: Hyper Fighting","publisher":"Capcom","year":1993},'+

    '{"cover":"https://images.nintendolife.com/4f79434c4ef05/secret-of-mana-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/secret_of_mana" ,"title":"Secret of Mana","publisher":"Square Enix","year":1993},'+

    
    '{"cover":"https://images.nintendolife.com/ebdeb9adf637e/goof-troop-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/goof_troop" ,"title":"Goof Troop","publisher":"Capcom","year":1993},'+

    '{"cover":"https://images.nintendolife.com/3ab327b4ebd66/kirby-super-star-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/kirby_super_star" ,"title":"Kirby Super Star","publisher":"Capcom","year":1996},'+

    
    '{"cover":"https://images.nintendolife.com/aaedf62e2e897/sunset-riders-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/sunset_riders" ,"title":"Sunset Riders","publisher":"Konami","year":1993},'+

    '{"cover":"https://images.nintendolife.com/b8e7818cbd043/super-mario-kart-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/super_mario_kart" ,"title":"Super Mario Kart","publisher":"Nintendo","year":1992},'+

    '{"cover":"https://images.nintendolife.com/e1c0ed4af4f36/final-fight-3-cover.cover_large.jpg" ,"review":"https://www.nintendolife.com/games/snes/final_fight_3_snes" ,"title":"Final Fight 3","publisher":"Capcom","year":1996},'+

    '{"cover":"https://s2.glbimg.com/pXVkrXbT5rBCyKv68VzvXb5UrKM=/0x0:913x579/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/l/A/zPe6OzRnitN3F1rd77Gw/captura-de-tela-2020-04-24-as-10.06.52.png" ,"review":"https://www.techtudo.com.br/listas/2020/04/top-gear-relembre-os-jogos-da-franquia-que-era-sucesso-nos-anos-90.ghtml" ,"title":"Top Gear 2","publisher":"Kemco","year":1992}'+

']}' 


var catalogo = document.getElementById("catalogo")

//a string json é convertida em objeto json
const rom = JSON.parse(json)
var card;
var allCards = '';
 for (i=0; i<rom.nintendo.length; i++){

    card =`<div class="rom">
    <img src="${rom.nintendo[i].cover}" alt="">
    <h3><a href="${rom.nintendo[i].review}">${rom.nintendo[i].title}</a></h3>
    <p>${rom.nintendo[i].publisher}</p>
    <p>Ano:${rom.nintendo[i].year}</p>
    </div>`

    allCards += card
    catalogo.innerHTML = allCards
}
