package dto

type ServiceDto struct {
	Id       int    `Int:"primaryKey"`
	NameTech string `string:"nametechService"`
	Area     string `string:"areaService"`
}

type ServicesDto []ServiceDto
