
# METAPHOTO APP

Web app for show results of externalapi photos

## Tools for development
| Name |Versión | Scope |
|--|--|--|
| Node js | 18.12.1 | global |
| npm| 8.19.2 | global |
| Angular-cli | 15.0.2 | local |

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
ng serve --configuration=development
#or
ng serve
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
ng serve --configuration=production
```

## Try It
* Open your browser to [http://localhost:4200](http://localhost:4200)

## Docker
In the root of the project you would see **Dockerfile**

#### Create image
```shell
  #On the root of the project
  docker build -t image:tag .
  ```

#### Run container
By default the expose port always will be on port 80, if you want to change it, you will need to update **nginx config (nginx-custom.conf)**
```shell
  docker run -p 80:4200 image-id
  ```
