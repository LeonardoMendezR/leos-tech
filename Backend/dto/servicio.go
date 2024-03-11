package dto

type ServicioDto struct {
	Id       int    `json:"primaryKey"`
	NameTech string `json:"nametechService"`
	Area     string `json:"areaService"`
}

type ServiciosDto []ServicioDto
