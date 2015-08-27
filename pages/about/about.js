app.controller('AboutController', ['$scope',
  function ($scope) {
    $scope.about = {
      'title': 'About Us',
      'desc': 'Team KNOx IIT Roorkee is a group of automobile enthusiasts who specialize\
      	in designing and fabrication of All­-Terrain Vehicles. This team represents IIT Roorkee\
      	at BAJA SAE India, which is the largest annual inter­collegiate competition to be held\
      	across the country where we compete with 300 other colleges. The project is funded by\
        corporate sponsors. We work religiously and enjoy every bit of our time in the garage,\
         and winning is what we believe in.'
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
        'name': 'Sukrit Mittal',
        'post': 'Vice Captain I',
        'img': 'sukrit'
      }, {
        'name': 'Arpit Sharma',
        'post': 'Team Captain',
        'img': 'arpit'
      }, {
        'name': 'Anant Pathak',
        'post': 'Vice Captain II',
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
      }],
      'marketing': [{
        'name': 'Juhi Kaushik',
        'post': 'Marketing Manager',
        'img': 'juhi'
      }, {
        'name': 'Aman Mansuri',
        'post': 'Marketing Head',
        'img': 'amaan'
      }, {
        'name': 'Sayantan Biswas',
        'post': 'Marketing Manager',
        'img': 'shanu'
      }],
      'lastYearMembers': [{
        'name': 'Harrit Diwan',
        'post': 'Team Captain',
        'img': 'harrit'
      }, {
        'name': 'Sukrit Mittal',
        'post': 'Vice Captain',
        'img': 'sukrit'
      }, {
        'name': 'Aman Gupta',
        'post': 'Marketing Head',
        'img': 'gupta'
      }, {
        'name': 'Arpit Sharma',
        'post': 'Head of CAE Dept.',
        'img': 'arpit'
      }, {
        'name': 'Anant Pathak',
        'post': 'Head of Powertrain Dept.',
        'img': 'anant'
      }, {
        'name': 'Vikrant Yadav',
        'post': 'Head of Rollcage Dept.',
        'img': 'vikrant'
      }, {
        'name': 'Harish Mahadasu',
        'post': 'Head of Steering & Brakes Dept.',
        'img': 'harish'
      }, {
        'name': 'Shivam Saxena',
        'post': 'Head of Vehicle Dynamics Dept.',
        'img': 'shivam'
      }, {
        'name': 'Varnit Jain',
        'post': 'Head of Ergonomics Dept.',
        'img': 'varnit'
      }]
    };
  }
]);
