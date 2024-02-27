package dto


type PortfolioDto struct {
	Id       int    `json:"id"`
	Name     string `json:"namePortfolio"`
	Type 	string  `json:"typePortfolio"`
	Description string `json:"descriptionPortfolio"`
	Link    string  `json:"linkPortfolio"`
}

type PortfoliosDto []PortfolioDto

