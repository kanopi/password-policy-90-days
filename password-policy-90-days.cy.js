describe('Verify Password Policy 90 Days recipe applied.', () => {
  it('Verify Password Policy modules should be enabled.', () => {
    cy.login()
    cy.visit('/admin/modules')
    cy.get('#edit-modules-password-policy-enable').should('be.checked')
    cy.get('#edit-modules-password-policy-characters-enable').should('be.checked')
    cy.get('#edit-modules-password-policy-history-enable').should('be.checked')
    cy.get('#edit-modules-password-policy-length-enable').should('be.checked')
  })
  it('Verify the Change After 90 Days Password Policy exists.', () => {
    cy.login()
    cy.visit('/admin/config/security/password-policy')
    cy.get('a[href="/admin/config/security/password-policy/change_after_90_days?destination=/admin/config/security/password-policy"]').click()
    cy.get('#edit-label').should('have.value', 'Change After 90 Days')
  })
  it('Verify Password Policy fields were added to the user form.', () => {
    cy.login()
    cy.visit('/user/1/edit')
    cy.get('#password-policy-status').should('contain', 'Change After 90 Days')
    cy.get('#edit-field-last-password-reset-wrapper').should('contain', 'Last Password Reset')
  })
})
