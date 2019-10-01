// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReservationComponentsPage, ReservationDeleteDialog, ReservationUpdatePage } from './reservation.page-object';

const expect = chai.expect;

describe('Reservation e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let reservationUpdatePage: ReservationUpdatePage;
  let reservationComponentsPage: ReservationComponentsPage;
  let reservationDeleteDialog: ReservationDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Reservations', async () => {
    await navBarPage.goToEntity('reservation');
    reservationComponentsPage = new ReservationComponentsPage();
    await browser.wait(ec.visibilityOf(reservationComponentsPage.title), 5000);
    expect(await reservationComponentsPage.getTitle()).to.eq('eComGucApp.reservation.home.title');
  });

  it('should load create Reservation page', async () => {
    await reservationComponentsPage.clickOnCreateButton();
    reservationUpdatePage = new ReservationUpdatePage();
    expect(await reservationUpdatePage.getPageTitle()).to.eq('eComGucApp.reservation.home.createOrEditLabel');
    await reservationUpdatePage.cancel();
  });

  it('should create and save Reservations', async () => {
    const nbButtonsBeforeCreate = await reservationComponentsPage.countDeleteButtons();

    await reservationComponentsPage.clickOnCreateButton();
    await promise.all([
      reservationUpdatePage.setDateReservationInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      reservationUpdatePage.setDateRenduInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      reservationUpdatePage.setRemarquesInput('remarques'),
      reservationUpdatePage.voileSelectLastOption(),
      reservationUpdatePage.userSelectLastOption(),
      reservationUpdatePage.combinaisonSelectLastOption(),
      reservationUpdatePage.harnaisSelectLastOption(),
      reservationUpdatePage.plancheSelectLastOption()
    ]);
    expect(await reservationUpdatePage.getDateReservationInput()).to.contain(
      '2001-01-01T02:30',
      'Expected dateReservation value to be equals to 2000-12-31'
    );
    expect(await reservationUpdatePage.getDateRenduInput()).to.contain(
      '2001-01-01T02:30',
      'Expected dateRendu value to be equals to 2000-12-31'
    );
    expect(await reservationUpdatePage.getRemarquesInput()).to.eq('remarques', 'Expected Remarques value to be equals to remarques');
    await reservationUpdatePage.save();
    expect(await reservationUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await reservationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Reservation', async () => {
    const nbButtonsBeforeDelete = await reservationComponentsPage.countDeleteButtons();
    await reservationComponentsPage.clickOnLastDeleteButton();

    reservationDeleteDialog = new ReservationDeleteDialog();
    expect(await reservationDeleteDialog.getDialogTitle()).to.eq('eComGucApp.reservation.delete.question');
    await reservationDeleteDialog.clickOnConfirmButton();

    expect(await reservationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
