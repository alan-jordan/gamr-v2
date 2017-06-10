exports.seed = function(knex, Promise) {
  return knex('user_games').del()
    .then(function () {
      return knex('user_games').insert([
        {
          id: 1,
          user_id: 1,
          igdb_game_id: 16,
          user_game_date_bought: '2017-04-22',
          user_game_system_id: 2,
          user_game_format: 'Physical'
        },
        {
          id: 2,
          user_id: 1,
          igdb_game_id: 17,
          user_game_date_bought: '2016-04-22',
          user_game_system_id: 2,
          user_game_format: 'Digital'
        },
        {
          id: 3,
          user_id: 1,
          igdb_game_id: 18,
          user_game_date_bought: '2015-04-22',
          user_game_system_id: 2,
          user_game_format: 'Digital'
        },
        {
          id: 4,
          user_id: 1,
          igdb_game_id: 19,
          user_game_date_bought: '2014-04-22',
          user_game_system_id: 2,
          user_game_format: 'Physical'
        },
        {
          id: 5,
          user_id: 1,
          igdb_game_id: 20,
          user_game_date_bought: '2013-04-22',
          user_game_system_id: 2,
          user_game_format: 'physical'
        }
      ]);
    });
};
