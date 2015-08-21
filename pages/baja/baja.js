app.controller('BajaController', ['$scope',
  function ($scope) {
    $scope.about = {
      'about': ['Largest collegiate design competition in the world held at\
       national & international levels in various countries',
        'Requires small teams of students to design, fabricate, test, race\
       & market a single seat ATV designed for recreational purpose within\
       a set of rules.',
        'Gives students a complete experience of an engineering project & helps\
        in inculcating teamwork, leadership, designing, marketing, manufacturing\
        & CAE skills'
      ],
      'title': 'BAJA SAE'
    };

    $scope.india = {
      'about': ['Organized annually since 2007 by SAE India at NATRIP, Pithampur\
       (Near Indore, M.P.)',
        'Baja SAE India 2014 saw participation of 326 teams from across India\
       including IITs, NITs & Major Private Engineering colleges',
        'A footfall of 6,000+ students, faculty & corporate delegates was\
        recorded in a 4 day event held from 20t​ h​­23r​ d​ of February, 2014.',
        'Split into two events, Virtual Baja (held in July) & Final Event\
         (held in February)'
      ],
      'title': 'BAJA SAE India',
      'attract1': '395 teams',
      'attract2': '4 days, 1 goal'
    };

    $scope.events = [{
      'about': 'Elimination round with 395 teams judged on their design & CAE skills;\
        held in Chandigarh at Chitkara University.',
      'link': 'http://www.bajasaeindia.org/pdf/Virtual%20BAJA%202015_Results',
      'linkText': 'Team KNOx clears Virtual BAJA 2016 securing 48th rank',
      'img': '/pages/baja/virtuals.jpg',
      'imageAlt': 'The Virtuals Team',
      'title': 'Virtuals'
    }, {
      'about': 'Held near Indore at NATRIP facility; Events Divided into two categories\
       i.e. Static & Dynamic. 152 teams are shortlisted from Virtuals to participate here',
      'title': 'Main Event'
    }, {
      'about': 'Comprise of Design Evaluation, CAE Evaluation, Build Quality Test,\
       Ecological Idea presentation & Sales Presentation',
       'img': 'http://www.davisaggiebaja.com/wp-content/uploads/2015/06/TMF_1369-L.jpg',
       'imageAlt': 'Technical Inspection',
      'title': 'Static'
    }, {
      'about': 'Comprise of various tests including Braking, Acceleration, Maneuverability,\
       Hill Climb, Suspension & Traction & a 4-hour long Endurance Race.',
      'img': 'https://www.rit.edu/news/umag/fall2010/images/p2-baja.jpg',
      'imageAlt': 'The Infamous Endurace Race',
      'title': 'Dynamic'
    }];
  }
]);
