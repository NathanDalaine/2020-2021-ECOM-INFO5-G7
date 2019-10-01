// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserProfileComponentsPage, UserProfileDeleteDialog, UserProfileUpdatePage } from './user-profile.page-object';

const expect = chai.expect;

describe('UserProfile e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let userProfileUpdatePage: UserProfileUpdatePage;
  let userProfileComponentsPage: UserProfileComponentsPage;
  let userProfileDeleteDialog: UserProfileDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load UserProfiles', async () => {
    await navBarPage.goToEntity('user-profile');
    userProfileComponentsPage = new UserProfileComponentsPage();
    await browser.wait(ec.visibilityOf(userProfileComponentsPage.title), 5000);
    expect(await userProfileComponentsPage.getTitle()).to.eq('eComGucApp.userProfile.home.title');
  });

  it('should load create UserProfile page', async () => {
    await userProfileComponentsPage.clickOnCreateButton();
    userProfileUpdatePage = new UserProfileUpdatePage();
    expect(await userProfileUpdatePage.getPageTitle()).to.eq('eComGucApp.userProfile.home.createOrEditLabel');
    await userProfileUpdatePage.cancel();
  });

  it('should create and save UserProfiles', async () => {
    const nbButtonsBeforeCreate = await userProfileComponentsPage.countDeleteButtons();

    await userProfileComponentsPage.clickOnCreateButton();
    await promise.all([
      userProfileUpdatePage.setLocalisationInput('localisation'),
      userProfileUpdatePage.setDateEcheanceInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      userProfileUpdatePage.setDateNaissanceInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      userProfileUpdatePage.setDateAdhesionInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      userProfileUpdatePage.prefTailleSelectLastOption(),
      userProfileUpdatePage.setAdresseInput('adresse'),
      userProfileUpdatePage.setTelephoneInput('telephone'),
      userProfileUpdatePage.typeAbonnementSelectLastOption(),
      userProfileUpdatePage.niveauSelectLastOption(),
      userProfileUpdatePage.setRemarqueInput('remarque')
    ]);
    expect(await userProfileUpdatePage.getLocalisationInput()).to.eq(
      'localisation',
      'Expected Localisation value to be equals to localisation'
    );
    expect(await userProfileUpdatePage.getDateEcheanceInput()).to.contain(
      '2001-01-01T02:30',
      'Expected dateEcheance value to be equals to 2000-12-31'
    );
    expect(await userProfileUpdatePage.getDateNaissanceInput()).to.contain(
      '2001-01-01T02:30',
      'Expected dateNaissance value to be equals to 2000-12-31'
    );
    expect(await userProfileUpdatePage.getDateAdhesionInput()).to.contain(
      '2001-01-01T02:30',
      'Expected dateAdhesion value to be equals to 2000-12-31'
    );
    expect(await userProfileUpdatePage.getAdresseInput()).to.eq('adresse', 'Expected Adresse value to be equals to adresse');
    expect(await userProfileUpdatePage.getTelephoneInput()).to.eq('telephone', 'Expected Telephone value to be equals to telephone');
    const selectedMaterielTechniqueAutorise = userProfileUpdatePage.getMaterielTechniqueAutoriseInput();
    if (await selectedMaterielTechniqueAutorise.isSelected()) {
      await userProfileUpdatePage.getMaterielTechniqueAutoriseInput().click();
      expect(
        await userProfileUpdatePage.getMaterielTechniqueAutoriseInput().isSelected(),
        'Expected materielTechniqueAutorise not to be selected'
      ).to.be.false;
    } else {
      await userProfileUpdatePage.getMaterielTechniqueAutoriseInput().click();
      expect(
        await userProfileUpdatePage.getMaterielTechniqueAutoriseInput().isSelected(),
        'Expected materielTechniqueAutorise to be selected'
      ).to.be.true;
    }
    expect(await userProfileUpdatePage.getRemarqueInput()).to.eq('remarque', 'Expected Remarque value to be equals to remarque');
    await userProfileUpdatePage.save();
    expect(await userProfileUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await userProfileComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last UserProfile', async () => {
    const nbButtonsBeforeDelete = await userProfileComponentsPage.countDeleteButtons();
    await userProfileComponentsPage.clickOnLastDeleteButton();

    userProfileDeleteDialog = new UserProfileDeleteDialog();
    expect(await userProfileDeleteDialog.getDialogTitle()).to.eq('eComGucApp.userProfile.delete.question');
    await userProfileDeleteDialog.clickOnConfirmButton();

    expect(await userProfileComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
