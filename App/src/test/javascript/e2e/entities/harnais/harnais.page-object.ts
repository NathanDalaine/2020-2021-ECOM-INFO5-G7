import { element, by, ElementFinder } from 'protractor';

export class HarnaisComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-harnais div table .btn-danger'));
  title = element.all(by.css('jhi-harnais div h2#page-heading span')).first();

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

export class HarnaisUpdatePage {
  pageTitle = element(by.id('jhi-harnais-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  tailleSelect = element(by.id('field_taille'));
  nombreInput = element(by.id('field_nombre'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTailleSelect(taille) {
    await this.tailleSelect.sendKeys(taille);
  }

  async getTailleSelect() {
    return await this.tailleSelect.element(by.css('option:checked')).getText();
  }

  async tailleSelectLastOption(timeout?: number) {
    await this.tailleSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setNombreInput(nombre) {
    await this.nombreInput.sendKeys(nombre);
  }

  async getNombreInput() {
    return await this.nombreInput.getAttribute('value');
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

export class HarnaisDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-harnais-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-harnais'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
