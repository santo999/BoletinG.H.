-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2020 a las 00:16:07
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `boletin_gh`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boletin`
--

CREATE TABLE `boletin` (
  `bol_id` int(6) NOT NULL,
  `bol_mes` int(2) NOT NULL,
  `bol_year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `boletin`
--

INSERT INTO `boletin` (`bol_id`, `bol_mes`, `bol_year`) VALUES
(1205, 1, 205),
(12020, 1, 2020),
(12021, 1, 2021),
(12022, 1, 2022),
(12023, 1, 2023),
(12025, 1, 2025),
(12028, 1, 2028),
(12029, 1, 2029),
(22020, 2, 2020),
(22021, 2, 2021),
(32020, 3, 2020),
(32021, 3, 2021),
(52020, 5, 2020),
(62020, 6, 2020),
(72020, 7, 2020),
(82020, 8, 2020),
(92020, 9, 2020),
(102020, 10, 2020),
(112020, 11, 2020),
(120288, 1, 20288),
(122020, 12, 2020);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `columna`
--

CREATE TABLE `columna` (
  `col_id` int(10) NOT NULL,
  `sec_id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `columna`
--

INSERT INTO `columna` (`col_id`, `sec_id`) VALUES
(1122020, 122020),
(1132020, 132020),
(1162020, 162020),
(1172020, 172020),
(1182020, 182020),
(1192020, 192020),
(1262020, 262020),
(11102020, 1102020),
(11112020, 1112020),
(11122020, 1122020),
(12122020, 2122020),
(13122020, 3122020),
(14122020, 4122020),
(15122020, 5122020),
(16122020, 6122020),
(17122020, 7122020),
(18122020, 8122020),
(19122020, 9122020),
(110122020, 10122020),
(111122020, 11122020),
(112122020, 12122020);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_columna`
--

CREATE TABLE `info_columna` (
  `id` int(10) NOT NULL,
  `titulo` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `imagen` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `texto` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `enlace` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `info_columna`
--

INSERT INTO `info_columna` (`id`, `titulo`, `imagen`, `texto`, `enlace`) VALUES
(1122020, 'gbgbgbgb', 'Cargas/imagen_gbgbgbgb.jpg', 'bggbgbgb', 'gbgbgbgb'),
(1132020, 'hjhjhjhjhjh', 'Cargas/imagen_hjhjhjhjhjh.jpg', 'hjhjhjhjhjh', 'hjhjhjhjh'),
(1162020, 'vccvcvcxvcxv', 'Cargas/imagen_vccvcvcxvcxv.jpg', 'cgxcvcxvcxvcc', 'cvvcxvcxvvxc'),
(1172020, 'fddddddddddddddd', 'Cargas/imagen_fddddddddddddddd.jpg', 'dfffffffffffffffffffffffffffffffff', 'fdddfdf'),
(1182020, NULL, NULL, NULL, NULL),
(1192020, 'sdsdsdsdds', 'Cargas/imagen_sdsdsdsdds.jpg', 'dsdsdsdsdds', 'dsdsdsd'),
(1262020, 'nhnhnhnhn', 'Cargas/imagen_nhnhnhnhn.jpg', 'hnhnhnhnhn', 'hnhnhnhn'),
(11102020, 'el alquimista', 'Cargas/imagen_el alquimista.jpg', 'sqsqswwd', 'dddddd'),
(11112020, 'dcdcdcdc', 'Cargas/imagen_dcdcdcdc.jpg', 'cdcdcwdw', 'www'),
(11122020, 'dff', 'Cargas/imagen_dff.jpg', 'fdfdfd', 'fdfdf'),
(12122020, 'AJO', 'Cargas/imagen_AJO.jpg', 'xsxxs', 'xdxdxddxdxdd'),
(13122020, 'el alquimista', 'Cargas/imagen_el alquimista.jpg', 'xsxsxxss', 'sxsxsx'),
(14122020, 'ddsds', 'Cargas/imagen_ddsds.jpg', 'dsdsdsd', 'rgtgh66666666666'),
(15122020, 'ghghghghgh', 'Cargas/imagen_ghghghghgh.jpg', 'hhhhhhhhhhhhhhhh', 'hhhhhhhhhh'),
(16122020, 'ddddddddddddd', '../Cargas/imagen_ddddddddddddd.jpg', 'dddddd', 'ddddddddd'),
(17122020, 'gfgfggfgf', 'Cargas/imagen_gfgfggfgf.jpg', 'gfgfgfg', 'gnfgghfhfgh'),
(18122020, 'BENEFICIOS DEL AJO', 'Cargas/imagen_BENEFICIOS DEL AJO.jpg', 'sxxsxsx', 'bnnnhnhn'),
(19122020, 'gggggggggggggggggg', 'Cargas/imagen_gggggggggggggggggg.jpg', 'ggggggggggggggggggggg', 'ggggggggggggggggggg'),
(110122020, 'ffffffffffffffffff', 'Cargas/imagen_ffffffffffffffffff.jpg', 'fffffffffffffffffffff', 'ffffffffffffffffffffff'),
(111122020, NULL, NULL, NULL, NULL),
(112122020, 'ffffffffffff', 'Cargas/imagen_ffffffffffff.jpg', 'fffffffffffffffffffffffffffff', 'ffffffffffffffffffffff');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccion`
--

CREATE TABLE `seccion` (
  `sec_id` int(8) NOT NULL,
  `bol_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `seccion`
--

INSERT INTO `seccion` (`sec_id`, `bol_id`) VALUES
(122020, 22020),
(132020, 32020),
(162020, 62020),
(262020, 62020),
(172020, 72020),
(182020, 82020),
(192020, 92020),
(1102020, 102020),
(1112020, 112020),
(1122020, 122020),
(2122020, 122020),
(3122020, 122020),
(4122020, 122020),
(5122020, 122020),
(6122020, 122020),
(7122020, 122020),
(8122020, 122020),
(9122020, 122020),
(10122020, 122020),
(11122020, 122020),
(12122020, 122020);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `boletin`
--
ALTER TABLE `boletin`
  ADD PRIMARY KEY (`bol_id`);

--
-- Indices de la tabla `columna`
--
ALTER TABLE `columna`
  ADD PRIMARY KEY (`col_id`),
  ADD KEY `sec_id` (`sec_id`);

--
-- Indices de la tabla `info_columna`
--
ALTER TABLE `info_columna`
  ADD UNIQUE KEY `id_2` (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `seccion`
--
ALTER TABLE `seccion`
  ADD PRIMARY KEY (`sec_id`),
  ADD KEY `bol_id` (`bol_id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `columna`
--
ALTER TABLE `columna`
  ADD CONSTRAINT `columna_ibfk_1` FOREIGN KEY (`sec_id`) REFERENCES `seccion` (`sec_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `info_columna`
--
ALTER TABLE `info_columna`
  ADD CONSTRAINT `info_columna_ibfk_1` FOREIGN KEY (`id`) REFERENCES `columna` (`col_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `seccion`
--
ALTER TABLE `seccion`
  ADD CONSTRAINT `seccion_ibfk_1` FOREIGN KEY (`bol_id`) REFERENCES `boletin` (`bol_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
