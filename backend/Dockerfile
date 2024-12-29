# Utiliser une image de base Node.js
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du projet
COPY . .

# Exposer le port sur lequel l’application va s’exécuter
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["npm", "start"]
