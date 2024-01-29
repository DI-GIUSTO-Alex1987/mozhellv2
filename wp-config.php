<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'mozhellv2' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')!V+R:k|`Wq+v0(dEO&VKGCgWkdngG<j}Z]a@`KO`M<g3%u*:wFVU]zbcB8@|Dj7' );
define( 'SECURE_AUTH_KEY',  '(}8E{f k@FI{Oq84bB9?%T^Hd4c9w-$KC~YTya2AT7.-^%3KLDMWSf5:6$x}[8Oh' );
define( 'LOGGED_IN_KEY',    'tB]4c{!R1GMB*OT9lP]p<GkMICcU4[(~Yi@vA?hA,:;U~}l.:WqRv*&D{!q4GIiY' );
define( 'NONCE_KEY',        '(`I-NEI9*>C7pp/b#=5?Z8PNPGP%kOv[b_=H-iM-??p%^k*V$=rf?d`9%8:*@/v*' );
define( 'AUTH_SALT',        'n96a2_Mn{R,4]FB r3oJS6x?|&nr|).Nn7FidkZ#%9y2hUx3G!-dy^l4xZ|33gPw' );
define( 'SECURE_AUTH_SALT', '<AUFec[p;CT:doU6+K`=h9-8yLr~>lF0NQPU*C|R{!*H3tW=*$?VS~9A5a<<;Dco' );
define( 'LOGGED_IN_SALT',   'd(c4YvLO4?$4IGAfA;)zVFiN.7(YpdJr]sg)%rk{-0v).llPFJ,bilA1/c..Q]U)' );
define( 'NONCE_SALT',       'FHTxoTp>JLCW=Du5GMFF2l>cHV_aTa ?/Cq*Y(gae#[GUQ&N^3ABbiY4@Wei*s]I' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
