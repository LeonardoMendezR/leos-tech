package db

import (
	"project/client"
	"project/model"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	log "github.com/sirupsen/logrus"
)

var (
	Db  *gorm.DB
	err error
)

func init() {
	// DB Connections Parameters
	DBName := "leosTech"
	DBUser := "root"
	DBPass := "pass"
	DBHost := "database" // Deberías asegurarte de que este nombre sea correcto según tu configuración de Docker Compose

	// Intenta conectar a la base de datos con los parámetros proporcionados
	Db, err = gorm.Open("mysql", DBUser+":"+DBPass+"@tcp("+DBHost+":3307)/"+DBName+"?charset=utf8&parseTime=True")

	if err != nil {
		log.Info("Error al abrir la conexión a la base de datos")
		log.Fatal(err)
	} else {
		log.Info("Conexión establecida con éxito")
	}

	// Agrega todos los clientes aquí
	client.Db = Db

}

func StartDbEngine() {
	// Migrar todas las clases de modelo

	Db.AutoMigrate(&model.User{})
	Db.AutoMigrate(&model.Image{})
	Db.AutoMigrate(&model.Portfolio{})
	Db.AutoMigrate(&model.Servicio{})

	log.Info("Finalización de la migración de tablas de la base de datos")
}
