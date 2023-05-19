-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2023 at 08:20 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

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
-- Table structure for table `kereta`
--

CREATE TABLE IF NOT EXISTS `kereta` (
  `id_kereta` varchar(11) NOT NULL,
  `nama_kereta` varchar(100) NOT NULL,
  `harga_tiket_kereta` int(100) NOT NULL,
  `berangkat_kereta` varchar(100) NOT NULL,
  `tiba_kereta` varchar(100) NOT NULL,
  `jadwal_kereta` varchar(100) NOT NULL,
  `no_duduk` varchar(100) NOT NULL,
  `icon_kereta` varchar(100) DEFAULT NULL,
  `bg_kereta` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_kereta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kereta`
--

INSERT INTO `kereta` (`id_kereta`, `nama_kereta`, `harga_tiket_kereta`, `berangkat_kereta`, `tiba_kereta`, `jadwal_kereta`, `no_duduk`, `icon_kereta`, `bg_kereta`) VALUES
('K-E331', 'Express', 70000, 'Bandung', 'Bekasi', '18 April 2023; 09.00', 'EKS 3; 12B', 'kereta.png', 'kereta1'),
('K-N123', 'Naro', 120000, 'Jakarta', 'Bandung', '2 Maret 2023; 12.30', 'EKO 5; 1C', 'kereta.png', 'kereta2');

-- --------------------------------------------------------

--
-- Table structure for table `pesawat`
--

CREATE TABLE IF NOT EXISTS `pesawat` (
  `urutan` int(11) NOT NULL,
  `id_pesawat` varchar(11) NOT NULL,
  `nama_pesawat` varchar(100) NOT NULL,
  `harga_pesawat` int(30) NOT NULL,
  `no_duduk` varchar(100) NOT NULL,
  `gate` int(11) NOT NULL,
  `jam_terbang` varchar(100) NOT NULL,
  `asal_pesawat` varchar(100) NOT NULL,
  `tujuan_pesawat` varchar(100) NOT NULL,
  `icon_pesawat` varchar(100) DEFAULT NULL,
  `bg_pesawat` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_pesawat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pesawat`
--

INSERT INTO `pesawat` (`urutan`, `id_pesawat`, `nama_pesawat`, `harga_pesawat`, `no_duduk`, `gate`, `jam_terbang`, `asal_pesawat`, `tujuan_pesawat`, `icon_pesawat`, `bg_pesawat`) VALUES
(0, 'P-C231', 'Citilink', 500000, '10B', 2, '21.00; 13 Maret 2023', 'Jakarta', 'Bandung', 'garuda.png', 'img2'),
(1, 'P-G301', 'Garuda Indonesia', 700000, '4A', 10, '10.00; 20 April 2023', 'Bekasi', 'Jakarta', 'lion.png', 'img2'),
(2, 'P-L001', 'Lion Air', 600000, '20C', 5, '06.00; 10 Febuari 2023', 'Bandung', 'Surabaya', 'garuda.png', 'img'),
(3, 'P-M020', 'Mandala Airlines', 900000, '12A', 3, '18.00; 12 Febuari 2023', 'Yogyakarta', 'Papua', 'cangcimen.png', 'img3');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE IF NOT EXISTS `profile` (
  `email` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `no_hp` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`email`, `first_name`, `last_name`, `address`, `no_hp`, `image`) VALUES
('surya', 'Adha', 'Surya', 'Bandung', '123124', '');

-- --------------------------------------------------------

--
-- Table structure for table `travel`
--

CREATE TABLE IF NOT EXISTS `travel` (
  `id_travel` varchar(11) NOT NULL,
  `nama_travel` varchar(20) NOT NULL,
  `harga_travel` int(30) NOT NULL,
  `no_duduk` varchar(20) NOT NULL,
  `waktu_berangkat` varchar(100) NOT NULL,
  `waktu_tiba` varchar(100) NOT NULL,
  `jadwal_travel` varchar(100) NOT NULL,
  `icon_travel` varchar(20) DEFAULT NULL,
  `bg_travel` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_travel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `travel`
--

INSERT INTO `travel` (`id_travel`, `nama_travel`, `harga_travel`, `no_duduk`, `waktu_berangkat`, `waktu_tiba`, `jadwal_travel`, `icon_travel`, `bg_travel`) VALUES
('T-DT231', 'DayTrans', 70000, '7', 'Jakarta', 'Bandung', '10 April 2023; 09.00', 'travel.png', 'travel');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nama_belakang` varchar(100) NOT NULL,
  `role` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `nama`, `nama_belakang`, `role`) VALUES
(1, 'admin', '123', 'Gerry', 'William', 'admin'),
(2, 'howler', '123', 'naufel', 'Abiu', 'admin'),
(3, 'surya', '123', 'Adha', 'Surya', 'user'),
(4, 'rodo', '123', 'Rodo', 'Idul', 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
