// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
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
    expect(await harnaisComponentsPage.getTitle()).to.eq('ecomgucvoileApp.harnais.home.title');
  });

  it('should load create Harnais page', async () => {
    await harnaisComponentsPage.clickOnCreateButton();
    harnaisUpdatePage = new HarnaisUpdatePage();
    expect(await harnaisUpdatePage.getPageTitle()).to.eq('ecomgucvoileApp.harnais.home.createOrEditLabel');
    await harnaisUpdatePage.cancel();
  });

  it('should create and save Harnais', async () => {
    const nbButtonsBeforeCreate = await harnaisComponentsPage.countDeleteButtons();

    await harnaisComponentsPage.clickOnCreateButton();
    await promise.all([
      harnaisUpdatePage.tailleSelectLastOption(),
      harnaisUpdatePage.setEtatInput('etat'),
      harnaisUpdatePage.setCreatedByInput('createdBy'),
      harnaisUpdatePage.setUpdatedByInput('updatedBy'),
      harnaisUpdatePage.setDeletedByInput('deletedBy'),
      harnaisUpdatePage.setCreatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      harnaisUpdatePage.setUpdatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      harnaisUpdatePage.setDeletedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      harnaisUpdatePage.reservationSelectLastOption()
    ]);
    expect(await harnaisUpdatePage.getEtatInput()).to.eq('etat', 'Expected Etat value to be equals to etat');
    expect(await harnaisUpdatePage.getCreatedByInput()).to.eq('createdBy', 'Expected CreatedBy value to be equals to createdBy');
    expect(await harnaisUpdatePage.getUpdatedByInput()).to.eq('updatedBy', 'Expected UpdatedBy value to be equals to updatedBy');
    expect(await harnaisUpdatePage.getDeletedByInput()).to.eq('deletedBy', 'Expected DeletedBy value to be equals to deletedBy');
    expect(await harnaisUpdatePage.getCreatedAtInput()).to.contain(
      '2001-01-01T02:30',
      'Expected createdAt value to be equals to 2000-12-31'
    );
    expect(await harnaisUpdatePage.getUpdatedAtInput()).to.contain(
      '2001-01-01T02:30',
      'Expected updatedAt value to be equals to 2000-12-31'
    );
    expect(await harnaisUpdatePage.getDeletedAtInput()).to.contain(
      '2001-01-01T02:30',
      'Expected deletedAt value to be equals to 2000-12-31'
    );
    await harnaisUpdatePage.save();
    expect(await harnaisUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await harnaisComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Harnais', async () => {
    const nbButtonsBeforeDelete = await harnaisComponentsPage.countDeleteButtons();
    await harnaisComponentsPage.clickOnLastDeleteButton();

    harnaisDeleteDialog = new HarnaisDeleteDialog();
    expect(await harnaisDeleteDialog.getDialogTitle()).to.eq('ecomgucvoileApp.harnais.delete.question');
    await harnaisDeleteDialog.clickOnConfirmButton();

    expect(await harnaisComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
