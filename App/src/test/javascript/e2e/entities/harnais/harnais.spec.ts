// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HarnaisComponentsPage, HarnaisDeleteDialog, HarnaisUpdatePage } from './harnais.page-object';

const expect = chai.expect;

describe('Harnais e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let harnaisUpdatePage: HarnaisUpdatePage;
  let harnaisComponentsPage: HarnaisComponentsPage;
  let harnaisDeleteDialog: HarnaisDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Harnais', async () => {
    await navBarPage.goToEntity('harnais');
    harnaisComponentsPage = new HarnaisComponentsPage();
    await browser.wait(ec.visibilityOf(harnaisComponentsPage.title), 5000);
    expect(await harnaisComponentsPage.getTitle()).to.eq('eComGucApp.harnais.home.title');
  });

  it('should load create Harnais page', async () => {
    await harnaisComponentsPage.clickOnCreateButton();
    harnaisUpdatePage = new HarnaisUpdatePage();
    expect(await harnaisUpdatePage.getPageTitle()).to.eq('eComGucApp.harnais.home.createOrEditLabel');
    await harnaisUpdatePage.cancel();
  });

  it('should create and save Harnais', async () => {
    const nbButtonsBeforeCreate = await harnaisComponentsPage.countDeleteButtons();

    await harnaisComponentsPage.clickOnCreateButton();
    await promise.all([harnaisUpdatePage.tailleSelectLastOption(), harnaisUpdatePage.setNombreInput('5')]);
    expect(await harnaisUpdatePage.getNombreInput()).to.eq('5', 'Expected nombre value to be equals to 5');
    await harnaisUpdatePage.save();
    expect(await harnaisUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await harnaisComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Harnais', async () => {
    const nbButtonsBeforeDelete = await harnaisComponentsPage.countDeleteButtons();
    await harnaisComponentsPage.clickOnLastDeleteButton();

    harnaisDeleteDialog = new HarnaisDeleteDialog();
    expect(await harnaisDeleteDialog.getDialogTitle()).to.eq('eComGucApp.harnais.delete.question');
    await harnaisDeleteDialog.clickOnConfirmButton();

    expect(await harnaisComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
