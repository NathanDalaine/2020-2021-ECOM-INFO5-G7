import { element, by, ElementFinder } from 'protractor';

export class ReservationComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-reservation div table .btn-danger'));
  title = element.all(by.css('jhi-reservation div h2#page-heading span')).first();

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

export class ReservationUpdatePage {
  pageTitle = element(by.id('jhi-reservation-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  dateReservationInput = element(by.id('field_dateReservation'));
  dateRenduInput = element(by.id('field_dateRendu'));
  remarquesInput = element(by.id('field_remarques'));
  createdAtInput = element(by.id('field_createdAt'));
  createdByInput = element(by.id('field_createdBy'));
  updatedAtInput = element(by.id('field_updatedAt'));
  updatedByInput = element(by.id('field_updatedBy'));
  deletedAtInput = element(by.id('field_deletedAt'));
  deletedByInput = element(by.id('field_deletedBy'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDateReservationInput(dateReservation) {
    await this.dateReservationInput.sendKeys(dateReservation);
  }

  async getDateReservationInput() {
    return await this.dateReservationInput.getAttribute('value');
  }

  async setDateRenduInput(dateRendu) {
    await this.dateRenduInput.sendKeys(dateRendu);
  }

  async getDateRenduInput() {
    return await this.dateRenduInput.getAttribute('value');
  }

  async setRemarquesInput(remarques) {
    await this.remarquesInput.sendKeys(remarques);
  }

  async getRemarquesInput() {
    return await this.remarquesInput.getAttribute('value');
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

export class ReservationDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-reservation-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-reservation'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
