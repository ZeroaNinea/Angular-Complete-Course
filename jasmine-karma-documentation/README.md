# JasmineKarmaDocumentation

This is a learning project with the official [Jasmine](https://jasmine.github.io/pages/docs_home.html) documentation.

I wrote Jasmine examples and integrated Jasmine with NgRx and with `@Output` and `@Input`. I created these files, folders and components duing my learning:

- **The folder with Jasmine examples:** [`examples`](./src/examples/)
- **CounterComponent with NgRx:** [`counter`](./src/app/counter/)
- **SimpleCounterComponent with `@Output` and `@Input`:** [`simple-counter`](./src/app/simple-counter/)

## Performance Testing and DevOps

I decided to use this project to learn performance testing and DevOps.

### GitHub Actions

I used this [video tutorial](https://www.youtube.com/watch?v=ylHfetX3QlU) and the [official documentation](https://docs.github.com/en/actions) to learn GitHub Actions. I wrote three files during my learning:

- [`main.yml`](../.github/workflows/main.yml)
- [`basic-concepts.yml`](../.github/workflows/basic-concepts.yml)
- [`matrix.yml`](../.github/workflows/matrix.yml)

**Configurations:**

- [`karma.conf.js`](./karma.conf.js)

### Linting

Linting is needed to check unused variables and imports.

To install linting in Angular:

```bash
ng add @angular-eslint/schematics

```

To run linting locally:

```bash
npm run lint

```

**Configurations:**

- [`eslint.confing.js`](./eslint.config.js)

### Lighthouse CI

I wrote the [`lighthouse-ci-getting-started.yml`](../.github/workflows/lighthouse-ci-getting-started.yml) file while learning Lighthouse CI. I used this [official guide](https://github.com/GoogleChrome/lighthouse-ci).

To run the Lighthouse CI locally use the following commands:

```bash
npm ci
ng build --configuration production
npm install -g http-server
http-server ./dist/jasmine-karma-documentation/browser -p 4200 --gzip
npm install -g @lhci/cli
lhci autorun

```

**Configurations:**

- [`.lighthouserc.js`](./.lighthouserc.js)

### Artillery

Artillery is a load-testing tool for performance testing. I used this [video lesson](https://www.youtube.com/watch?v=8EZg99PdjxQ) and the [official documentation](https://www.artillery.io/docs/get-started/get-artillery) to learn Artillery. To install Artillery and check the version:

I've created the `performance` folder and these files while learning:

- [`asciiart-load-test.yml`](./performance/asciiart-load-test.yml)
- [`user-visit-test.yml`](./performance/user-visit-test.yml)
- [`favicon-load-test.yml`](./performance/favicon-load-test.yml)

```bash
npm i -g artillery
artillery version

```

To run the `asciiart-load-test.yml` Artillery script:

```bash
cd jasmine-karma-documentation/performance
artillery run asciiart-load-test.yml

```

To get a key you should create an account on [app.artillery.io](https://app.artillery.io). To run Artillery with Artillery Cloud:

```bash
cd jasmine-karma-documentation/performance
artillery run asciiart-load-test.yml --record --key Use_Your_Key
```

### Angular Devtools

I installed Angular Devtools form [Chrome Webstore](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) and I used these sources for learning:

- **DevTools Overview:** https://angular.dev/tools/devtools
- **Runtime Performance Optimization:** https://angular.dev/best-practices/runtime-performance

### Clinic.js

I decided to place Clinic.js in the [`Node.Js-Complete-Course`](https://github.com/ZeroaNinea/Node.Js-Complete-Course/tree/main/node-clinic-doctor-examples) repository.

To install Clinic.js:

```bash
npm install -g clinic

```

### Docker

I used the [official Docker documentation]() to learn Docker.

I created these files during studying:

- [Dockerfile](./Dockerfile)
- [docker-compose.yml](./docker-compose.yml)

How to write a [`Dockerfile`](https://docs.docker.com/reference/dockerfile/) and a [`docker-compose.yml`](https://docs.docker.com/reference/compose-file/) file?

Start and stop Docker container:

```bash
docker start CONTAINER_NAME
docker stop CONTAINER_NAME

```

Run Docker image on port 8080 without an account:

```bash
docker run -d -p 8080:80 jasmine-karma-documentation

```

Run docker image on port 8080 with an account:

```bash
docker run -d -p 8080:80 zeroaninea/jasmine-karma-documentation

```

Use Docker Compose; create and remove:

```bash
docker compose up -d --build
docker compose down --volumes

```

#### Install Node.js in Docker Container

Create a new image to install Node.js on it:

```bash
docker run --name=base-container -ti ubuntu

```

Install and test Node.js in the image:

```bash
apt update && apt install -y nodejs
node -e 'console.log("Hello world!")'

```

Commit changes in the terminal, not in the Docker terminal:

```bash
docker container commit -m "Add node" base-container node-base

```

Show the image's history:

```bash
docker image history node-base

```

Start a new container using the new image:

```bash
docker run node-base node -e "console.log('Hello again')"

```

Remove the `base-container`:

```bash
docker rm -f base-container

```

Start new container using the `node-base` image:

```bash
docker run --name=app-container -ti node-base

```

Create the `app.js` file in the `app-container`:

```bash
echo 'console.log("Hello from an app")' > app.js

```

Save this container's changes as a new image:

```bash
docker container commit -c "CMD node app.js" -m "Add app" app-container sample-app

```

See updated history:

```bash
docker image history sample-app

```

Run the app:

```bash
docker run sample-app

```

Remove the `app-container`:

```bash
docker rm -f app-container

```

### Kubernetes

I'm learning Kubernetes using the [official documentation](https://kubernetes.io/docs/home/) and this [video lesson](https://www.youtube.com/watch?v=X48VuDVv0do). [`kubernetes-the-hard-way`](https://github.com/kelseyhightower/kubernetes-the-hard-way) GitHub.

I've created these files during the learnig:

- [`nginx-deployment.yaml`](./kubernetes-lessons/nginx-deployment.yaml)
- [`nginx-service.yaml`](./kubernetes-lessons/nginx-service.yaml)
- [`nginx-deployment-rusult`](./kubernetes-lessons/nginx-deployment-result)

The deployment files of this project:

- [`deployment.yml`](./deployment.yml)
- [`service.yml`](./service.yml)

Install `kubectl` on Windows, check the verison, and check if a cluster is running:

```bash
npm i -g curl
curl.exe -LO "https://dl.k8s.io/release/v1.32.0/bin/windows/amd64/kubectl.exe"
kubectl version --client
kubectl cluster-info

```

I created the [`deployment.yml`](./deployment.yml) file to deploy the application, and ran these commands to deploy it and check if it's deployed.

```bash
kubectl apply -f deployment.yml
kubectl get pods

```

Exposing the deployment as a service. I created the [`service.yml`](./service.yml) file. Create a service, check it, and run in on the port.

```bash
kubectl apply -f service.yml
kubectl get services
kubectl port-forward svc/angular-service 8080:80

```

I used Mongo Express to run MongoDB with Kubernetes. I've created these files and folders:

- [`mongodb`](./kubernetes-lessons/mongodb/)
- [`mongodb-express`](./kubernetes-lessons/mongodb-express/)

The username and the password for the MongoDB Express:
**Username:** admin
**Password:** pass

Install Scope and `kubectx` with the PowerShell:

```sh
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
iwr -useb get.scoop.sh | iex

```

```sh
scoop install kubectx

```
