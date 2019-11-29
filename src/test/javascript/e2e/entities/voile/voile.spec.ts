// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { VoileComponentsPage, VoileDeleteDialog, VoileUpdatePage } from './voile.page-object';

const expect = chai.expect;

describe('Voile e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let voileUpdatePage: VoileUpdatePage;
  let voileComponentsPage: VoileComponentsPage;
  let voileDeleteDialog: VoileDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Voiles', async () => {
    await navBarPage.goToEntity('voile');
    voileComponentsPage = new VoileComponentsPage();
    await browser.wait(ec.visibilityOf(voileComponentsPage.title), 5000);
    expect(await voileComponentsPage.getTitle()).to.eq('ecomgucvoileApp.voile.home.title');
  });

  it('should load create Voile page', async () => {
    await voileComponentsPage.clickOnCreateButton();
    voileUpdatePage = new VoileUpdatePage();
    expect(await voileUpdatePage.getPageTitle()).to.eq('ecomgucvoileApp.voile.home.createOrEditLabel');
    await voileUpdatePage.cancel();
  });

  it('should create and save Voiles', async () => {
    const nbButtonsBeforeCreate = await voileComponentsPage.countDeleteButtons();

    await voileComponentsPage.clickOnCreateButton();
    await promise.all([
      voileUpdatePage.setSurfaceInput('5'),
      voileUpdatePage.setMarqueInput('marque'),
      voileUpdatePage.setModeleInput('modele'),
      voileUpdatePage.setNumeroInput('numero'),
      voileUpdatePage.setLocalisationInput('localisation'),
      voileUpdatePage.setEtatInput('etat'),
      voileUpdatePage.setLibelleInput('libelle'),
      voileUpdatePage.setCreatedByInput('createdBy'),
      voileUpdatePage.setUpdatedByInput('updatedBy'),
      voileUpdatePage.setDeletedByInput('deletedBy'),
      voileUpdatePage.setCreatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      voileUpdatePage.setUpdatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      voileUpdatePage.setDeletedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      voileUpdatePage.niveaurequisSelectLastOption()
    ]);
    expect(await voileUpdatePage.getSurfaceInput()).to.eq('5', 'Expected surface value to be equals to 5');
    expect(await voileUpdatePage.getMarqueInput()).to.eq('marque', 'Expected Marque value to be equals to marque');
    expect(await voileUpdatePage.getModeleInput()).to.eq('modele', 'Expected Modele value to be equals to modele');
    expect(await voileUpdatePage.getNumeroInput()).to.eq('numero', 'Expected Numero value to be equals to numero');
    expect(await voileUpdatePage.getLocalisationInput()).to.eq('localisation', 'Expected Localisation value to be equals to localisation');
    expect(await voileUpdatePage.getEtatInput()).to.eq('etat', 'Expected Etat value to be equals to etat');
    expect(await voileUpdatePage.getLibelleInput()).to.eq('libelle', 'Expected Libelle value to be equals to libelle');
    const selectedGree = voileUpdatePage.getGreeInput();
    if (await selectedGree.isSelected()) {
      await voileUpdatePage.getGreeInput().click();
      expect(await voileUpdatePage.getGreeInput().isSelected(), 'Expected gree not to be selected').to.be.false;
    } else {
      await voileUpdatePage.getGreeInput().click();
      expect(await voileUpdatePage.getGreeInput().isSelected(), 'Expected gree to be selected').to.be.true;
    }
    expect(await voileUpdatePage.getCreatedByInput()).to.eq('createdBy', 'Expected CreatedBy value to be equals to createdBy');
    expect(await voileUpdatePage.getUpdatedByInput()).to.eq('updatedBy', 'Expected UpdatedBy value to be equals to updatedBy');
    expect(await voileUpdatePage.getDeletedByInput()).to.eq('deletedBy', 'Expected DeletedBy value to be equals to deletedBy');
    expect(await voileUpdatePage.getCreatedAtInput()).to.contain('2001-01-01T02:30', 'Expected createdAt value to be equals to 2000-12-31');
    expect(await voileUpdatePage.getUpdatedAtInput()).to.contain('2001-01-01T02:30', 'Expected updatedAt value to be equals to 2000-12-31');
    expect(await voileUpdatePage.getDeletedAtInput()).to.contain('2001-01-01T02:30', 'Expected deletedAt value to be equals to 2000-12-31');
    await voileUpdatePage.save();
    expect(await voileUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await voileComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Voile', async () => {
    const nbButtonsBeforeDelete = await voileComponentsPage.countDeleteButtons();
    await voileComponentsPage.clickOnLastDeleteButton();

    voileDeleteDialog = new VoileDeleteDialog();
    expect(await voileDeleteDialog.getDialogTitle()).to.eq('ecomgucvoileApp.voile.delete.question');
    await voileDeleteDialog.clickOnConfirmButton();

    expect(await voileComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
