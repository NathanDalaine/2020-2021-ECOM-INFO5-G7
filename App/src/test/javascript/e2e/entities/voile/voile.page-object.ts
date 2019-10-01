import { element, by, ElementFinder } from 'protractor';

export class VoileComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-voile div table .btn-danger'));
  title = element.all(by.css('jhi-voile div h2#page-heading span')).first();

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

export class VoileUpdatePage {
  pageTitle = element(by.id('jhi-voile-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  surfaceInput = element(by.id('field_surface'));
  marqueInput = element(by.id('field_marque'));
  modeleInput = element(by.id('field_modele'));
  numeroInput = element(by.id('field_numero'));
  localisationInput = element(by.id('field_localisation'));
  etatInput = element(by.id('field_etat'));
  libelleInput = element(by.id('field_libelle'));
  greeInput = element(by.id('field_gree'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setSurfaceInput(surface) {
    await this.surfaceInput.sendKeys(surface);
  }

  async getSurfaceInput() {
    return await this.surfaceInput.getAttribute('value');
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

  getGreeInput(timeout?: number) {
    return this.greeInput;
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

export class VoileDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-voile-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-voile'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
