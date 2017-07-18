const inputs = process.argv.slice(2);
const name = inputs[0];
const surname = inputs[1];
const birth = inputs[2];

const knex = require("./knex");
const pg = knex.pg; 

function insert() {
    pg().
    insert({
        first_name: name,
        last_name: surname,
        birthdate: birth
    })
    .into("famous_people")
    .asCallback((err, id) => {
        if (err) return console.error(err);
        console.log("INSERTED ==> ", id);
    })
    .finally( () => {
        pg.destroy();
    });
}

insert();