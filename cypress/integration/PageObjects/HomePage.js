class HomePage
{
getEditBox()
    {
      return cy.get('input[name="name"]:nth-child(2)')
    }
gettwowaydatabinding()
{
return cy.get(':nth-child(4) > .ng-untouched')
}    
getGender()
{
    return cy.get('select')
}
getenterprener()
{
    return cy.get('#inlineRadio3')
}
getshoptab()
{
    return cy.get(':nth-child(2) > .nav-link')
}
}

export default HomePage;