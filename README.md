# Running 
## With docker
### at root directory, run 
```bash
 docker build -t nest-server . 
 ```

## With docker compose
### at root directory, run 
```bash
 docker run -it -p 3000:3000 nest-server
 ```


## Manually

## at root directory, run 
```
bash npm install 
```

## run 
```bash
 npm start 
 ```


# Checking if it's running
```bash
curl \
  -H 'Content-Type: application/json' \
  -X GET \
  http://localhost:3000/
 ```