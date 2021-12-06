# Groupomania - OpenClassrooms
Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.

## [:tv:] Cours appliqués
- [Créez une application web avec Vue.js](https://openclassrooms.com/fr/courses/6390311-creez-une-application-web-avec-vue-js)
- [Implémentez vos bases de données relationnelles avec SQL](https://openclassrooms.com/fr/courses/6971126-implementez-vos-bases-de-donnees-relationnelles-avec-sql)

## [:hammer_and_wrench:] Outils nécessaires
- Un éditeur de code
- NodeJS

## [:pencil2:] Packages utilisés
- **express :** Express.js est un framework pour construire des applications web basées sur NodeJS.
- **helmet :** Permet de protéger l’application web de certaines vulnérabilités bien connues du web en configurant les en-tête HTTP.
- **dotenv :** Permet de charger des variables d’environnement grâce à un fichier nommé “.env”. Il permet de créer des configurations.
- **cors :** Permet d'assouplir la sécurité appliquée à une API. Cela se fait en contournant les en-têtes qui spécifient qui peut accéder à l'API. En d'autres termes, CORS est une fonctionnalité de sécurité du navigateur qui restreint les requêtes HTTP d'origine croisée avec d'autres serveurs et spécifie les domaines qui accèdent à vos ressources.
- **xss-clean :** Nettoie les données envoyés par l’utilisateur afin d’éviter les tentatives d’intrusion par le billet de bout de code.
- **path :** Permet de travailler avec les répertoires (ou chemin de fichiers).
- **mysql :** Permet de faire des requêtes à la base de données afin de récupérer ou d'enregistrer des données.
- **jsonwebtoken :** Permet de générer un token pour l’authentification.
- **multer :** Multer est middleware pour la gestion de téléchargement de fichiers.
- **bcrypt :** Bcrypt permet le hachage de mot de passe sécurisé.
- **nodemon :** Permet un redémarrage du processus à chaque sauvegarde du fichier automatiquement afin d'éviter de faire le redémarrage manuellement.
- **path :** Permet de travailler avec les répertoires (ou chemin de fichiers).

## [:computer:] Commandes
```cmd
npm install
```
```cmd
node app.js || nodemon app.js || npm run serve
```

## [:gear:] Fichier de configuration (.env)
```cmd
PORT=3200
SECRET_TOKEN=''

# -- DB INFO
DB_HOST=''
DB_NAME=''
DB_USER=''
DB_PASS=''
DB_PORT='3306'
```

## Images
```cmd
N'oubliez pas de créer le dossier 'images' dans le backend.
```

## [:star:] Compétences évaluées
- Personnaliser le contenu envoyé à un client web
- Authentifier un utilisateur et maintenir sa session
- Gérer un stockage de données à l'aide de SQL
- Implémenter un stockage de données sécurisé en utilisant SQL

## Définitions
**Middleware :** 
> Un middleware agit comme une passerelle entre les autres applications, outils et bases de données pour offrir aux utilisateurs des services unifiés. Il permet de définir une pile d’actions que l’on doit parcourir.

**Contrôleurs :** 
> Un contrôleur permet la gestion des données par le billet de fonction, il nous permet de créer plusieurs fonctions qui nous permettraient de récupérer, modifier, supprimer des données.

**Routes :** 
> Une route est une section de code Express qui associe un verbe HTTP (Get, Post, Put, Delete, etc), c’est un chemin/modèle d’URL et une fonction appelée pour gérer ce modèle.

**Models :** 
> Un modèle permet d'interagir avec les sources de données, effectuer la validation des données et représenter les relations entre les données.

**API :**
> Une API est un ensemble de définitions et de protocoles qui facilite la création et l'intégration de logiciels d'applications. API est un acronyme anglais qui signifie « Application Programming Interface », que l'on traduit par interface de programmation d'application.

**API RES :**
> REST signifie Representational State Transfer (ou transfert d’état de représentation, en français), et constitue un ensemble de normes, ou de lignes directrices architecturales qui structurent la façon de communiquer les données entre votre application et le reste du monde, ou entre différents composants de votre application.
