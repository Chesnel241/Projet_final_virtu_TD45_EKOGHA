# Chesnel App Gestion

## Description

Ce projet a été réalisé dans le cadre du cours sur la virtualisation et la dockerisation des applications. Il s'agit d'une application web full-stack permettant de gérer des étudiants, avec une API backend en Node.js/Express et une interface frontend en Vue.js.

## Technologies utilisées

*   Backend :
    *   Node.js
    *   Express
    *   PostgreSQL
*   Frontend :
    *   Vue.js
*   Docker (pour le déploiement)

## Prérequis

*   Node.js et npm (ou yarn) installés localement (si vous développez sans Docker).
*   Docker et Docker Compose installés (pour l'environnement de développement conteneurisé).

## Installation

### Avec Docker (Recommandé)

1.  Cloner ou dézipper le projet :

2.  Créer un fichier `.env` (ou modifier le contenu du défaut) dans le répertoire racine du projet et configurer les variables d'environnement pour la base de données (voir la section Configuration).

3.  Lancer l'application avec Docker Compose :

    ```bash
    docker-compose up -d --build
    ```
    L'option `-d` permet de lancer les conteneurs en mode détaché (en arrière-plan), et l'option `--build` reconstruit les images si des changements ont été apportés aux Dockerfiles.
    
4. Testez l'application à l'url [sur le port 8080](http://localhost:8080/)

### Sans Docker (Développement local)

1.  Cloner le dépôt ou dézipper le projet :

2.  Installer les dépendances du backend :

    ```bash
    cd backend
    npm install
    ```

3.  Installer les dépendances du frontend :

    ```bash
    cd frontend
    npm install
    ```

4.  Créer un fichier `.env` dans le répertoire `backend` et configurer les variables d'environnement pour la base de données (voir la section Configuration).

5.  Lancer le backend :

    ```bash
    cd backend
    npm start
    ```

6.  Lancer le frontend :

    ```bash
    cd frontend
    npm run serve
    ```

## Configuration

Vous devez configurer les variables d'environnement pour la connexion à la base de données. Créez un fichier (ou modifier le contenu de l'existant) `.env` à la racine du projet et ajoutez les lignes suivantes, en remplaçant les valeurs par les vôtres :

`PGHOST=database` : L'hôte de la base de données. Dans ce cas, c'est le service database défini dans le fichier docker-compose.yml. Cela permet au backend d'accéder à la base de données.
`PGUSER=postgres` : L'utilisateur de la base de données PostgreSQL. Ici, l'utilisateur est postgres, mais vous pouvez le modifier si nécessaire
`PGPASSWORD=superSecretPassword` : Le mot de passe de l'utilisateur de la base de données. Assurez-vous d'utiliser un mot de passe sécurisé.
`PGDATABASE=studentsdb` : Le nom de la base de données à utiliser pour l'application. Dans ce cas, la base de données est studentsdb.
`PGPORT=5432` : Le port utilisé pour la connexion à la base de données PostgreSQL. Par défaut, c'est le port 5432, qui est le port standard de PostgreSQL.

# Variables pour la configuration de la base de données PostgreSQL
doivent être les même que précédent
`POSTGRES_USER=postgres` 
`POSTGRES_PASSWORD=superSecretPassword`
`POSTGRES_DB=studentsdb`