import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { ReviewDialogComponent } from './components/review-dialog/review-dialog.component';
import { ApproveUserComponent } from './shared/approve-user/approve-user.component';
import { ChangePasswordComponent } from './shared/change-password/change-password.component';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { SupervisorComponent } from './shared/supervisor/supervisor.component';
import { SystemControllerComponent } from './shared/system-controller/system-controller.component';
import { UpdateProfileComponent } from './shared/update-profile/update-profile.component';
import { UpdateUserRoleComponent } from './shared/update-user-role/update-user-role.component';
import { VerifyApproveComponent } from './shared/verify-approve/verify-approve.component';
import { VerifyUserComponent } from './shared/verify-user/verify-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActionPlanComponent } from './components/action-plan/action-plan.component';
import { CaptureCofsComponent } from './components/capture-cofs/capture-cofs.component';
import { CapureRfiRegisterComponent } from './components/capure-rfi-register/capure-rfi-register.component';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { UpdateDialogActionPlanComponent } from './components/update-dialog-action-plan/update-dialog-action-plan.component';
import { UpdateDialogCoffsComponent } from './components/update-dialog-coffs/update-dialog-coffs.component';
import { ReviewDialogActionPlanComponent } from './components/review-dialog-action-plan/review-dialog-action-plan.component';
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
import { SystemReportsComponent } from './shared/system-reports/system-reports.component';
import { CoafResponsesComponent } from './components/coaf-responses/coaf-responses.component';
import { RfiResponsesComponent } from './components/rfi-responses/rfi-responses.component';
import { GroupedRecordsDialogComponent } from './components/grouped-records-dialog/grouped-records-dialog.component';
import { GroupedCoafsRecordDialogComponent } from './components/grouped-coafs-record-dialog/grouped-coafs-record-dialog.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role', 'Internal Control', 'Client', 'Head of Units', 'External Auditors'] } },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'External Auditors', 'Client'] } },
  { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role'] } },
  { path: 'verify-approve', component: VerifyApproveComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role', 'Internal Control', 'Client', 'Head of Units', 'External Auditors'] } },
  { path: 'verify-application', component: SupervisorComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role', 'Internal Control', 'Client', 'Head of Units', 'External Auditors'] } },
  { path: 'approve-application', component: SystemControllerComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Approver'] } },
  { path: 'verify-user', component: VerifyUserComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role', 'Internal Control', 'Client', 'Head of Units', 'External Auditors'] } },
  { path: 'approve-user', component: ApproveUserComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role', 'Internal Control', 'Client', 'Head of Units', 'External Auditors'] } },
  { path: 'update-user-role', component: UpdateUserRoleComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role', 'Internal Control', 'Client', 'Head of Units', 'External Auditors'] } },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { expectedRole: ['System Admin', 'Default Role', 'Internal Control', 'Client', 'Head of Units', 'External Auditors', 'Coordinator'] } },

  ///////////////////////////////////////////

  { path: 'ReviewDialog', component: ReviewDialogComponent },
  { path: 'action-plan', component: ActionPlanComponent },
  { path: 'capture-cofs', component: CaptureCofsComponent },
  { path: 'capture-rfi-register', component: CapureRfiRegisterComponent },
  { path: 'update-dialog', component: UpdateDialogComponent },
  { path: 'update-dialog-action-plan', component: UpdateDialogActionPlanComponent },
  { path: 'update-dialog-coffs', component: UpdateDialogCoffsComponent },
  { path: 'review-dialog-action-plan', component: ReviewDialogActionPlanComponent },
  { path: 'rfi-register-response', component: RfiRegisterResponseComponent },
  { path: 'coff-register-response', component: CoffRegisterResponseComponent },
  { path: 'rfi-register-response/:ref', component: RfiRegisterResponseComponent },
  { path: 'coff-register-response/:ref', component: CoffRegisterResponseComponent },
  { path: 'respondedRFI', component: RespondedRfiComponent },
  { path: 'respondedCoff', component: RespondedCoffComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'comment-Coff', component: CommentCoffComponent },
  { path: 'comment-Ap', component: CommentApComponent },
  { path: 'extension', component: ExtentionComponent },
  { path: 'extension-Coff', component: ExtensionCoffComponent },
  { path: 'ag-comment-coff', component: AgsaCommentCoffComponent },
  { path: 'agsaReports', component: AgsaReportsComponent },
  { path: 'agsaReportsCaptured', component: AgsaReportsCapturedComponent },
  { path: 'auto-logout', component: AutoLogoutComponent },
  { path: 'system-reports', component: SystemReportsComponent },



  { path: 'rfi-responses', component: RfiResponsesComponent },
  { path: 'coaf-responses', component: CoafResponsesComponent },
  { path: 'grouped-rfi-responses/:ref', component: GroupedRecordsDialogComponent },
  { path: 'grouped-coff-responses/:ref', component: GroupedCoafsRecordDialogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
