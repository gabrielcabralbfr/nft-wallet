# Running With docker
### at root directory, run 
```bash
 docker build -t nest-server . 
 ```

# Running with docker compose
### at root directory, run 
```bash
 docker run -it -p 3000:3000 nest-server
 ```


# Running manually

### at root directory, run 
```
bash npm install 
```

### after installing dependencies, run 
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