import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { Subject } from 'rxjs'; // Import Subject
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { JwtModule } from '@auth0/angular-jwt';
import { ReviewDialogComponent } from './components/review-dialog/review-dialog.component';

import { ApproveUserComponent } from './shared/approve-user/approve-user.component';
import { ChangePasswordComponent } from './shared/change-password/change-password.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { HeaderComponent } from './shared/header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { SearchSupervisorComponent } from './shared/search-supervisor/search-supervisor.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SupervisorComponent } from './shared/supervisor/supervisor.component';
import { SystemControllerComponent } from './shared/system-controller/system-controller.component';
import { UpdateProfileComponent } from './shared/update-profile/update-profile.component';
import { UpdateUserRoleComponent } from './shared/update-user-role/update-user-role.component';
import { VerifyApproveComponent } from './shared/verify-approve/verify-approve.component';
import { VerifyUserComponent } from './shared/verify-user/verify-user.component';
import { ActionPlanComponent } from './components/action-plan/action-plan.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CaptureCofsComponent } from './components/capture-cofs/capture-cofs.component';
import { CapureRfiRegisterComponent } from './components/capure-rfi-register/capure-rfi-register.component';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ReviewDialogActionPlanComponent } from './components/review-dialog-action-plan/review-dialog-action-plan.component';
import { UpdateDialogActionPlanComponent } from './components/update-dialog-action-plan/update-dialog-action-plan.component';
import { ReviewDialogCoffsComponent } from './components/review-dialog-coffs/review-dialog-coffs.component';
import { UpdateDialogCoffsComponent } from './components/update-dialog-coffs/update-dialog-coffs.component';
import { DatePipe } from '@angular/common';
import { RfiRegisterResponseComponent } from './components/rfi-register-response/rfi-register-response.component';
import { CoffRegisterResponseComponent } from './components/coff-register-response/coff-register-response.component';


import { RespondedRfiComponent } from './components/responded-rfi/responded-rfi.component';
import { RespondedCoffComponent } from './components/responded-coff/responded-coff.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentCoffComponent } from './components/comment-coff/comment-coff.component';
import { CommentApComponent } from './components/comment-ap/comment-ap.component';
import { ExtentionComponent } from './components/extention/extention.component';
import { ExtensionCoffComponent } from './components/extension-coff/extension-coff.component';
import { AgsaCommentCoffComponent } from './components/agsa-comment-coff/agsa-comment-coff.component';
import { AgsaReportsComponent } from './components/agsa-reports/agsa-reports.component';
import { AgsaReportsCapturedComponent } from './components/agsa-reports-captured/agsa-reports-captured.component';
import { AutoLogoutComponent } from './components/auto-logout/auto-logout.component';
import { ConfirmationSnackbarComponent } from './shared/confirmation-snackbar/confirmation-snackbar.component';
import { SystemReportsComponent } from './shared/system-reports/system-reports.component';
import { GroupedCoafsRecordDialogComponent } from './components/grouped-coafs-record-dialog/grouped-coafs-record-dialog.component';
import { GroupedRecordsDialogComponent } from './components/grouped-records-dialog/grouped-records-dialog.component';
import { CoafResponsesComponent } from './components/coaf-responses/coaf-responses.component';
import { RfiResponsesComponent } from './components/rfi-responses/rfi-responses.component';





export function tokenGetter() {
  return localStorage.getItem('token');
}





@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    SidebarComponent,
    FooterComponent,
    UpdateProfileComponent,
    SearchSupervisorComponent,
    VerifyApproveComponent,
    SupervisorComponent,
    SystemControllerComponent,
    VerifyUserComponent,
    ApproveUserComponent,
    UpdateUserRoleComponent,



    //////////////
    ReviewDialogComponent,
    ActionPlanComponent,
    DashboardComponent,
    CaptureCofsComponent,
    CapureRfiRegisterComponent,
    UpdateDialogComponent,
    ReviewDialogActionPlanComponent,
    UpdateDialogActionPlanComponent,
    ReviewDialogCoffsComponent,
    UpdateDialogCoffsComponent,
    RfiRegisterResponseComponent,
    CoffRegisterResponseComponent,
    RespondedRfiComponent,
    RespondedCoffComponent,
    CommentComponent,
    CommentCoffComponent,
    CommentApComponent,
    ExtentionComponent,
    ExtensionCoffComponent,
    AgsaCommentCoffComponent,
    AgsaReportsComponent,
    AgsaReportsCapturedComponent,
    AutoLogoutComponent,
    ConfirmationSnackbarComponent,
    SystemReportsComponent,
    GroupedCoafsRecordDialogComponent,
    GroupedRecordsDialogComponent,
    CoafResponsesComponent,
    RfiResponsesComponent,

    //////////////



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule, 
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    CommonModule,
    MatSlideToggleModule, // Add this module

   
    // NgbTooltipModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // allowedDomains: ['localhost:8080'],
        // disallowedRoutes: ['localhost:8080/login']
      }
    })
    
  ],
  providers: [
    DatePipe  ,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
