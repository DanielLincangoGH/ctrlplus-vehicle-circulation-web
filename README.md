# CtrlplusVehicleCirculationWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Deploy with Docker 

Required: [Docker instalation](https://docs.docker.com/engine/install/)

#### Deploy services 
Deploy services: [Circulation services](https://github.com/DanielLincangoGH/ctrlplus-vehicle-circulation/tree/master#readme)

Run `sudo docker pull daniellincango/circulation-web-app:1.0.0` to pull web app image.

Run `sudo docker run -d -p 8081:80 daniellincango/circulation-web-app:1.0.0` to deploy app.

See the app running in: [Circulation web app - Development](http://localhost:8081)

## Deploy locally

Run `npm install` for dependency instalation.
Run `ng serve --o` for init development server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

