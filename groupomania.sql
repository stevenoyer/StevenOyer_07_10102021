-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 27 nov. 2021 à 00:48
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `parent` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `content`, `parent`, `created_by`, `created`) VALUES
(2, 'Super cette publication !', 2, 9, '2021-11-22 22:03:19'),
(4, 'Un commentaire de test', 2, 9, '2021-11-22 22:16:19');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `created_by` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `content`, `created_by`, `created`) VALUES
(18, 'Je modifie encore :)', 15, '2021-11-26 23:29:45'),
(21, 'Hello World !', 15, '2021-11-26 23:34:30'),
(23, 'Hello ! J\'ai modifié mon message !', 21, '2021-11-27 00:46:33');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` text NOT NULL,
  `admin` int(11) NOT NULL DEFAULT 0,
  `avatar` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `pass`, `admin`, `avatar`) VALUES
(15, 'Oyer', 'Steven', 'steven@systrio.fr', '$2b$10$bRPANJ.9.JK/qBo1J9YNAeClV1Jn0rnq59IjmVsBZO2Rj4xAAsO/y', 0, NULL),
(16, 'test', 'Test', 'test@test.fr', '$2b$10$EJBnZWPSkyPwEvfWTULWz.8cSq7GZhIC.wHYjR94rnSTw90nKmSzC', 0, NULL),
(17, 'test', 'Test', 'testetstetste@uiuiui.fr', '$2b$10$0UM6KS1FIgXSZg99HgJR1OFZr198VvUESZXo4TlQNERMqQpyU1LtW', 0, NULL),
(18, 'test', 'Test', 'jeantest@deschoses.fr', '$2b$10$f4KIh9EcjxPsSS6GfeAYK.P7K/IRIOoHmz3qYIlwG.5oV2Vi4GCE2', 0, NULL),
(19, 'jzhguierhg', 'lopkrhjgi', 'zjhiuerhg@ejhbgfujhregb.fr', '$2b$10$sANnP2I1fjytX2GFI2DtZ.y5tDUnEAMR6A0cK6jwUEGq4rzPNGSUa', 0, NULL),
(20, 'Doe', 'John', 'john.doe@live.fr', '$2b$10$I.jvRnEDgTmqlXNEKqVp4ud6n0rYabIW6oQ0bWiKm1m2zbC1SV2ke', 0, NULL),
(21, 'Test', 'Test', 'steven3@systrio.fr', '$2b$10$nlUEQjXeqmn/W.9aRLmsducLNOGkeQc2MRxowf4HKv0cZQMdRloCG', 0, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
