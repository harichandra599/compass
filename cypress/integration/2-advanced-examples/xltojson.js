context('Xlsx file', () => {
    it('Read excel file', () => {
      cy.task('readXlsx', { file: 'C:\\Users\\Hary\\Desktop\\campaign.xlsx', sheet: "AppRelease0106", JSONFilepath: "E:\\Workspaces\\Cypresspractice\\cypress\\fixtures\\example.json" }).then((rows) => {
        expect(rows.length).to.equal(18)
        cy.log(JSON.stringify(rows))
        cy.fixture("example.json").then(function (data) {
        cy.log(data[0])
  
      })
    })
  })
})