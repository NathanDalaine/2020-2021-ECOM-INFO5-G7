// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PlancheComponentsPage, PlancheDeleteDialog, PlancheUpdatePage } from './planche.page-object';

const expect = chai.expect;

describe('Planche e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let plancheUpdatePage: PlancheUpdatePage;
  let plancheComponentsPage: PlancheComponentsPage;
  let plancheDeleteDialog: PlancheDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Planches', async () => {
    await navBarPage.goToEntity('planche');
    plancheComponentsPage = new PlancheComponentsPage();
    await browser.wait(ec.visibilityOf(plancheComponentsPage.title), 5000);
    expect(await plancheComponentsPage.getTitle()).to.eq('eComGucApp.planche.home.title');
  });

  it('should load create Planche page', async () => {
    await plancheComponentsPage.clickOnCreateButton();
    plancheUpdatePage = new PlancheUpdatePage();
    expect(await plancheUpdatePage.getPageTitle()).to.eq('eComGucApp.planche.home.createOrEditLabel');
    await plancheUpdatePage.cancel();
  });

  it('should create and save Planches', async () => {
    const nbButtonsBeforeCreate = await plancheComponentsPage.countDeleteButtons();

    await plancheComponentsPage.clickOnCreateButton();
    await promise.all([
      plancheUpdatePage.setMarqueInput('marque'),
      plancheUpdatePage.setModeleInput('modele'),
      plancheUpdatePage.setNumeroInput('numero'),
      plancheUpdatePage.setLocalisationInput('localisation'),
      plancheUpdatePage.setEtatInput('etat'),
      plancheUpdatePage.setLibelleInput('libelle'),
      plancheUpdatePage.setVolumeInput('5')
    ]);
    expect(await plancheUpdatePage.getMarqueInput()).to.eq('marque', 'Expected Marque value to be equals to marque');
    expect(await plancheUpdatePage.getModeleInput()).to.eq('modele', 'Expected Modele value to be equals to modele');
    expect(await plancheUpdatePage.getNumeroInput()).to.eq('numero', 'Expected Numero value to be equals to numero');
    expect(await plancheUpdatePage.getLocalisationInput()).to.eq(
      'localisation',
      'Expected Localisation value to be equals to localisation'
    );
    expect(await plancheUpdatePage.getEtatInput()).to.eq('etat', 'Expected Etat value to be equals to etat');
    expect(await plancheUpdatePage.getLibelleInput()).to.eq('libelle', 'Expected Libelle value to be equals to libelle');
    expect(await plancheUpdatePage.getVolumeInput()).to.eq('5', 'Expected volume value to be equals to 5');
    await plancheUpdatePage.save();
    expect(await plancheUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await plancheComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Planche', async () => {
    const nbButtonsBeforeDelete = await plancheComponentsPage.countDeleteButtons();
    await plancheComponentsPage.clickOnLastDeleteButton();

    plancheDeleteDialog = new PlancheDeleteDialog();
    expect(await plancheDeleteDialog.getDialogTitle()).to.eq('eComGucApp.planche.delete.question');
    await plancheDeleteDialog.clickOnConfirmButton();

    expect(await plancheComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
