import { element, by, ElementFinder } from 'protractor';

export class UserProfileComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-user-profile div table .btn-danger'));
  title = element.all(by.css('jhi-user-profile div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class UserProfileUpdatePage {
  pageTitle = element(by.id('jhi-user-profile-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  dateEcheanceInput = element(by.id('field_dateEcheance'));
  dateNaissanceInput = element(by.id('field_dateNaissance'));
  dateAdhesionInput = element(by.id('field_dateAdhesion'));
  adresseInput = element(by.id('field_adresse'));
  telephoneInput = element(by.id('field_telephone'));
  typeAbonnementSelect = element(by.id('field_typeAbonnement'));
  niveauSelect = element(by.id('field_niveau'));
  materielTechniqueAutoriseInput = element(by.id('field_materielTechniqueAutorise'));
  remarqueInput = element(by.id('field_remarque'));
  tailleHarnaisSelect = element(by.id('field_tailleHarnais'));
  tailleCombinaisonSelect = element(by.id('field_tailleCombinaison'));
  reservationSelect = element(by.id('field_reservation'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDateEcheanceInput(dateEcheance) {
    await this.dateEcheanceInput.sendKeys(dateEcheance);
  }

  async getDateEcheanceInput() {
    return await this.dateEcheanceInput.getAttribute('value');
  }

  async setDateNaissanceInput(dateNaissance) {
    await this.dateNaissanceInput.sendKeys(dateNaissance);
  }

  async getDateNaissanceInput() {
    return await this.dateNaissanceInput.getAttribute('value');
  }

  async setDateAdhesionInput(dateAdhesion) {
    await this.dateAdhesionInput.sendKeys(dateAdhesion);
  }

  async getDateAdhesionInput() {
    return await this.dateAdhesionInput.getAttribute('value');
  }

  async setAdresseInput(adresse) {
    await this.adresseInput.sendKeys(adresse);
  }

  async getAdresseInput() {
    return await this.adresseInput.getAttribute('value');
  }

  async setTelephoneInput(telephone) {
    await this.telephoneInput.sendKeys(telephone);
  }

  async getTelephoneInput() {
    return await this.telephoneInput.getAttribute('value');
  }

  async setTypeAbonnementSelect(typeAbonnement) {
    await this.typeAbonnementSelect.sendKeys(typeAbonnement);
  }

  async getTypeAbonnementSelect() {
    return await this.typeAbonnementSelect.element(by.css('option:checked')).getText();
  }

  async typeAbonnementSelectLastOption(timeout?: number) {
    await this.typeAbonnementSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setNiveauSelect(niveau) {
    await this.niveauSelect.sendKeys(niveau);
  }

  async getNiveauSelect() {
    return await this.niveauSelect.element(by.css('option:checked')).getText();
  }

  async niveauSelectLastOption(timeout?: number) {
    await this.niveauSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  getMaterielTechniqueAutoriseInput(timeout?: number) {
    return this.materielTechniqueAutoriseInput;
  }
  async setRemarqueInput(remarque) {
    await this.remarqueInput.sendKeys(remarque);
  }

  async getRemarqueInput() {
    return await this.remarqueInput.getAttribute('value');
  }

  async setTailleHarnaisSelect(tailleHarnais) {
    await this.tailleHarnaisSelect.sendKeys(tailleHarnais);
  }

  async getTailleHarnaisSelect() {
    return await this.tailleHarnaisSelect.element(by.css('option:checked')).getText();
  }

  async tailleHarnaisSelectLastOption(timeout?: number) {
    await this.tailleHarnaisSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setTailleCombinaisonSelect(tailleCombinaison) {
    await this.tailleCombinaisonSelect.sendKeys(tailleCombinaison);
  }

  async getTailleCombinaisonSelect() {
    return await this.tailleCombinaisonSelect.element(by.css('option:checked')).getText();
  }

  async tailleCombinaisonSelectLastOption(timeout?: number) {
    await this.tailleCombinaisonSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async reservationSelectLastOption(timeout?: number) {
    await this.reservationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async reservationSelectOption(option) {
    await this.reservationSelect.sendKeys(option);
  }

  getReservationSelect(): ElementFinder {
    return this.reservationSelect;
  }

  async getReservationSelectedOption() {
    return await this.reservationSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class UserProfileDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-userProfile-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-userProfile'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
