package main

import (
	"fmt"
	"leos-tech/backend/initializers"
)

func init(){
	initializers.LoadEnVAriables()
	initializers.ConnectToDatabase()

}