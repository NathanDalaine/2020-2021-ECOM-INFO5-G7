// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
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
      combinaisonUpdatePage.setCreatedByInput('createdBy'),
      combinaisonUpdatePage.setUpdatedByInput('updatedBy'),
      combinaisonUpdatePage.setDeletedByInput('deletedBy'),
      combinaisonUpdatePage.setCreatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      combinaisonUpdatePage.setUpdatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      combinaisonUpdatePage.setDeletedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM')
    ]);
    expect(await combinaisonUpdatePage.getEtatInput()).to.eq('etat', 'Expected Etat value to be equals to etat');
    expect(await combinaisonUpdatePage.getCreatedByInput()).to.eq('createdBy', 'Expected CreatedBy value to be equals to createdBy');
    expect(await combinaisonUpdatePage.getUpdatedByInput()).to.eq('updatedBy', 'Expected UpdatedBy value to be equals to updatedBy');
    expect(await combinaisonUpdatePage.getDeletedByInput()).to.eq('deletedBy', 'Expected DeletedBy value to be equals to deletedBy');
    expect(await combinaisonUpdatePage.getCreatedAtInput()).to.contain(
      '2001-01-01T02:30',
      'Expected createdAt value to be equals to 2000-12-31'
    );
    expect(await combinaisonUpdatePage.getUpdatedAtInput()).to.contain(
      '2001-01-01T02:30',
      'Expected updatedAt value to be equals to 2000-12-31'
    );
    expect(await combinaisonUpdatePage.getDeletedAtInput()).to.contain(
      '2001-01-01T02:30',
      'Expected deletedAt value to be equals to 2000-12-31'
    );
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
