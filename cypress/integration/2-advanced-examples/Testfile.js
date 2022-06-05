/// <reference types="Cypress"/>

describe('My Second Test suite',function()
{
    before(function() 
    {
        cy.fixture('example').then(function(data)
        {
                this.data=data
        })

    })
 it('My firsttest case',function()
 {

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

 })
})