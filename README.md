# Running with docker compose
at root directory, run 
```bash
 docker-compose up
 ```


# Running manually

First, you should be running [Redis](https://redis.io/).

Then, you should configure Redis on app.module.ts
```
socket: {
          host: 'localhost',
          port: 6379,
        }
```

at root directory, run 
```bash
npm install 
```

after installing dependencies, run 
```bash
 npm start 
 ```


# Check if it's running
```bash
curl \
  -H 'Content-Type: application/json' \
  -X GET \
  http://localhost:3000
 ```
