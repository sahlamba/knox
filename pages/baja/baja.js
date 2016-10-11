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
        held in Chandigarh at Chitkara University (July 2015)',
      'link': 'http://www.bajasaeindia.org/pdf/Virtual%20BAJA%202015_Results',
      'linkText': 'Team KNOx clears Virtual BAJA 2015 securing the 48th rank',
      'img': 'pages/baja/virtuals.jpg',
      'imageAlt': 'The Virtuals Team',
      'title': 'Virtuals'
    }, {
      'about': 'Held near Indore at NATRIP facility; Events Divided into two categories\
       i.e. Static & Dynamic. 152 teams are shortlisted from Virtuals to participate here',
       'img': 'http://www.bajasaeindia.org/index_files/gallery/2011/previews/020.jpg',
       'imageAlt': 'Qualified vehicles at NATRIP facility, Indore',
      'title': 'Main Event'
    }, {
      'about': 'Comprises of Design Evaluation, CAE Evaluation, Build Quality Test,\
       Ecological Idea presentation, Sales Presentation & A Technical Inspection of the vehicle (Days 1 & 2)',
       'img': 'http://www.bajasaeindia.org/index_files/gallery/2014/previews/003.jpg',
       'imageAlt': 'Technical Inspection',
      'title': 'Static Events'
    }, {
      'about': 'Comprises of various tests including Braking, Acceleration, Maneuverability,\
       Hill Climb, Suspension & Traction & a 4-hour long Endurance Race (Days 3 & 4)',
      'img': 'http://www.bajasaeindia.org/index_files/gallery/2015_baja/previews/7.jpg',
      'imageAlt': 'The Infamous Endurace Race',
      'title': 'Dynamic Events'
    }];
  }
]);
