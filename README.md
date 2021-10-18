# dwp2021agodic
Repositorio de prueba para la clase de desarrollo web profesional de agosto diciembre 2021


create database if not exists dwp2021;
use dwp2021;

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `idauthors` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `origen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idauthors`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_author`
--

DROP TABLE IF EXISTS `book_author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_author` (
  `idbook_author` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`idbook_author`),
  KEY `author_fk_idx` (`author_id`),
  KEY `books_fk` (`book_id`),
  CONSTRAINT `author_fk` FOREIGN KEY (`author_id`) REFERENCES `authors` (`idauthors`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `books_fk` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_author`
--

LOCK TABLES `book_author` WRITE;
/*!40000 ALTER TABLE `book_author` DISABLE KEYS */;
/*!40000 ALTER TABLE `book_author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `publish_date` datetime NOT NULL,
  `category` varchar(255) NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `sell_price` int(11) NOT NULL,
  `isbn` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `edition` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan` (
  `idloan` int(11) NOT NULL AUTO_INCREMENT,
  `person_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `load_date` date NOT NULL,
  `return_date` date NOT NULL,
  PRIMARY KEY (`idloan`),
  KEY `person_fk_idx` (`person_id`),
  KEY `book_fk_idx` (`book_id`),
  CONSTRAINT `book_fk` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `person_fk` FOREIGN KEY (`person_id`) REFERENCES `persons` (`idpersons`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan`
--

LOCK TABLES `loan` WRITE;
/*!40000 ALTER TABLE `loan` DISABLE KEYS */;
/*!40000 ALTER TABLE `loan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persons` (
  `idpersons` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone` varchar(10) NOT NULL,
  PRIMARY KEY (`idpersons`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

grant all on dwp2021.* to dwp2021@localhost identified by "mipasswordbiendificilote";