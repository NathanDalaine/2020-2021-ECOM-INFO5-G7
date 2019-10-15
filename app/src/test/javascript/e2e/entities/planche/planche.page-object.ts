import { element, by, ElementFinder } from 'protractor';

export class PlancheComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-planche div table .btn-danger'));
  title = element.all(by.css('jhi-planche div h2#page-heading span')).first();

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

export class PlancheUpdatePage {
  pageTitle = element(by.id('jhi-planche-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  marqueInput = element(by.id('field_marque'));
  modeleInput = element(by.id('field_modele'));
  numeroInput = element(by.id('field_numero'));
  localisationInput = element(by.id('field_localisation'));
  etatInput = element(by.id('field_etat'));
  libelleInput = element(by.id('field_libelle'));
  volumeInput = element(by.id('field_volume'));
  createdAtInput = element(by.id('field_createdAt'));
  createdByInput = element(by.id('field_createdBy'));
  updatedAtInput = element(by.id('field_updatedAt'));
  updatedByInput = element(by.id('field_updatedBy'));
  deletedAtInput = element(by.id('field_deletedAt'));
  deletedByInput = element(by.id('field_deletedBy'));
  reservationSelect = element(by.id('field_reservation'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setMarqueInput(marque) {
    await this.marqueInput.sendKeys(marque);
  }

  async getMarqueInput() {
    return await this.marqueInput.getAttribute('value');
  }

  async setModeleInput(modele) {
    await this.modeleInput.sendKeys(modele);
  }

  async getModeleInput() {
    return await this.modeleInput.getAttribute('value');
  }

  async setNumeroInput(numero) {
    await this.numeroInput.sendKeys(numero);
  }

  async getNumeroInput() {
    return await this.numeroInput.getAttribute('value');
  }

  async setLocalisationInput(localisation) {
    await this.localisationInput.sendKeys(localisation);
  }

  async getLocalisationInput() {
    return await this.localisationInput.getAttribute('value');
  }

  async setEtatInput(etat) {
    await this.etatInput.sendKeys(etat);
  }

  async getEtatInput() {
    return await this.etatInput.getAttribute('value');
  }

  async setLibelleInput(libelle) {
    await this.libelleInput.sendKeys(libelle);
  }

  async getLibelleInput() {
    return await this.libelleInput.getAttribute('value');
  }

  async setVolumeInput(volume) {
    await this.volumeInput.sendKeys(volume);
  }

  async getVolumeInput() {
    return await this.volumeInput.getAttribute('value');
  }

  async setCreatedAtInput(createdAt) {
    await this.createdAtInput.sendKeys(createdAt);
  }

  async getCreatedAtInput() {
    return await this.createdAtInput.getAttribute('value');
  }

  async setCreatedByInput(createdBy) {
    await this.createdByInput.sendKeys(createdBy);
  }

  async getCreatedByInput() {
    return await this.createdByInput.getAttribute('value');
  }

  async setUpdatedAtInput(updatedAt) {
    await this.updatedAtInput.sendKeys(updatedAt);
  }

  async getUpdatedAtInput() {
    return await this.updatedAtInput.getAttribute('value');
  }

  async setUpdatedByInput(updatedBy) {
    await this.updatedByInput.sendKeys(updatedBy);
  }

  async getUpdatedByInput() {
    return await this.updatedByInput.getAttribute('value');
  }

  async setDeletedAtInput(deletedAt) {
    await this.deletedAtInput.sendKeys(deletedAt);
  }

  async getDeletedAtInput() {
    return await this.deletedAtInput.getAttribute('value');
  }

  async setDeletedByInput(deletedBy) {
    await this.deletedByInput.sendKeys(deletedBy);
  }

  async getDeletedByInput() {
    return await this.deletedByInput.getAttribute('value');
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

export class PlancheDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-planche-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-planche'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
