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

I used the [official Docker documentation](https://docs.docker.com/get-started/) to learn Docker.

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

`kubectx` is needed to work with namespaces. Install Scope and `kubectx` with the PowerShell:

```sh
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
iwr -useb get.scoop.sh | iex

```

```sh
scoop install kubens
scoop update
scoop install kubectx

```

This is the file for namespaces: [`mysql-configmap.yaml`](./kubernetes-lessons/namespaces/mysql-configmap.yaml).

These are the files for Ingress-NGINX deployment.

- [`dashboard-ingress.yaml`](./kubernetes-lessons/namespaces/dashboard-ingress.yaml)
- [`dashbeard-service.yaml`](./kubernetes-lessons/namespaces/dashboard-service.yaml)

Install Kubernetes Dashboard and NGINX Ingress controller, apply the service and the ingress:

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
kubectl apply -f dashboard-service.yaml
kubectl apply -f dashboard-ingress.yaml

```

Edit the `host` file: C:\Windows\System32\drivers\etc\hosts

```lua
127.0.0.1  dashboard.local # Add this there.

```

Visit the [Dashboard](https://dashboard.local). Or:

```sh
curl -k https://dashboard.local

```

Create an account, bind the Service Account to the Cluster Role, get the Access Token:

```sh
kubectl create serviceaccount admin-user -n kubernetes-dashboard
kubectl create clusterrolebinding admin-user-binding --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:admin-user
kubectl -n kubernetes-dashboard create token admin-user

```

Alternatively you can use `kubectl proxy`:

```sh
kubectl proxy

```

Then just visit this [link](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/).

Install Helm:

```sh
scoop install helm

```

### Jenkins

I used this [playlist](https://www.youtube.com/playlist?list=PLEiEAq2VkUUKGrfcoNYRgqam5YBERN8xa) and the [official documentation](https://www.jenkins.io/doc/) to learn Jenkins.

Add the official Jenkins Helm chart repository.

```bash
helm repo add jenkins https://charts.jenkins.io
helm repo update

```

Create a namespace for Jenkins:

```bash
kubectl create namespace jenkins

```

Install Jenkins with Helm:

```bash
helm repo update
helm install jenkins jenkins/jenkins --namespace jenkins

```

Get the Admin password. Use GitBash if you're using Windows, girl:

```bash
kubectl get secret --namespace jenkins jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode

```

Or get Admin password:

```bash
kubectl exec --namespace jenkins -it svc/jenkins -c jenkins -- /bin/cat /run/secrets/additional/chart-admin-password && echo

```

Find the external IP of the Jenkins service:

```bash
kubectl get svc -n jenkins

```

Run the Jenkins:

```bash
kubectl port-forward svc/jenkins 8080:8080 -n jenkins

```

Now visit this link: http://localhost:8080

Uninstall and deleted Jenkins namespace:

```bash
helm uninstall jenkins --namespace jenkins
kubectl delete namespace jenkins

```

**Deploy Jenkins with Docker and Kubernetes:**

I've created these files:

- [`Dockerfile`](./jenkins/Dockerfile)
- [`values.yaml`](./jenkins/values.yaml)

Build the image:

```sh
docker build -t zeroaninea/jenkins .

```

Tag and push the image:

```sh
docker tag jenkins zeroaninea/jenkins
docker push zeroaninea/jenkins

```

Install Jenkins with Helm:

```sh
helm install jenkins jenkins/jenkins --namespace jenkins -f values.yaml

```

#### Run Karma Tests

1. To run Karma tests on Jenkins install the NodeJS plugin. Go to Dashboard > Manage Jenkins > Plugins to install it. Setup Node.js in Dashboard > Manage Jenkins > Tools.
2. Create a new free style job. Set Git repository to `https://github.com/ZeroaNinea/Angular-Complete-Course.git`. Set the branch as `*/main`. In Environment section mark the `Provide Node & npm bin/ folder to PATH` checkbox.

```sh
cd jasmine-karma-documentation
npm install
ng lint
ng build --configuration=production --no-aot --base-href ./
ls -d /*
cd dist/jasmine-karma-documentation/browser
ng -- test --code-coverage

```

3. Go to the Container Template section and click advenced. Increase the momory:
   Go to Dashboard > Manage Jenkins > Clouds > kubernetes > default.
   <br />
   **Request CPU:** 512m
   <br />
   **Request Memory:** 1Gi
   <br />
   **Limit CPU:** 1
   <br />
   **Limit Memory:** 2Gi
   <br />
   And now run the tests.
4. Increase the memory in the `angular.json` file:

```json
{
  "projects": {
    "jasmine-karma-documentation": {
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kB",
              "maximumError": "2MB"
            }
          ]
        }
      }
    }
  }
}
```

I wrote a [`Jenkinsfile`](./Jenkinsfile) for CI tests.
