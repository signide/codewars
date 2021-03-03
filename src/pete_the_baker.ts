// https://www.codewars.com/kata/525c65e51bf619685c000059

import assert from "assert"

type Recipe = Record<string, number>

function cakes(recipe: Recipe, available: Recipe): number {
  const maxCakesPerIngredient = Object.entries(recipe).reduce<
    Record<string, number>
  >((acc, [ingredient, requiredAmount]) => {
    const availableAmount = available[ingredient]
    if (!availableAmount) {
      acc[ingredient] = 0
      return acc
    }

    acc[ingredient] = Math.floor(availableAmount / requiredAmount)
    return acc
  }, {})

  return Math.min(...Object.values(maxCakesPerIngredient))
}

describe("example tests", function () {
  it("should return 2", function () {
    const recipe = { flour: 500, sugar: 200, eggs: 1 }
    const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    assert.strictEqual(cakes(recipe, available), 2)
  })

  it("should return 0", function () {
    const recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
    const available = { sugar: 500, flour: 2000, milk: 2000 }
    assert.strictEqual(cakes(recipe, available), 0)
  })
})
