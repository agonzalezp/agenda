import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatTreeModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTreeComponent } from './my-tree/my-tree.component';
import { MyDragDropComponent } from './my-drag-drop/my-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewFormComponent } from './new-form/new-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FrmPersonNewComponent } from './frm-person-new/frm-person-new.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyTableComponent,
    MyDashComponent,
    MyTreeComponent,
    MyDragDropComponent,
    NewFormComponent,
    FrmPersonNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
