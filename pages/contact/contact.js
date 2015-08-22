app.controller('ContactController', ['$scope',
  function($scope) {
    $scope.contacts = [{
      'name': 'Anant Pathak',
      'post': 'Vice Captain II',
      'phone': '8266800603',
      'mails': ['anantpathak@gmail.com'],
      'img': 'anant'
    }, {
      'name': 'Aman Mansuri',
      'post': 'Marketing Head',
      'phone': '7409949499',
      'mails': ['amaan_mansuri@yahoo.com'],
      'img': 'amaan'
    }, {
      'name': 'Juhi Kaushik',
      'post': 'Marketing Manager',
      'phone': '9045568656',
      'mails': ['juhikaushik21@gmail.com'],
      'img': 'juhi'
    }, {
      'name': 'Sayantan Biswas',
      'post': 'Marketing Manager',
      'phone': '9897833160',
      'mails': ['sayantan.biswas10@gmail.com'],
      'img': 'shanu'
    }];

    $scope.faculty = [{
      'name': 'Dr. Akshay Dvivedi',
      'advisory': 'Faculty Advisor, SAE India IIT Roorkee Chapter',
      'post': 'Assistant Professor',
      'dept': 'MIED, IIT Roorkee',
      'img': 'http://people.iitr.ernet.in/facultyphoto/dvaksfme.jpg'
    }, {
      'name': 'Dr. Arup Kumar Das',
      'advisory': 'Faculty Advisor, SAE India IIT Roorkee Chapter',
      'post': 'Assistant Professor',
      'dept': 'MIED, IIT Roorkee',
      'img': 'http://people.iitr.ernet.in/facultyphoto/akdasfme.jpg'
    }];
  }
]);
