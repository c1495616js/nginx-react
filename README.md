## Project for testing nginx with react.js

```
docker-compose up
```

### Config in `nginx.conf`

After changing code in `nginx.conf`,
need to restart nginx in container.

```
docker exec -it <nginx_container_id> nginx -s reload
```

### Test using webpack-dev-server
checkout to the commit: `webpack-dev-server`

