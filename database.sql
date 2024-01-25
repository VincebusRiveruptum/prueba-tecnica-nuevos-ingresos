-- Script de base de datos local de pruebas para evaluación técnica, hecha por Vicente Riveros Garay.

--Primer procedimiento
CREATE OR ALTER PROCEDURE sp_MarcasMasSolicitadas
AS
BEGIN
	SELECT TOP 3 MarcaAuto.nombreMarca, COUNT(*) AS cantidadSolicitudes
	FROM Solicitudes
	INNER JOIN ModeloAuto ON Solicitudes.modeloId = ModeloAuto.id
	INNER JOIN MarcaAuto ON ModeloAuto.marcaId = MarcaAuto.id
	GROUP BY MarcaAuto.nombreMarca
	ORDER BY cantidadSolicitudes DESC;
END;
GO
-- Segundo procedimiento

CREATE OR ALTER PROCEDURE sp_SolicitudesMesActual
AS
BEGIN
 	SELECT *
	FROM Solicitudes
	WHERE MONTH(GETDATE()) = MONTH(Solicitudes.fecha)
	AND YEAR(GETDATE()) = YEAR(Solicitudes.fecha);
END;
GO
-- Tercer procedimiento

CREATE OR ALTER PROCEDURE sp_VendedorMenosSolicitudes
AS
BEGIN
	SELECT TOP 1 Vendedor.nombre, COUNT(*) AS cantidadSolicitudes
	FROM Solicitudes
	INNER JOIN Vendedor ON Solicitudes.vendedorId = Vendedor.id
	WHERE Solicitudes.fecha >= DATEADD(day, -30, GETDATE())
	GROUP BY Vendedor.nombre
	ORDER BY cantidadSolicitudes ASC;
END;
GO
-- Cuarto procedimiento almacenado

CREATE OR ALTER PROCEDURE sp_ModelosSinSolicitudes
AS
BEGIN
	SELECT ModeloAuto.nombreModelo
	FROM ModeloAuto
	LEFT JOIN Solicitudes ON ModeloAuto.id = Solicitudes.modeloId
	WHERE Solicitudes.id IS NULL;
END;
GO

-- Quinto procedimiento almacenado
-- Se tuvo que crear una tabla aparte que almacene los valores de las ventas

CREATE OR ALTER PROCEDURE sp_Top3MesesVentas
AS
BEGIN
	SELECT TOP 3 MONTH(fecha) AS mes, YEAR(fecha) AS anio, SUM(monto) AS totalVentas
	FROM Ventas
	GROUP BY MONTH(fecha), YEAR(fecha)
	ORDER BY totalVentas DESC;
END;

DROP TABLE IF EXISTS Vendedor ;
DROP TABLE IF EXISTS MarcaAuto ;
DROP TABLE IF EXISTS ModeloAuto ;
DROP TABLE IF EXISTS Solicitudes ;
DROP TABLE IF EXISTS Ventas;

CREATE TABLE Vendedor (
	id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(50),
	apellido VARCHAR(50),
	edad INT
);

CREATE TABLE MarcaAuto (
	id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	nombreMarca VARCHAR(50)
);

CREATE TABLE ModeloAuto (
	id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	nombreModelo VARCHAR(50),
	marcaId INT,
	FOREIGN KEY (marcaId) REFERENCES MarcaAuto(id)
);

CREATE TABLE Solicitudes (
	id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	vendedorId INT,
	modeloId INT,
	fecha DATE,
	FOREIGN KEY (vendedorId) REFERENCES Vendedor(id),
	FOREIGN KEY (modeloId) REFERENCES ModeloAuto(id)
);

CREATE TABLE Ventas(
	id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	idSolicitud INT,
	fecha DATE,
	monto INT,
	FOREIGN KEY (idSolicitud) REFERENCES Solicitudes(id)
)

INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('1', '1', '10-10-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('2', '2', '9-1-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('3', '3', '11-5-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('4', '3', '5-5-21');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('2', '4', '12-5-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('1', '2', '12-15-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('2', '4', '3-31-22');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('1', '4', '4-01-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('3', '2', '3-25-21');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('3', '4', '6-20-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('4', '2', '7-29-22');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('4', '2', '9-15-22');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('1', '2', '1-15-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('4', '3', '11-25-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('3', '3', '3-3-22');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('1', '2', '12-9-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('1', '2', '1-8-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('4', '2', '5-11-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('2', '2', '6-5-23');
INSERT INTO Solicitudes(vendedorId,modeloId,fecha) VALUES('1', '2', '8-5-23');

INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Moisés', 'Adonay', '35');
INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Pío','Anastacio', '45');
INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Enrique','Aarón','29');
INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Rubén','Crisóstomo','27');
INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Yunuen','Bolívar','33');
INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Marcio','Severiano','39');
INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Roberto','Marcio','44');
INSERT INTO Vendedor(nombre,apellido,edad) VALUES('Tristán','Lázaro','30');

INSERT INTO MarcaAuto(nombreMarca) VALUES('Chevrolet');
INSERT INTO MarcaAuto(nombreMarca) VALUES('Ford');
INSERT INTO MarcaAuto(nombreMarca) VALUES('Dodge');
INSERT INTO MarcaAuto(nombreMarca) VALUES('Chery');
INSERT INTO MarcaAuto(nombreMarca) VALUES('Lifan');

INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Sail', '1');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Spark', '1');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Bolt', '1');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Colorado', '1');

INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Explorer', '2');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Escape', '2');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Fiesta', '2');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Focus', '2');

INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Charger', '3');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Viper', '3');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Neon', '3');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Dart', '3');


INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Tiggo', '4');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('Tiggo 2', '4');

INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('520', '5');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('320', '5');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('520i', '5');
INSERT INTO ModeloAuto(nombreModelo, marcaId ) VALUES('620', '5');

INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('1','10-10-23','7000000');
INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('4','11-05-23','8000000');
INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('6','12-05-23','9000000');
INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('9','09-01-23','10000000');
INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('11','05-05-21','7000000');
INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('10','11-05-23','8000000');
INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('12','12-05-23','9000000');
INSERT INTO Ventas(idSolicitud, fecha, monto ) VALUES('30','12-09-23','7000000');
