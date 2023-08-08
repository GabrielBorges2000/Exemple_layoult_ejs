import { Router as routersExpress } from 'express';
import { faker } from '@faker-js/faker';

const router = routersExpress();

//Home
router.get('/', function (req, res) {
  
  res.render('pages/home');
});

//About
router.get('/about', function (req, res) {
  const users = [{
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  }, {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  }, {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  }
  ];

  res.render('pages/about', {
    usuarios: users
  });
});

//Contact
router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!');
});

export default router;
