const name = process.argv.slice(2);

const knex = require("./knex");
const pg = knex.pg; 

function connect(name) {
    console.log(name);
    pg.select()
    .from('famous_people')
    .where({
        first_name: name[0]
    })
    .asCallback((err, result) => {
        if (err) return console.error(err);

        console.log(result);
    });
    pg.destroy();
}



connect(name);