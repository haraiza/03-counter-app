import { getHeroeById } from "../../src/base-pruebas/08-imp-exp"

describe('Prueba de 08-imp-exp', () => { 
    test('should getHeroById', () => { 
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toBe({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
     })
 })