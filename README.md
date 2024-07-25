# UPA - ISC Proyecto Integrador 8vo Cuatrimestre

Este proyecto es un trabajo integrador para los alumnos de 8vo cuatrimestre de la carrera de Ingeniería en Sistemas Computacionales en la Universidad Politécnica de Aguascalientes (UPA). El objetivo es aplicar los conocimientos adquiridos en el desarrollo de un sistema o aplicación que resuelva un problema real o teórico específico.

## Descripción del Proyecto
Este proyecto consiste en desarrollar un foto álbum digital que integra múltiples tecnologías y herramientas modernas de desarrollo de software. Los alumnos implementarán:

- Una aplicación backend utilizando Java con Spring Boot para crear una REST API.
- Una aplicación frontend con React para consumir la API.
- Una base de datos MySQL para almacenar la información del álbum.
- Contenedores Docker para la orquestación y despliegue de los servicios.

## Características

- Interfaz de Usuario Amigable: Diseño de interfaces modernas y responsivas utilizando React.
- API RESTful: Creación de una API RESTful con Java Spring Boot para manejar operaciones CRUD sobre álbumes y fotos.
- Base de Datos Relacional: Uso de MySQL para almacenar datos persistentes.
- Contenedores Docker: Uso de Docker y Docker Compose para la configuración y orquestación de todos los servicios.
- Integración Continua: Implementación de prácticas de integración continua y despliegue continuo (CI/CD).

## Tecnologías Utilizadas

- Java con Spring Boot
- MySQL
- Docker y Docker Compose
- React
- Bootstrap o Material-UI para el diseño de interfaces

## Requisitos

- Software Requerido:

  - Git
  - Docker y Docker Compose
  - JDK 22
  - Maven, Spring Boot
  - Postman
  - Node.js y npm
  - Visual Studio Code
- Librerías y Dependencias:

  - Backend:
```xml
  <dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<!-- Spring Security Crypto dependency -->
    <dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-crypto</artifactId>
        <version>5.5.3</version>
    </dependency>
    <!-- JJWT dependency -->
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>0.9.1</version>
    </dependency>
	<dependency>
		<groupId>javax.xml.bind</groupId>
		<artifactId>jaxb-api</artifactId>
		<version>2.3.1</version>
	</dependency>
	</dependencies>
```
- Frontend:
```bash
npx create-react-app photo-album-frontend
npm install
```
## Instalación y Configuración
Sigue estos pasos para configurar y ejecutar el proyecto localmente:
```bash
# Ejemplo de comandos para clonar y ejecutar el proyecto
git clone https://github.com/rodrigoBermejo/2024-2-DisenoInterfaces-PhotoAlbum.git
cd 2024-2-DisenoInterfaces-PhotoAlbum
```
## Configurar Backend

- Navega al directorio del backend:
```bash
cd backend
```
- Construye y ejecuta la aplicación:
```bash
./mvnw spring-boot:run
```
## Configurar Base de Datos con Docker Compose
Asegúrate de estar en la raíz del proyecto y ejecuta:
```bash
docker-compose up --build
```
## Configurar Frontend
Navega al directorio del frontend:

```bash
cd ../frontend
```
Instala las dependencias y arranca la aplicación:
```bash
npm install
npm start
```
# Uso
Una vez configurado, puedes acceder a la aplicación de la siguiente manera:

- Backend: http://localhost:8080
- Frontend: http://localhost:3000

# Contribuir
¡Las contribuciones son bienvenidas! Si deseas contribuir al proyecto:

- Fork el repositorio.
- Crea una nueva rama (git checkout -b feature-nueva-funcionalidad).
- Realiza tus cambios y haz un commit (git commit -am 'Añadir nueva funcionalidad').
- Sube tu rama (git push origin feature-nueva-funcionalidad).
- Abre un Pull Request.
## Licencia
Este proyecto está licenciado bajo la MIT License.

# Autores y Reconocimientos
Autor Principal: Juan Rodrigo Leaños Bermejo
Colaboradores: Juan Carlos Herrera

Agradecimientos especiales a los siguientes individuos y organizaciones:

- Profesor: Jonathan Ezequiel Ibarra Chávez
- Profesor: Ricardo Padilla
- Mentor: Josué Antonio Prieto Olivares
## Contacto
Para más información o para contactar con el equipo del proyecto:

- Correo Electrónico: juan.leanos@upa.edu.mx
- LinkedIn: [Rodrigo Leaños Bermejo](https://www.linkedin.com/in/rodrigolbermejo/)
- GitHub: [@rodrigoBermejo](https://github.com/rodrigoBermejo)


