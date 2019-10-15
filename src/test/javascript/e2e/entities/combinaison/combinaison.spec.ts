// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CombinaisonComponentsPage, CombinaisonDeleteDialog, CombinaisonUpdatePage } from './combinaison.page-object';

const expect = chai.expect;

describe('Combinaison e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let combinaisonUpdatePage: CombinaisonUpdatePage;
  let combinaisonComponentsPage: CombinaisonComponentsPage;
  let combinaisonDeleteDialog: CombinaisonDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Combinaisons', async () => {
    await navBarPage.goToEntity('combinaison');
    combinaisonComponentsPage = new CombinaisonComponentsPage();
    await browser.wait(ec.visibilityOf(combinaisonComponentsPage.title), 5000);
    expect(await combinaisonComponentsPage.getTitle()).to.eq('ecomgucvoileApp.combinaison.home.title');
  });

  it('should load create Combinaison page', async () => {
    await combinaisonComponentsPage.clickOnCreateButton();
    combinaisonUpdatePage = new CombinaisonUpdatePage();
    expect(await combinaisonUpdatePage.getPageTitle()).to.eq('ecomgucvoileApp.combinaison.home.createOrEditLabel');
    await combinaisonUpdatePage.cancel();
  });

  it('should create and save Combinaisons', async () => {
    const nbButtonsBeforeCreate = await combinaisonComponentsPage.countDeleteButtons();

    await combinaisonComponentsPage.clickOnCreateButton();
    await promise.all([
      combinaisonUpdatePage.tailleSelectLastOption(),
      combinaisonUpdatePage.setEtatInput('etat'),
      combinaisonUpdatePage.setCreatedAtInput('createdAt'),
      combinaisonUpdatePage.setCreatedByInput('createdBy'),
      combinaisonUpdatePage.setUpdatedAtInput('updatedAt'),
      combinaisonUpdatePage.setUpdatedByInput('updatedBy'),
      combinaisonUpdatePage.setDeletedAtInput('deletedAt'),
      combinaisonUpdatePage.setDeletedByInput('deletedBy'),
      combinaisonUpdatePage.reservationSelectLastOption()
    ]);
    expect(await combinaisonUpdatePage.getEtatInput()).to.eq('etat', 'Expected Etat value to be equals to etat');
    expect(await combinaisonUpdatePage.getCreatedAtInput()).to.eq('createdAt', 'Expected CreatedAt value to be equals to createdAt');
    expect(await combinaisonUpdatePage.getCreatedByInput()).to.eq('createdBy', 'Expected CreatedBy value to be equals to createdBy');
    expect(await combinaisonUpdatePage.getUpdatedAtInput()).to.eq('updatedAt', 'Expected UpdatedAt value to be equals to updatedAt');
    expect(await combinaisonUpdatePage.getUpdatedByInput()).to.eq('updatedBy', 'Expected UpdatedBy value to be equals to updatedBy');
    expect(await combinaisonUpdatePage.getDeletedAtInput()).to.eq('deletedAt', 'Expected DeletedAt value to be equals to deletedAt');
    expect(await combinaisonUpdatePage.getDeletedByInput()).to.eq('deletedBy', 'Expected DeletedBy value to be equals to deletedBy');
    await combinaisonUpdatePage.save();
    expect(await combinaisonUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await combinaisonComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Combinaison', async () => {
    const nbButtonsBeforeDelete = await combinaisonComponentsPage.countDeleteButtons();
    await combinaisonComponentsPage.clickOnLastDeleteButton();

    combinaisonDeleteDialog = new CombinaisonDeleteDialog();
    expect(await combinaisonDeleteDialog.getDialogTitle()).to.eq('ecomgucvoileApp.combinaison.delete.question');
    await combinaisonDeleteDialog.clickOnConfirmButton();

    expect(await combinaisonComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
