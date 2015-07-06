app.controller('AboutController', ['$scope',
  function($scope) {
    $scope.about = {
      'title': 'About Us',
      'desc': 'Team KNOx IIT Roorkee is a group of automobile enthusiasts who specialize\
      	in designing and fabrication of All­-Terrain Vehicles. This team represents IIT Roorkee\
      	at BAJA SAE India, which is the largest annual inter­collegiate competition to be held\
      	across the country where we compete with 300 other colleges. The project is funded by\
      	the institute to some extent and the rest is the investment of corporate sponsors.\
      	We work religiously and enjoy every bit of our time in the garage, and winning is\
      	what we believe in.'
    };

    $scope.aim = {
      'aims': [
        'Since its birth in 2009, Team KNOx has grown leaps and bounds. With a gush of motivation\
      we wish to improve our performance and land among the top positions in BAJA SAE. By analysing\
      the present and previous performances we need to excavate the crux points where there is a\
      need of improvement.',
        'The future models by Team KNOx would see the incorporation of self­ innovated technologies,\
      namely, Real Time Traction Enhancement (RTTE) and Enhanced Manoeuvrability by Selective Braking (EMSB).',
        'We aim for finishing among the top five positions in BAJA and with the state of progress\
      and the level of enthusiasm in the team, the idea no longer seems far fetched.'
      ],
      'title': 'Aim',
      'gist': 'Top 5 Finish'
    };

    $scope.team = {
      'title': 'Team',
      'season': '2015-16',
      'seniors': [{
        'name': 'Arpit Sharma',
        'post': 'Team Captain',
        'img': 'arpit'
      }, {
        'name': 'Sukrit Mittal',
        'post': 'Vice Captain',
        'img': 'sukrit'
      }, {
        'name': 'Anant Pathak',
        'post': 'Driver & Marketing Head',
        'img': 'anant'
      }],
      'members': [{
        'name': 'Aakash Parikh',
        'post': 'Rollcage & CAE Engineer',
        'img': 'parikh'
      }, {
        'name': 'Nikhilesh Singh',
        'post': 'Rollcage & CAE Engineer',
        'img': 'nikhilesh'
      }, {
        'name': 'Mihir Rana',
        'post': 'Suspensions Engineer',
        'img': 'mihir'
      }, {
        'name': 'Yash Sharma',
        'post': 'Suspensions Engineer',
        'img': 'yash'
      }, {
        'name': 'Aman Agasi',
        'post': 'Wheel Assembly Engineer',
        'img': 'agasi'
      }, {
        'name': 'Sahil Lamba',
        'post': 'Wheel Assembly Engineer',
        'img': 'sahil'
      }, {
        'name': 'Aayush Sable',
        'post': 'Powertrain Engineer',
        'img': 'sable'
      }, {
        'name': 'Hard Matarkar',
        'post': 'Powertrain Engineer',
        'img': 'hard'
      }, {
        'name': 'Aayush Parth',
        'post': 'Steering & Brakes Engineer',
        'img': 'parth'
      }, {
        'name': 'Juhi Kaushik',
        'post': 'Marketing Member',
        'img': 'juhi'
      }, {
        'name': 'Amaan Mansuri',
        'post': 'Marketing Member',
        'img': 'amaan'
      }, {
        'name': 'Sayantan Biswas',
        'post': 'Marketing Member',
        'img': 'shanu'
      }]
    };
  }
]);
