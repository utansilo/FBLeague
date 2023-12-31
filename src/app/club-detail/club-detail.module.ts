import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router';
import { ClubDetailPageRoutingModule } from './club-detail-routing.module';

import { ClubDetailPage } from './club-detail.page';

const routes: Routes = [
  {
    path: 'club-detail/teamId',
    component: ClubDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubDetailPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClubDetailPage]
})
export class ClubDetailPageModule {}
