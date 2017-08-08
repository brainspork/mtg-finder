'use strict';

angular.
  module('search').
    component('search', {
      templateUrl: 'app/search/search.template.html',
      controller: ['$http',
        function search($http) {
          var self = this;
          self.sets = ['Hour of Devastation', 'Amonkhet', 'Aether Revolt', 'Kaladesh', 'Eldritch Moon', 'Shadows Over Innistrad', 'Oath of the Gatewatch', 'Battle for Zendikar', 'Dragons of Tarkir', 'Fate Reforged', 'Khans of Tarkir', 'Journey Into Nyx', 'Born of the Gods', 'Theros', 'Dragon\'s Maze', 'Gatecrash', 'Return to Ravnica', 'Avacyn Restored', 'Dark Ascension', 'Innistrad', 'New Phyrexia', 'Mirrodin Besieged', 'Scars of Mirrodin', 'Rise of the Eldrazi', 'Worldwake', 'Zendikar', 'Alara Reborn', 'Conflux', 'Shards of Alara', 'Eventide', 'Shadowmoor', 'Morningtide', 'Lorwyn', 'Future Sight', 'Planar Chaos', 'Time Spiral', 'Timeshifted', 'Coldsnap', 'Dissension', 'Guildpact', 'Ravnica', 'Saviors of Kamigawa', 'Betrayers of Kamigawa','Champions of Kamigawa', 'Fifth Dawn', 'Darksteel', 'Mirrodin', 'Scourge', 'Legions', 'Onslaught', 'Judgment', 'Torment', 'Odyssey', 'Apocalypse', 'Planeshift', 'Invasion', 'Prophecy', 'Nemesis', 'Mercadian Masques', 'Urza\'s Destiny', 'Urza\'s Legacy', 'Urza\'s Saga', 'Exodus', 'Stronghold', 'Tempest', 'Weatherlight', 'Visions', 'Mirage', 'Alliances', 'Homelands', 'Ice Age', 'Fallen Empires', 'The Dark', 'Legends', 'Antiquities', 'Arabian Nights'].sort();

          self.results;
          self.find = function() {
            self.results = [];
            var $set = $('#set-name').val();
            var $name = $('#card-name').val();

            if($set === ''  && $name != '') {
              $http.get(`/card/${$name}`).
                then(res => {
                  self.results = res.data;
                });
            } else if($set != ''  & $name != '') {
              $http.get(`/cards/${$name}/${$set}`).
                then(res => {
                  self.results = res.data;
                });
            } else if($set != '' && $name === '') {
              $http.get(`/set/${$set}`).
                then(res => {
                  self.results = res.data;
              });
            }
          }
        }
      ]
    });
