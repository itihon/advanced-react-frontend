import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('json-server/db.json');
const middlewares = jsonServer.defaults();

const isAuthorized = (req) => req.headers.authorized !== undefined;

server.use(jsonServer.bodyParser);
server.use(middlewares);


server.post('/login', (req, res) => {
  const db = router.db; // lowdb instance
  const { username, password } = req.body;
  const user = db.get('users').find({ username, password }).value();

  if (user) {
    res.status(200).json({ id: user.id, username: user.username });
  } else {
    res.sendStatus(401);
  }
});

server.use((req, res, next) => {
 if (isAuthorized(req)) { // add your authorization logic here
   next(); // continue to JSON Server router
 } else {
   res.sendStatus(401);
 }
});

server.use(router);


server.listen(3031, () => {
  console.log('JSON Server is running')
});