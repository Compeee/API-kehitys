# API-kehitys

-- Author: Eero Kaarnalehto <eero.kaarnalehto@tuni.fi>
-- Date: 2020-02-04

DB kansiosta löytyy databaseen liittyvät knex.js tiedostot, esimerkiksi sql käskyt.

server.js tiedostosta löytyy expressillä toteutetut toiminnallisuudet.

Toiminnot:

http://localhost:3000/items

Näyttää kaikki tietokannan sisällöt

http://localhost:3000/items/"name"

Tavaran haku nimen perusteella

http://localhost:3000/delete/item/"id"

Poistaa tavaran tietokannasta id:n perusteella

http://localhost:3000/add/"name"/"price"/"year"/"condition"/"description"

Lisää tavaran tietokantaan antamillasi tiedoilla

http://localhost:3000/update/item/"id"/"name"

Päivittää antamasi id:n perusteella tavaralle uuden nimen
