package dto

type ServicioDto struct {
	Id       int    `Int:"primaryKey"`
	NameTech string `string:"nametechService"`
	Area     string `string:"areaService"`
}

type ServiciosDto []ServicioDto
