-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 31, 2022 at 05:34 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dmc_miomio`
--

-- --------------------------------------------------------

--
-- Table structure for table `pesawat`
--

CREATE TABLE `pesawat` (
  `id_pesawat` int(11) NOT NULL,
  `nama_pesawat` varchar(20) NOT NULL,
  `harga_pesawat` varchar(30) NOT NULL,
  `jam_terbang` varchar(20) NOT NULL,
  `asal_pesawat` varchar(20) NOT NULL,
  `tujuan_pesawat` varchar(20) NOT NULL,
  `icon_pesawat` varchar(20) DEFAULT NULL,
  `bg_pesawat` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesawat`
--

INSERT INTO `pesawat` (`id_pesawat`, `nama_pesawat`, `harga_pesawat`, `jam_terbang`, `asal_pesawat`, `tujuan_pesawat`, `icon_pesawat`, `bg_pesawat`) VALUES
(1, 'miong air', 'free', '20:20 - 20:30', 'asal-asal', 'akherat', 'lion.png', 'img2'),
(2, 'minum air', 'free', '20:20 - 20:30', 'akherat', 'asal-asal', 'garuda.png', 'img'),
(3, 'breathing air', 'free', '20:20 - 20:30', 'bandara', 'langit', 'cangcimen.png', 'img3'),
(4, 'buang air', 'RP. 666.000', '20:22 - 20:32', 'happy new', 'year! yay', 'garuda.png', 'img2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pesawat`
--
ALTER TABLE `pesawat`
  ADD PRIMARY KEY (`id_pesawat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
