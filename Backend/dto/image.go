package dto

type ImageDto struct {
	Id      int    `json:"id"`
	Path    string `json:"path" validate:"required"`
	PortfolioId int    `json:"IdPortfolio"`
}

type ImagesDto []ImageDto
