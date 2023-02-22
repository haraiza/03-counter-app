import {retornaArreglo} from '../../src/base-pruebas/07-deses-arr'

describe('Prueba en 07-des-arr', () => { 
    test('Debe de retornar un string y un numero', () => { 
        
        const [letras, numeros] = retornaArreglo()

        //expect(letras).toBe('ABC')
        //expect(numeros).toBe(123)
        
        console.log('Tipo de letras: ' +  typeof letras)
        console.log('Tupo de numeros: ' + typeof numeros)

        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')

        //Espera cualquier tipo de string
        expect(letras).toEqual( expect.any(String) )
        
        //Espera cualquier tipo de numero
        expect(numeros).toEqual( expect.any(Number) )
     })
 })