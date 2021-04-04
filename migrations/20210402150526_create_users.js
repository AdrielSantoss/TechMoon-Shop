
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', table => {
            table.increments('id').primary()
            table.string('name').notNull()
            table.string('email').notNull().unique()
            table.string('password').notNull()
            table.integer('access').defaultTo(0)
        }).then(()=>{
           return knex('users').insert({
              id: 1,
              name: 'usuario',
              email: 'usuario@gmail.com',
              password: '123456',
              access: 0
          })
        })
    ]);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
