
# Docker Swarm (servers + balancer)
>
> This repo was created to address some practical questions about Docker Compose posed by the class 'Upgrade Seminar III' of the **Formosa Polytechnic Institute** .
> 
> *Este repositorio fue creado para abordar algunas preguntas prácticas sobre Docker Compose planteadas por la clase 'Seminario de Actualización III' del **Instituto Politécnico Formosa***.

## Tecnologías utilizadas

<div align="center" style="display: flex; justify-content: center; align-items: center;">
      <span style="margin-right: 20px;">
         <a href="https://es.javascript.info/" target="_blank">
               <img width="100" title='JavaScript' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'>
         </a>
      </span>
      <span style="margin-right: 20px;">
         <a href="https://www.docker.com/" target="_blank" title='Docker'>
               <img width="100" title='Docker' src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Docker_logo.svg/1920px-Docker_logo.svg.png'>
         </a>
      </span>
      </br>
</div>

# Introducción

> Este proyecto se trata de la "orquestación" de distintos contenedores con Docker Swarm.
> *Son simples servidores hechos con **JavaScript*** y **NodeJS**.
> Cada servidor se ejecuta en un contenedor independiente.
> Los contenedores que alojan los servidores se crean a partir de imágenes de **node:18-alpine**. Luego en estos contenedores hacemos las instalaciones correspondientes (a través de los Dockerfile's) para poder ejecutar servidores desarrollados con **NodeJS**.
> El balanceo de los contenedores se realiza a partir de **Docker Swarm**.

# Características

**SO: Windows 10**.

# Requerimientos

* Tener instalado **Dokcer Desktop**
* Tener instalado **Git**

# Usos

> Para utilizar este proyecto,  abrimos un CLI y nos dirigimos al directorio del sistema donde deseamos guardarlo. Ejecutamos el siguiente comando

```bash
git clone https://github.com/MARnVEL/saIII-examen-docker-swarm-api-node.git
```

1. Iniciar la aplicación Docker Desktop

2. En un CLI **inicializamos docker swarm**:

      ```bash
      docker swarm init
      ```

3. En el directorio de nuestro sistema donde guardamos el proyecto, ejecutamos en el CLI

      ```bash
      cd server/
      ```

      * Luego:

      ```bash
      docker build -t s1 .
      ```

      * Con este comando construiremos la imagen que luego será utilizada en nuestro [[fichero .yml]](`./node-services.yml`) (línea 5).

4. Luego hacemos un `cd ..` para volver al directorio raíz de nuestro proyecto y ejecutamos.:

      ```bash
      docker stack deploy -c node-services.yml sn
      ```

5. Abrimos un navegador y nos dirigimos a la ruta: `http://localhost/`

6. Podemos listar los servicios de **swarm**:

      ```bash
      docker service ls
      ```

7. Escalamiento. Para poder aumentar la cantidad de servicios disponibles, abrimos un CLI y ejecutamos:

      ```bash
      docker service scale myNodeJS=5
      ```

      Con el comando anterior hemos aumentado la cantidad de nuestros servicios de nombre `myNodeJs` a `5`.
      Debemos aclarar que este comando, elimina los contenedores que se están ejecutando y se levantan nuevamente en la cantidad asignada.
