package main

import (
	"math/rand"
)

type WeightedItem struct {
	Item   interface{}
	Weight int
}

func weightedRandom(items []WeightedItem) interface{} {
	totalWeight := 0
	for _, item := range items {
		totalWeight += item.Weight
	}

	randomWeight := rand.Intn(totalWeight)

	for _, item := range items {
		if randomWeight < item.Weight {
			return item.Item
		}
		randomWeight -= item.Weight
	}

	return nil
}
